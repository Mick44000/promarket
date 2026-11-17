/**
 * Server-only unsubscribe flow for promarket.fr/desinscription.
 *
 * Env (Vercel Production and Preview, never NEXT_PUBLIC_):
 * - GHL_API_TOKEN — sub-account Private Integration token (contacts.readonly + contacts.write)
 * - GHL_LOCATION_ID — sub-account id. Production value: HKQ1I48YBZjxm4iDyG0T
 *
 * The repo had no existing GoHighLevel env names, so these are the names used.
 * Missing vars fail the request with a neutral message. They are read at call
 * time so `next build` does not need them.
 *
 * LeadConnector API v2 (Version 2021-07-28):
 * - GET /contacts/search/duplicate?locationId&email
 * - PUT /contacts/{id} with dndSettings.Email.status = "active" (this version's
 *   DndSettingsSchema uses the PascalCase channel key Email, not email)
 * - POST /contacts/{id}/tags — additive, so existing tags are kept
 * - POST /contacts/ when the address is unknown, then the same DND + tag
 * - POST /contacts/{id}/notes
 */

const GHL_BASE = "https://services.leadconnectorhq.com";
const GHL_VERSION = "2021-07-28";
const UNSUBSCRIBE_TAG = "desinscrit";
const WINDOW_MS = 10 * 60 * 1000;
const MAX_HITS = 5;
const LIMITER_KEY = "__promarketUnsubscribeLimiter";

export const SUCCESS_MESSAGE = "C’est noté. Tu ne recevras plus d’emails de Promarket à cette adresse.";
export const RETRY_MESSAGE = "Cette demande n’a pas abouti. Réessaie plus tard.";
export const INVALID_EMAIL_MESSAGE = "Indique une adresse email valide.";
export const CONFIRM_MESSAGE = "Coche la case pour confirmer que tu ne veux plus recevoir d’emails.";

const EMAIL_PATTERN =
  /^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?)+$/;

export function normalizeEmail(value) {
  if (Array.isArray(value)) value = value[0];
  if (typeof value !== "string") return "";
  return value.trim().toLowerCase();
}

/** Query values are already decoded once by the URL parser. "+" often arrives as a space. */
export function emailFromQuery(value) {
  if (Array.isArray(value)) value = value[0];
  if (typeof value !== "string") return "";
  let text = value.trim();
  if (!text || text.length > 254) return "";
  if (/%[0-9A-Fa-f]{2}/.test(text)) {
    try {
      const decoded = decodeURIComponent(text).trim();
      if (decoded.length <= 254) text = decoded;
    } catch {
      // Keep the once-decoded value.
    }
  }
  return text.replace(/ /g, "+").toLowerCase();
}

export function isValidEmail(email) {
  if (typeof email !== "string" || email.length > 254 || email.includes("..")) return false;
  if (!EMAIL_PATTERN.test(email)) return false;
  const local = email.slice(0, email.lastIndexOf("@"));
  return local.length > 0 && local.length <= 64 && !local.startsWith(".") && !local.endsWith(".");
}

export function messageForState(etat) {
  if (etat === "ok") return { ok: true, message: SUCCESS_MESSAGE };
  if (etat === "invalide") return { ok: false, message: INVALID_EMAIL_MESSAGE };
  if (etat === "confirmer") return { ok: false, message: CONFIRM_MESSAGE };
  if (etat === "erreur") return { ok: false, message: RETRY_MESSAGE };
  return null;
}

export function stateForResult(result) {
  if (result.ok) return "ok";
  if (result.message === INVALID_EMAIL_MESSAGE) return "invalide";
  if (result.message === CONFIRM_MESSAGE) return "confirmer";
  return "erreur";
}

export function originAllowed(origin, host) {
  if (!origin) return true;
  if (!host) return false;
  try {
    return new URL(origin).host === host;
  } catch {
    return false;
  }
}

function isIpv4(value) {
  const parts = value.split(".");
  if (parts.length !== 4) return false;
  return parts.every((part) => /^\d{1,3}$/.test(part) && Number(part) <= 255);
}

