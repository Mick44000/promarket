import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

import {
  CHANNEL_MESSAGE,
  INVALID_EMAIL_MESSAGE,
  INVALID_PHONE_MESSAGE,
  MISSING_CONTACT_MESSAGE,
  RETRY_MESSAGE,
  SUCCESS_MESSAGE,
  clientKey,
  createRateLimiter,
  dndSettingsFor,
  emailFromQuery,
  handleUnsubscribe,
  isValidEmail,
  messageForState,
  normalizePhone,
  originAllowed,
  parisStamp,
  phoneFromQuery,
  selectChannels,
  stateForResult,
  unsubscribeNote,
  unsubscribeTags,
} from "./unsubscribe.mjs";

const TOKEN = "pit-test-token";
const LOCATION = "loc_test";
const ENV = { GHL_API_TOKEN: TOKEN, GHL_LOCATION_ID: LOCATION };
const WHEN = new Date("2026-11-17T08:22:00.000Z");
const STAMP = "17/11/2026 à 09:22";
const EMAIL = "ada+tag@example.com";
const PHONE = "+33612345678";
const ALL_TAGS = ["desinscrit", "desinscrit-email", "desinscrit-sms", "desinscrit-whatsapp", "desinscrit-appels"];

function captureConsole() {
  const lines = [];
  const original = console.error;
  console.error = (...args) => lines.push(args.map(String).join(" "));
  return {
    lines,
    restore() {
      console.error = original;
    },
  };
}

function limiter() {
  return createRateLimiter({ max: 5, windowMs: 60_000, now: () => WHEN.getTime() });
}

function callsOf(impl) {
  return impl.calls;
}

function mockFetch(handler) {
  const calls = [];
  const fetchImpl = async (url, init = {}) => {
    const parsed = new URL(url);
    const call = {
      href: url,
      method: init.method || "GET",
      headers: init.headers,
      body: init.body ? JSON.parse(init.body) : null,
      pathname: parsed.pathname,
      search: parsed.searchParams,
    };
    calls.push(call);
    const result = await handler(call, calls);
    return new Response(JSON.stringify(result.body ?? {}), { status: result.status ?? 200 });
  };
  fetchImpl.calls = calls;
  return fetchImpl;
}

function baseInput(overrides = {}) {
  return {
    email: EMAIL,
    phone: "",
    pm_hp: "",
    ip: "203.0.113.10",
    origin: "https://promarket.fr",
    host: "promarket.fr",
    ...overrides,
  };
}

function run(fetchImpl, overrides, options = {}) {
  return handleUnsubscribe(baseInput(overrides), {
    fetchImpl,
    env: ENV,
    now: () => WHEN,
    limiter: limiter(),
    ...options,
  });
}

function foundHandler() {
  return () => ({ status: 200, body: { contact: { id: "contactFound1" }, succeeded: true } });
}

test("query email is decoded and a space from '+' is restored", () => {
  assert.equal(emailFromQuery("Ada+Tag@Example.com"), "ada+tag@example.com");
  assert.equal(emailFromQuery("Ada Tag@Example.com"), "ada+tag@example.com");
  assert.equal(emailFromQuery("ada%2Btag%40example.com"), "ada+tag@example.com");
  assert.equal(emailFromQuery(["Ada Tag@Example.com", "other@example.com"]), "ada+tag@example.com");
  assert.equal(emailFromQuery(""), "");
  assert.equal(emailFromQuery(undefined), "");
  assert.equal(isValidEmail(emailFromQuery("Ada Tag@Example.com")), true);
  assert.equal(isValidEmail("not-an-email"), false);
  assert.equal(isValidEmail("a@b"), false);
  assert.equal(isValidEmail(`${"a".repeat(65)}@example.com`), false);
});

