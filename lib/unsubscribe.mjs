/**
 * Server-only unsubscribe flow for promarket.fr/desinscription.
 *
 * Env (Vercel Production and Preview, never NEXT_PUBLIC_):
 * - GHL_API_TOKEN — sub-account Private Integration token (contacts.readonly + contacts.write)
 * - GHL_LOCATION_ID — sub-account id. Production value: HKQ1I48YBZjxm4iDyG0T
 *
 * Missing vars fail the request with a neutral message. They are read at call
 * time so `next build` does not need them. The token is never logged.
 *
 * LeadConnector API, header Version 2021-07-28 (kept: the live email flow
 * already sends it). DndSettingsSchema for that version uses PascalCase
 * channel keys Call, Email, SMS, WhatsApp — not the camelCase keys of the
 * later v3 schema. Each value is DndSettingSchema: status (required,
 * "active" | "inactive" | "permanent"), message, code.
 * Duplicate lookup: GET /contacts/search/duplicate?locationId&email, or
 * &number for the phone (the query name is `number`, URL-encoded).
 */

const GHL_BASE = "https://services.leadconnectorhq.com";
const GHL_VERSION = "2021-07-28";
const UNSUBSCRIBE_TAG = "desinscrit";
const WINDOW_MS = 10 * 60 * 1000;
const MAX_HITS = 5;
const LIMITER_KEY = "__promarketUnsubscribeLimiter";
const PARIS = "Europe/Paris";

export const CHANNELS = [
  { id: "email", dnd: "Email", tag: "desinscrit-email", label: "Email" },
  { id: "sms", dnd: "SMS", tag: "desinscrit-sms", label: "SMS" },
  { id: "whatsapp", dnd: "WhatsApp", tag: "desinscrit-whatsapp", label: "WhatsApp" },
  { id: "appels", dnd: "Call", tag: "desinscrit-appels", label: "Appels téléphoniques" },
];

const CHANNEL_IDS = CHANNELS.map((channel) => channel.id);

export const SUCCESS_MESSAGE = "C’est noté. Tu ne seras plus contacté par Promarket sur les canaux choisis.";
export const RETRY_MESSAGE = "Cette demande n’a pas abouti. Réessaie plus tard.";
export const INVALID_EMAIL_MESSAGE = "Indique une adresse email valide.";
export const INVALID_PHONE_MESSAGE = "Indique un numéro de téléphone valide.";
export const MISSING_CONTACT_MESSAGE = "Indique un email ou un numéro de téléphone.";
export const CHANNEL_MESSAGE = "Choisis au moins un canal.";

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

/**
 * E.164, France by default.
 * Accepts a leading space in place of "+" (query string), spaces, dots,
 * dashes, parentheses, 0X XX XX XX XX, +33, 0033, and a bare 33 followed by
 * the 9-digit national number. A number that already carries + or 00 keeps
 * its country code.
 */