function isIp(value) {
  if (typeof value !== "string" || value.length < 2 || value.length > 64) return false;
  if (isIpv4(value)) return true;
  if (!value.includes(":") || !/^[0-9a-fA-F:.]+$/.test(value)) return false;
  return value.includes("::") || value.split(":").length >= 3;
}

export function clientKey(headers, fallbackIp) {
  const read = (name) => {
    const value = headers?.get?.(name);
    return typeof value === "string" ? value.split(",")[0].trim() : "";
  };
  const candidates = [fallbackIp, read("x-real-ip"), read("x-vercel-forwarded-for")];
  for (const candidate of candidates) {
    if (isIp(candidate)) return candidate;
  }
  return "unknown";
}

export function createRateLimiter({ windowMs = WINDOW_MS, max = MAX_HITS, now = () => Date.now() } = {}) {
  const hits = new Map();
  return {
    allow(key) {
      const at = now();
      const recent = (hits.get(key) || []).filter((ts) => at - ts < windowMs);
      if (recent.length >= max) {
        hits.set(key, recent);
        return false;
      }
      recent.push(at);
      if (hits.size > 2000) hits.clear();
      hits.set(key, recent);
      return true;
    },
  };
}

function limiter() {
  if (!globalThis[LIMITER_KEY]) globalThis[LIMITER_KEY] = createRateLimiter();
  return globalThis[LIMITER_KEY];
}

function readConfig(env) {
  const token = typeof env.GHL_API_TOKEN === "string" ? env.GHL_API_TOKEN.trim() : "";
  const locationId = typeof env.GHL_LOCATION_ID === "string" ? env.GHL_LOCATION_ID.trim() : "";
  if (!token || !locationId) return null;
  return { token, locationId };
}

function confirmed(value) {
  if (value === true || value === 1) return true;
  if (typeof value !== "string") return false;
  return ["1", "true", "on", "oui", "yes"].includes(value.trim().toLowerCase());
}

function noteBody(isoDate) {
  return `Désinscription emails via promarket.fr/desinscription le ${isoDate}`;
}

function emailDnd() {
  return {
    Email: {
      status: "active",
      message: "Désinscription via promarket.fr/desinscription",
      code: "OPTED_OUT",
    },
  };
}

function apiMessage(data) {
  const message = data?.message ?? data?.error ?? "";
  if (Array.isArray(message)) return message.map(String).join(" ");
  return String(message);
}

function contactId(data) {
  if (!data || typeof data !== "object") return null;
  const contact = data.contact && typeof data.contact === "object" ? data.contact : null;
  const id = contact?.id ?? data.id;
  if (typeof id !== "string" || !/^[A-Za-z0-9]+$/.test(id)) return null;
  return id;
}

function missingContact(result) {
  if (contactId(result.data)) return false;
  if (result.status === 404) return true;
  if (result.status === 200) {
    const contact = result.data?.contact;
    if (contact && typeof contact === "object") return false;
    return true;
  }
  if (result.status !== 400) return false;
  return /not found|no contact|no duplicate|does not exist|could not find|couldn't find/i.test(apiMessage(result.data));
}

function duplicateContact(result) {
  return result.status === 400 && /duplicate|already exists/i.test(apiMessage(result.data));
}

async function ghl(config, label, path, { method = "GET", body } = {}, fetchImpl) {
  let response;
  try {
    response = await fetchImpl(`${GHL_BASE}${path}`, {
      method,
      cache: "no-store",
      headers: {
        Authorization: `Bearer ${config.token}`,
        Version: GHL_VERSION,
        Accept: "application/json",
        ...(body ? { "Content-Type": "application/json" } : {}),
      },
      body: body ? JSON.stringify(body) : undefined,
    });
  } catch {
    throw new Error(`GHL ${label} unreachable`);
  }
  const text = await response.text();
  let data = null;
  if (text) {
    try {
      data = JSON.parse(text);
    } catch {
      data = null;
    }
  }
  return { ok: response.ok, status: response.status, data };
}

function ensureOk(result, label) {
  if (!result.ok || result.data?.succeeded === false) {
    throw new Error(`GHL ${label} failed (${result.status})`);
  }
  return result;
}