test("phone numbers normalize to E.164 with France as the default", () => {
  const expected = "+33612345678";
  const samples = [
    "06 12 34 56 78",
    "06.12.34.56.78",
    "06-12-34-56-78",
    "(06) 12 34 56 78",
    "+33 6 12 34 56 78",
    "+33612345678",
    "0033 6 12 34 56 78",
    "0033612345678",
    "33612345678",
    " 33612345678",
    " 33 6.12-34 (56) 78",
    "( 33) 6 12 34 56 78",
    "+33 (0)6 12 34 56 78",
    "\u00a033612345678",
  ];
  for (const sample of samples) {
    assert.equal(normalizePhone(sample), expected, sample);
  }
  assert.equal(normalizePhone("01 23 45 67 89"), "+33123456789");
  assert.equal(normalizePhone("+1 202 555 0123"), "+12025550123");
  assert.equal(normalizePhone("0012025550123"), "+12025550123");
  assert.equal(phoneFromQuery(" 33612345678"), expected);
  assert.equal(phoneFromQuery("%2B33612345678"), expected);
  assert.equal(phoneFromQuery(["06 12 34 56 78"]), expected);
  assert.equal(phoneFromQuery("+33 6 12 34 56 78"), expected);
  assert.equal(normalizePhone("0612"), "");
  assert.equal(normalizePhone("abc"), "");
  assert.equal(normalizePhone(""), "");
  assert.equal(normalizePhone("2025550123"), "");
  assert.equal(phoneFromQuery(""), "");
  assert.equal(phoneFromQuery(undefined), "");
  assert.equal(parisStamp(WHEN), STAMP);
});

test("channel selection defaults to every channel and keeps only the checked ones", () => {
  assert.deepEqual(selectChannels({}), ["email", "sms", "whatsapp", "appels"]);
  assert.deepEqual(selectChannels({ canaux_presents: "1", tout: "oui" }), ["email", "sms", "whatsapp", "appels"]);
  assert.deepEqual(selectChannels({ canaux_presents: "1", canaux: [] }), []);
  assert.deepEqual(selectChannels({ canaux_presents: "1", tout: "oui", canaux: ["sms"] }), ["sms"]);
  assert.deepEqual(selectChannels({ canaux: ["appels", "email", "nope", "email"] }), ["email", "appels"]);
  assert.deepEqual(selectChannels({ canaux: "whatsapp" }), ["whatsapp"]);
  assert.deepEqual(Object.keys(dndSettingsFor(["sms", "appels"], STAMP)), ["SMS", "Call"]);
  assert.equal(dndSettingsFor(["email"], STAMP).WhatsApp, undefined);
  assert.deepEqual(unsubscribeTags(["sms"]), ["desinscrit", "desinscrit-sms"]);
  assert.equal(
    unsubscribeNote(["sms", "whatsapp"], { email: "", phone: PHONE }, STAMP),
    `Désinscription via promarket.fr/desinscription le ${STAMP} (heure de Paris). Canaux : SMS, WhatsApp. Identifiant : téléphone ${PHONE}.`,
  );
});

test("known and unknown addresses return the same confirmation", async () => {
  const found = mockFetch((call) => {
    if (call.pathname === "/contacts/search/duplicate") return { status: 200, body: { contact: { id: "contactFound1" } } };
    return { status: 200, body: { succeeded: true, tags: ["desinscrit"], note: { id: "n1" } } };
  });
  const missing = mockFetch((call) => {
    if (call.pathname === "/contacts/search/duplicate") return { status: 200, body: { contact: null } };
    if (call.method === "POST" && call.pathname === "/contacts/") {
      return { status: 201, body: { contact: { id: "contactNew1" } } };
    }
    return { status: 201, body: { succeeded: true } };
  });

  const known = await run(found);
  const unknown = await run(missing);
  assert.deepEqual(known, { ok: true, status: 200, message: SUCCESS_MESSAGE });
  assert.deepEqual(unknown, known);
});