export function normalizePhone(value) {
  if (Array.isArray(value)) value = value[0];
  if (typeof value !== "string") return "";
  let text = value.normalize("NFKC");
  if (!text.trim() || text.length > 48) return "";
  if (!text.includes("+")) {
    text = text.replace(/^\s+(?=[1-9])/, "+").replace(/\(\s+(?=[1-9])/g, "(+");
  }
  text = text.trim();

  let plus = false;
  let digits = "";
  for (const char of text) {
    if (char >= "0" && char <= "9") {
      digits += char;
      continue;
    }
    if (char === "+" && digits.length === 0 && !plus) {
      plus = true;
      continue;
    }
    if (/[\s.\-()]/.test(char)) continue;
    return "";
  }
  if (!digits) return "";

  if (digits.startsWith("00")) {
    digits = digits.slice(2);
    plus = true;
  }

  if (!plus && digits.length === 10 && digits.startsWith("0")) {
    digits = `33${digits.slice(1)}`;
    plus = true;
  }

  if (!plus && digits.startsWith("33") && digits.length === 11) plus = true;

  if (plus && digits.startsWith("330") && digits.length === 12) {
    digits = `33${digits.slice(3)}`;
  }

  if (!plus || !/^[1-9]\d{7,14}$/.test(digits)) return "";
  return `+${digits}`;
}

export function phoneFromQuery(value) {
  if (Array.isArray(value)) value = value[0];
  if (typeof value !== "string") return "";
  let text = value;
  if (!text || text.length > 80) return "";
  if (/%[0-9A-Fa-f]{2}/.test(text)) {
    try {
      const decoded = decodeURIComponent(text);
      if (decoded.length <= 80) text = decoded;
    } catch {
      // Keep the once-decoded value.
    }
  }
  return normalizePhone(text);
}

function asList(value) {
  if (Array.isArray(value)) return value.flatMap(asList);
  if (typeof value !== "string") return [];
  const text = value.trim().toLowerCase();
  return text ? [text] : [];
}

function confirmed(value) {
  if (value === true || value === 1) return true;
  if (typeof value !== "string") return false;
  return ["1", "true", "on", "oui", "yes"].includes(value.trim().toLowerCase());
}

/** Checked channels, in form order. No selection and no explicit form → every channel. */
export function selectChannels(input) {
  const known = new Set(asList(input?.canaux ?? input?.channels).filter((id) => CHANNEL_IDS.includes(id)));
  if (known.size > 0) return CHANNEL_IDS.filter((id) => known.has(id));
  const explicit = confirmed(input?.canaux_presents);
  if (confirmed(input?.tout) || !explicit) return [...CHANNEL_IDS];
  return [];
}

export function messageForState(etat) {
  if (etat === "ok") return { ok: true, message: SUCCESS_MESSAGE };
  if (etat === "invalide") return { ok: false, message: INVALID_EMAIL_MESSAGE };
  if (etat === "telephone") return { ok: false, message: INVALID_PHONE_MESSAGE };
  if (etat === "contact") return { ok: false, message: MISSING_CONTACT_MESSAGE };
  if (etat === "canal") return { ok: false, message: CHANNEL_MESSAGE };
  if (etat === "erreur") return { ok: false, message: RETRY_MESSAGE };
  return null;
}

export function stateForResult(result) {
  if (result.ok) return "ok";
  if (result.message === INVALID_EMAIL_MESSAGE) return "invalide";
  if (result.message === INVALID_PHONE_MESSAGE) return "telephone";
  if (result.message === MISSING_CONTACT_MESSAGE) return "contact";
  if (result.message === CHANNEL_MESSAGE) return "canal";
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

export function parisStamp(date) {
  const parts = new Intl.DateTimeFormat("fr-FR", {
    timeZone: PARIS,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
  }).formatToParts(date);
  const pick = (type) => parts.find((part) => part.type === type)?.value ?? "";
  return `${pick("day")}/${pick("month")}/${pick("year")} à ${pick("hour")}:${pick("minute")}`;
}

function chosen(channels) {
  return CHANNELS.filter((channel) => channels.includes(channel.id));
}

export function dndSettingsFor(channels, stamp) {
  const message = `Désinscription via promarket.fr/desinscription le ${stamp} (heure de Paris)`;
  const settings = {};
  for (const channel of chosen(channels)) {
    settings[channel.dnd] = { status: "active", message, code: "OPTED_OUT" };
  }
  return settings;
}

export function unsubscribeTags(channels) {
  return [UNSUBSCRIBE_TAG, ...chosen(channels).map((channel) => channel.tag)];
}

export function unsubscribeNote(channels, { email, phone }, stamp) {
  const labels = chosen(channels)
    .map((channel) => channel.label)
    .join(", ");
  const ids = [];
  if (email) ids.push(`email ${email}`);
  if (phone) ids.push(`téléphone ${phone}`);
  return `Désinscription via promarket.fr/desinscription le ${stamp} (heure de Paris). Canaux : ${labels}. Identifiant : ${ids.join(", ")}.`;
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

async function searchDuplicate(config, params, fetchImpl) {
  const query = new URLSearchParams({ locationId: config.locationId });
  for (const [key, value] of Object.entries(params)) query.set(key, value);
  const result = await ghl(config, "duplicate-search", `/contacts/search/duplicate?${query}`, { method: "GET" }, fetchImpl);
  if (missingContact(result)) return null;
  if (!result.ok) throw new Error(`GHL duplicate-search failed (${result.status})`);
  const id = contactId(result.data);
  if (!id) throw new Error("GHL duplicate-search failed (200)");
  return id;
}

async function findContact(config, { email, phone }, fetchImpl) {
  if (email) {
    const id = await searchDuplicate(config, { email }, fetchImpl);
    if (id) return id;
  }
  if (phone) {
    const id = await searchDuplicate(config, { number: phone }, fetchImpl);
    if (id) return id;
  }
  return null;
}

async function markUnsubscribed(config, id, request, stamp, fetchImpl) {
  ensureOk(
    await ghl(
      config,
      "update-dnd",
      `/contacts/${id}`,
      { method: "PUT", body: { dndSettings: dndSettingsFor(request.channels, stamp) } },
      fetchImpl,
    ),
    "update-dnd",
  );
  ensureOk(
    await ghl(
      config,
      "add-tag",
      `/contacts/${id}/tags`,
      { method: "POST", body: { tags: unsubscribeTags(request.channels) } },
      fetchImpl,
    ),
    "add-tag",
  );
  ensureOk(
    await ghl(
      config,
      "create-note",
      `/contacts/${id}/notes`,
      { method: "POST", body: { body: unsubscribeNote(request.channels, request, stamp) } },
      fetchImpl,
    ),
    "create-note",
  );
}

async function applyUnsubscribe(config, request, stamp, fetchImpl) {
  let id = await findContact(config, request, fetchImpl);
  if (!id) {
    const body = {
      locationId: config.locationId,
      source: "promarket.fr/desinscription",
      tags: unsubscribeTags(request.channels),
      dndSettings: dndSettingsFor(request.channels, stamp),
    };
    if (request.email) body.email = request.email;
    if (request.phone) body.phone = request.phone;
    const created = await ghl(config, "create-contact", "/contacts/", { method: "POST", body }, fetchImpl);
    id = contactId(created.data);
    if (!created.ok || !id) {
      if (!duplicateContact(created)) {
        throw new Error(`GHL create-contact failed (${created.status})`);
      }
      id = await findContact(config, request, fetchImpl);
      if (!id) throw new Error("GHL create-contact failed (duplicate)");
    }
  }
  await markUnsubscribed(config, id, request, stamp, fetchImpl);
}

function contactRequest(input) {
  const emailRaw = normalizeEmail(input.email);
  const phoneRaw = typeof input.phone === "string" || Array.isArray(input.phone) ? input.phone : "";
  const phone = normalizePhone(phoneRaw);
  if (emailRaw && !isValidEmail(emailRaw)) {
    return { error: INVALID_EMAIL_MESSAGE };
  }
  const phoneText = Array.isArray(phoneRaw) ? String(phoneRaw[0] ?? "") : String(phoneRaw ?? "");
  if (!emailRaw && phoneText.trim() && !phone) {
    return { error: INVALID_PHONE_MESSAGE };
  }
  const email = isValidEmail(emailRaw) ? emailRaw : "";
  if (!email && !phone) return { error: MISSING_CONTACT_MESSAGE };
  const channels = selectChannels(input);
  if (channels.length === 0) return { error: CHANNEL_MESSAGE };
  return { email, phone, channels };
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

  const request = contactRequest(input);
  if (request.error) return { ok: false, status: 400, message: request.error };

  const config = readConfig(env);
  if (!config) {
    console.error("[desinscription] missing GHL_API_TOKEN or GHL_LOCATION_ID");
    return { ok: false, status: 503, message: RETRY_MESSAGE };
  }

  let stamp;
  try {
    stamp = parisStamp(now());
  } catch {
    stamp = parisStamp(new Date());
  }

  try {
    await applyUnsubscribe(config, request, stamp, fetchImpl);
    return { ok: true, status: 200, message: SUCCESS_MESSAGE };
  } catch (error) {
    const detail = error instanceof Error ? error.message : "request failed";
    console.error(`[desinscription] ${detail}`);
    return { ok: false, status: 502, message: RETRY_MESSAGE };
  }
}