async function findContact(config, email, fetchImpl) {
  const path = `/contacts/search/duplicate?locationId=${encodeURIComponent(config.locationId)}&email=${encodeURIComponent(email)}`;
  const result = await ghl(config, "duplicate-search", path, { method: "GET" }, fetchImpl);
  if (missingContact(result)) return null;
  if (!result.ok) throw new Error(`GHL duplicate-search failed (${result.status})`);
  const id = contactId(result.data);
  if (!id) throw new Error("GHL duplicate-search failed (200)");
  return id;
}

async function markUnsubscribed(config, id, iso, fetchImpl) {
  ensureOk(
    await ghl(
      config,
      "update-dnd",
      `/contacts/${id}`,
      { method: "PUT", body: { dndSettings: emailDnd() } },
      fetchImpl,
    ),
    "update-dnd",
  );
  ensureOk(
    await ghl(
      config,
      "add-tag",
      `/contacts/${id}/tags`,
      { method: "POST", body: { tags: [UNSUBSCRIBE_TAG] } },
      fetchImpl,
    ),
    "add-tag",
  );
  ensureOk(
    await ghl(
      config,
      "create-note",
      `/contacts/${id}/notes`,
      { method: "POST", body: { body: noteBody(iso) } },
      fetchImpl,
    ),
    "create-note",
  );
}

async function applyUnsubscribe(config, email, iso, fetchImpl) {
  let id = await findContact(config, email, fetchImpl);
  if (!id) {
    const created = await ghl(
      config,
      "create-contact",
      "/contacts/",
      {
        method: "POST",
        body: {
          locationId: config.locationId,
          email,
          source: "promarket.fr/desinscription",
          tags: [UNSUBSCRIBE_TAG],
          dndSettings: emailDnd(),
        },
      },
      fetchImpl,
    );
    id = contactId(created.data);
    if (!created.ok || !id) {
      if (!duplicateContact(created)) {
        throw new Error(`GHL create-contact failed (${created.status})`);
      }
      id = await findContact(config, email, fetchImpl);
      if (!id) throw new Error("GHL create-contact failed (duplicate)");
    }
  }
  await markUnsubscribed(config, id, iso, fetchImpl);
}

export async function handleUnsubscribe(input, options = {}) {
  const fetchImpl = options.fetchImpl || fetch;
  const env = options.env || process.env;
  const now = options.now || (() => new Date());
  const gate = options.limiter || limiter();
  const ip = typeof input.ip === "string" && input.ip.trim() ? input.ip.trim().slice(0, 80) : "unknown";

  if (!originAllowed(input.origin, input.host)) {
    console.error("[desinscription] rejected origin");
    return { ok: false, status: 403, message: RETRY_MESSAGE };
  }

  if (!gate.allow(ip)) {
    console.error("[desinscription] rate limit");
    return { ok: false, status: 429, message: RETRY_MESSAGE };
  }

  const honeypot = String(input.pm_hp ?? "").trim();
  if (honeypot) return { ok: true, status: 200, message: SUCCESS_MESSAGE };

  const email = normalizeEmail(input.email);
  if (!isValidEmail(email)) {
    return { ok: false, status: 400, message: INVALID_EMAIL_MESSAGE };
  }
  if (!confirmed(input.confirm)) {
    return { ok: false, status: 400, message: CONFIRM_MESSAGE };
  }

  const config = readConfig(env);
  if (!config) {
    console.error("[desinscription] missing GHL_API_TOKEN or GHL_LOCATION_ID");
    return { ok: false, status: 503, message: RETRY_MESSAGE };
  }

  let iso;
  try {
    iso = now().toISOString();
  } catch {
    iso = new Date().toISOString();
  }

  try {
    await applyUnsubscribe(config, email, iso, fetchImpl);
    return { ok: true, status: 200, message: SUCCESS_MESSAGE };
  } catch (error) {
    const detail = error instanceof Error ? error.message : "request failed";
    console.error(`[desinscription] ${detail}`);
    return { ok: false, status: 502, message: RETRY_MESSAGE };
  }
}