test("an existing contact gets DND, tags, and a Paris note for every default channel", async () => {
  const fetchImpl = mockFetch(foundHandler());
  const logs = captureConsole();
  try {
    const result = await run(fetchImpl);
    assert.equal(result.ok, true);
    assert.equal(logs.lines.length, 0);
  } finally {
    logs.restore();
  }

  const calls = callsOf(fetchImpl);
  assert.equal(calls.length, 4);
  assert.equal(calls[0].method, "GET");
  assert.equal(calls[0].pathname, "/contacts/search/duplicate");
  assert.equal(calls[0].search.get("locationId"), LOCATION);
  assert.equal(calls[0].search.get("email"), EMAIL);
  assert.equal(calls[0].search.get("number"), null);
  assert.equal(calls[0].headers.Authorization, `Bearer ${TOKEN}`);
  assert.equal(calls[0].headers.Version, "2021-07-28");

  assert.equal(calls[1].method, "PUT");
  assert.equal(calls[1].pathname, "/contacts/contactFound1");
  assert.deepEqual(Object.keys(calls[1].body), ["dndSettings"]);
  assert.deepEqual(Object.keys(calls[1].body.dndSettings), ["Email", "SMS", "WhatsApp", "Call"]);
  assert.deepEqual(calls[1].body.dndSettings.Email, {
    status: "active",
    message: `Désinscription via promarket.fr/desinscription le ${STAMP} (heure de Paris)`,
    code: "OPTED_OUT",
  });
  assert.equal(calls[1].body.dnd, undefined);

  assert.equal(calls[2].method, "POST");
  assert.equal(calls[2].pathname, "/contacts/contactFound1/tags");
  assert.deepEqual(calls[2].body, { tags: ALL_TAGS });

  assert.equal(calls[3].method, "POST");
  assert.equal(calls[3].pathname, "/contacts/contactFound1/notes");
  assert.deepEqual(calls[3].body, {
    body: `Désinscription via promarket.fr/desinscription le ${STAMP} (heure de Paris). Canaux : Email, SMS, WhatsApp, Appels téléphoniques. Identifiant : email ${EMAIL}.`,
  });
  assert.equal(calls.some((call) => JSON.stringify(call.body || {}).includes(TOKEN)), false);
});

test("DND and tags include only the checked channels", async () => {
  const fetchImpl = mockFetch(foundHandler());
  const result = await run(fetchImpl, {
    phone: "06 12 34 56 78",
    canaux: ["whatsapp", "sms"],
    canaux_presents: "1",
    tout: false,
  });
  assert.equal(result.ok, true);

  const calls = callsOf(fetchImpl);
  assert.equal(calls[0].search.get("email"), EMAIL);
  assert.equal(calls[0].search.get("number"), null);
  assert.deepEqual(Object.keys(calls[1].body.dndSettings), ["SMS", "WhatsApp"]);
  assert.equal(calls[1].body.dndSettings.Email, undefined);
  assert.equal(calls[1].body.dndSettings.Call, undefined);
  assert.deepEqual(calls[1].body.dndSettings.SMS.status, "active");
  assert.deepEqual(calls[2].body.tags, ["desinscrit", "desinscrit-sms", "desinscrit-whatsapp"]);
  assert.match(calls[3].body.body, /Canaux : SMS, WhatsApp\./);
  assert.match(calls[3].body.body, new RegExp(`Identifiant : email ${EMAIL.replace("+", "\\+")}, téléphone \\${PHONE}\\.`));
  assert.equal(calls[1].body.phone, undefined);
  assert.equal(calls[1].body.email, undefined);
});

test("an unknown contact is created with DND and the tags, then noted", async () => {
  const fetchImpl = mockFetch((call) => {
    if (call.pathname === "/contacts/search/duplicate") return { status: 200, body: { contact: null } };
    if (call.pathname === "/contacts/") return { status: 201, body: { contact: { id: "contactNew1" } } };
    return { status: 201, body: {} };
  });
  const result = await run(fetchImpl, { canaux: ["email"], canaux_presents: "1" });
  assert.equal(result.message, SUCCESS_MESSAGE);

  const create = callsOf(fetchImpl).find((call) => call.pathname === "/contacts/");
  assert.equal(create.method, "POST");
  assert.deepEqual(create.body, {
    locationId: LOCATION,
    email: EMAIL,
    source: "promarket.fr/desinscription",
    tags: ["desinscrit", "desinscrit-email"],
    dndSettings: dndSettingsFor(["email"], STAMP),
  });
  assert.equal(create.body.phone, undefined);
  assert.equal(callsOf(fetchImpl).some((call) => call.pathname === "/contacts/contactNew1/notes"), true);
  assert.equal(callsOf(fetchImpl).some((call) => call.method === "PUT" && call.pathname === "/contacts/contactNew1"), true);
});

test("a phone without an email is looked up on number and created without an email", async () => {
  const fetchImpl = mockFetch((call) => {
    if (call.pathname === "/contacts/search/duplicate") return { status: 200, body: { contact: null } };
    if (call.pathname === "/contacts/") return { status: 201, body: { contact: { id: "contactPhone1" } } };
    return { status: 201, body: {} };
  });
  const logs = captureConsole();
  let result;
  try {
    result = await run(fetchImpl, { email: "", phone: "06.12.34.56.78", canaux: ["sms", "appels"], canaux_presents: "1" });
  } finally {
    logs.restore();
  }
  assert.equal(result.ok, true);
  assert.equal(logs.lines.join("\n").includes(PHONE), false);
  assert.equal(logs.lines.join("\n").includes(TOKEN), false);

  const calls = callsOf(fetchImpl);
  assert.equal(calls[0].pathname, "/contacts/search/duplicate");
  assert.equal(calls[0].search.get("email"), null);
  assert.equal(calls[0].search.get("number"), PHONE);
  assert.match(calls[0].href, /number=%2B33612345678/);
  assert.equal(calls[0].search.get("locationId"), LOCATION);
  const create = calls.find((call) => call.pathname === "/contacts/");
  assert.equal(create.body.email, undefined);
  assert.equal(create.body.phone, PHONE);
  assert.deepEqual(Object.keys(create.body.dndSettings), ["SMS", "Call"]);
  assert.deepEqual(create.body.tags, ["desinscrit", "desinscrit-sms", "desinscrit-appels"]);
  const note = calls.find((call) => call.pathname === "/contacts/contactPhone1/notes");
  assert.match(note.body.body, /Identifiant : téléphone \+33612345678\./);
  assert.equal(note.body.body.includes("email"), false);
});

test("email is searched first and the phone is the fallback", async () => {
  let searches = 0;
  const fetchImpl = mockFetch((call) => {
    if (call.pathname === "/contacts/search/duplicate") {
      searches += 1;
      if (searches === 1) return { status: 200, body: { contact: null } };
      return { status: 200, body: { contact: { id: "contactByPhone" } } };
    }
    return { status: 200, body: { succeeded: true } };
  });
  const result = await run(fetchImpl, { phone: "+33 6 12 34 56 78", canaux: ["appels"], canaux_presents: "1" });
  assert.equal(result.ok, true);
  const calls = callsOf(fetchImpl);
  assert.equal(calls[0].search.get("email"), EMAIL);
  assert.equal(calls[0].search.has("number"), false);
  assert.equal(calls[1].search.get("number"), PHONE);
  assert.equal(calls[1].search.has("email"), false);
  assert.equal(calls.some((call) => call.pathname === "/contacts/"), false);
  assert.equal(calls.some((call) => call.pathname === "/contacts/contactByPhone"), true);
  assert.deepEqual(Object.keys(calls.find((call) => call.method === "PUT").body.dndSettings), ["Call"]);
});

test("a not-found duplicate search still creates the contact", async () => {
  const fetchImpl = mockFetch((call) => {
    if (call.pathname === "/contacts/search/duplicate") {
      return { status: 400, body: { message: "No contact found with the given email" } };
    }
    if (call.pathname === "/contacts/") return { status: 201, body: { contact: { id: "contactNew2" } } };
    return { status: 200, body: { succeeded: true } };
  });
  const result = await run(fetchImpl);
  assert.equal(result.ok, true);
  assert.equal(callsOf(fetchImpl).some((call) => call.pathname === "/contacts/"), true);
});

test("a duplicate create updates the existing contact instead", async () => {
  let searches = 0;
  const fetchImpl = mockFetch((call) => {
    if (call.pathname === "/contacts/search/duplicate") {
      searches += 1;
      if (searches === 1) return { status: 200, body: { contact: null } };
      return { status: 200, body: { contact: { id: "contactRace1" } } };
    }
    if (call.pathname === "/contacts/") return { status: 400, body: { message: "This is a duplicate contact" } };
    return { status: 200, body: { succeeded: true } };
  });
  const result = await run(fetchImpl);
  assert.equal(result.ok, true);
  assert.equal(callsOf(fetchImpl).some((call) => call.pathname === "/contacts/contactRace1"), true);
});

test("lookup and write failures stay neutral and do not reveal the address or phone", async () => {
  const cases = [
    mockFetch(() => ({ status: 500, body: { message: "upstream" } })),
    mockFetch(() => ({ status: 401, body: { message: "Unauthorized" } })),
    mockFetch(() => {
      throw new Error(`network down for ${EMAIL} ${PHONE}`);
    }),
  ];
  for (const fetchImpl of cases) {
    const logs = captureConsole();
    try {
      const result = await run(fetchImpl, { phone: PHONE });
      assert.deepEqual(result, { ok: false, status: 502, message: RETRY_MESSAGE });
      assert.equal(result.message.includes(EMAIL), false);
      assert.equal(result.message.includes(PHONE), false);
      assert.equal(logs.lines.join("\n").includes(EMAIL), false);
      assert.equal(logs.lines.join("\n").includes(PHONE), false);
      assert.equal(logs.lines.join("\n").includes(TOKEN), false);
      assert.equal(callsOf(fetchImpl).some((call) => call.pathname === "/contacts/"), false);
    } finally {
      logs.restore();
    }
  }
});

test("a failed tag write is not reported as success", async () => {
  const fetchImpl = mockFetch((call) => {
    if (call.pathname.endsWith("/tags")) return { status: 500, body: { message: "nope" } };
    return { status: 200, body: { contact: { id: "contactFound1" }, succeeded: true } };
  });
  const result = await run(fetchImpl);
  assert.equal(result.ok, false);
  assert.equal(result.message, RETRY_MESSAGE);
});

test("invalid input never calls GoHighLevel", async () => {
  const fetchImpl = mockFetch(() => ({ status: 200, body: {} }));
  const invalid = await run(fetchImpl, { email: "ada" });
  const badPhone = await run(fetchImpl, { email: "", phone: "12 34" });
  const missing = await run(fetchImpl, { email: "", phone: "" });
  const unchecked = await run(fetchImpl, { canaux: [], canaux_presents: "1", tout: false });
  const honeypot = await run(fetchImpl, { pm_hp: "filled by a bot", email: "" });
  assert.equal(invalid.message, INVALID_EMAIL_MESSAGE);
  assert.equal(badPhone.message, INVALID_PHONE_MESSAGE);
  assert.equal(missing.message, MISSING_CONTACT_MESSAGE);
  assert.equal(unchecked.message, CHANNEL_MESSAGE);
  assert.equal(honeypot.message, SUCCESS_MESSAGE);
  assert.equal(callsOf(fetchImpl).length, 0);
  assert.equal(stateForResult(invalid), "invalide");
  assert.equal(stateForResult(badPhone), "telephone");
  assert.equal(stateForResult(missing), "contact");
  assert.equal(stateForResult(unchecked), "canal");
  assert.equal(stateForResult(honeypot), "ok");
  assert.equal(messageForState("erreur").message, RETRY_MESSAGE);
  assert.equal(messageForState("canal").message, CHANNEL_MESSAGE);
});

test("a typed email that is invalid is not dropped in favour of the phone", async () => {
  const fetchImpl = mockFetch(foundHandler());
  const result = await run(fetchImpl, { email: "ada@", phone: "0612345678" });
  assert.equal(result.message, INVALID_EMAIL_MESSAGE);
  assert.equal(callsOf(fetchImpl).length, 0);
});

test("missing env fails closed without calling GoHighLevel", async () => {
  const fetchImpl = mockFetch(() => ({ status: 200, body: {} }));
  const logs = captureConsole();
  try {
    const result = await run(fetchImpl, {}, { env: {} });
    assert.deepEqual(result, { ok: false, status: 503, message: RETRY_MESSAGE });
    assert.match(logs.lines.join("\n"), /GHL_API_TOKEN or GHL_LOCATION_ID/);
    assert.equal(callsOf(fetchImpl).length, 0);
  } finally {
    logs.restore();
  }
});

test("rate limit and foreign origins stop before GoHighLevel", async () => {
  const fetchImpl = mockFetch(foundHandler());
  const gate = createRateLimiter({ max: 1, windowMs: 60_000, now: () => WHEN.getTime() });
  const first = await run(fetchImpl, {}, { limiter: gate });
  const second = await run(fetchImpl, {}, { limiter: gate });
  assert.equal(first.ok, true);
  assert.equal(second.status, 429);
  assert.equal(second.message, RETRY_MESSAGE);

  const blocked = await run(fetchImpl, { origin: "https://evil.example", host: "promarket.fr" });
  assert.equal(blocked.status, 403);
  assert.equal(blocked.message, RETRY_MESSAGE);
  assert.equal(originAllowed(null, "promarket.fr"), true);
  assert.equal(originAllowed("https://promarket.fr", "promarket.fr"), true);
  assert.equal(originAllowed("not a url", "promarket.fr"), false);
});

test("client ip ignores a caller-supplied x-forwarded-for", () => {
  const headers = new Headers({
    "x-forwarded-for": "198.51.100.20",
    "x-real-ip": "203.0.113.8",
  });
  assert.equal(clientKey(headers, undefined), "203.0.113.8");
  assert.equal(clientKey(new Headers({ "x-vercel-forwarded-for": "2001:db8::1" }), undefined), "2001:db8::1");
  assert.equal(clientKey(new Headers({ "x-forwarded-for": "198.51.100.20" }), undefined), "unknown");
});

test("the unsubscribe route stays out of nav, footer, and the sitemap source", () => {
  const site = readFileSync(new URL("./site.js", import.meta.url), "utf8");
  const navBlock = site.slice(site.indexOf("export const nav"), site.indexOf("export const indexableRoutes"));
  const routesBlock = site.slice(site.indexOf("export const indexableRoutes"));
  const footer = readFileSync(new URL("../components/Footer.jsx", import.meta.url), "utf8");
  const sitemap = readFileSync(new URL("../app/sitemap.js", import.meta.url), "utf8");
  const page = readFileSync(new URL("../app/desinscription/page.js", import.meta.url), "utf8");
  const form = readFileSync(new URL("../components/UnsubscribeForm.jsx", import.meta.url), "utf8");
  assert.equal(navBlock.includes("/desinscription"), false);
  assert.equal(routesBlock.includes("/desinscription"), false);
  assert.equal(footer.includes("/desinscription"), false);
  assert.equal(sitemap.includes("desinscription"), false);
  assert.match(page, /index:\s*false/);
  assert.match(page, /follow:\s*false/);
  assert.match(page, /phoneFromQuery/);
  assert.equal(page.includes("GHL_API_TOKEN"), false);
  assert.equal(form.includes("GHL_"), false);
  assert.match(form, /name="phone"/);
  assert.match(form, /name="canaux"/);
  assert.match(form, /value=\{option\.id\}/);
  assert.match(form, /useState\(ALL\)/);
  assert.match(form, /useState\(true\)/);
  for (const id of ["email", "sms", "whatsapp", "appels"]) {
    assert.match(form, new RegExp(`id: "${id}"`));
  }
  assert.match(form, /name="tout"/);
  assert.match(form, /name="canaux_presents"/);
  assert.equal(form.includes("required"), false);
});
