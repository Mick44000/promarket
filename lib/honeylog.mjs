/**
 * Server-only Honeylog Custom HTTP pageview sender.
 *
 * Events stay in a private in-memory buffer and leave in batches. The JSON
 * string is signed and posted unchanged. Callers must pass a defer function
 * (Vercel/Next middleware `waitUntil`) so the flush can finish after the
 * response without holding it.
 */

const FLUSH_INTERVAL_MS = 5000;
const MAX_BATCH_SIZE = 25;
const MAX_BUFFER_SIZE = 500;
const MAX_ATTEMPTS = 3;
const REQUEST_TIMEOUT_MS = 8000;

const HEADER_NAMES = [
  "accept-language",
  "accept",
  "sec-fetch-dest",
  "sec-fetch-mode",
  "sec-fetch-site",
  "sec-fetch-user",
];

const SKIP_PATHS = new Set(["/robots.txt", "/sitemap.xml", "/favicon.ico", "/manifest.webmanifest"]);

const defaultScheduler = {
  schedule(fn, ms) {
    return setTimeout(() => {
      void Promise.resolve()
        .then(fn)
        .catch((error) => {
          console.error(`[honeylog] flush failed: ${errorText(error)}`);
        });
    }, ms);
  },
  cancel(handle) {
    clearTimeout(handle);
  },
};

function errorText(error) {
  if (typeof error === "string") return error;
  if (error instanceof Error && error.message) return error.message;
  return "unexpected error";
}

function redact(text, secret) {
  const flat = String(text ?? "").replace(/\s+/g, " ").trim();
  const clipped = flat.length > 400 ? `${flat.slice(0, 400)}…` : flat;
  if (!secret || !clipped.includes(secret)) return clipped;
  return clipped.split(secret).join("[redacted]");
}

function logFailure(context, error, secret) {
  console.error(`[honeylog] ${context} failed: ${redact(errorText(error), secret)}`);
}

function stringEnv(env, name) {
  const value = env?.[name];
  return typeof value === "string" ? value : "";
}

export function readHoneylogConfig(env = process.env) {
  const apiUrl = stringEnv(env, "HONEYLOG_API_URL").trim();
  const site = stringEnv(env, "HONEYLOG_SITE_DOMAIN").trim().toLowerCase().replace(/\.$/, "");
  const secret = stringEnv(env, "HONEYLOG_INGESTION_SECRET");
  if (!apiUrl || !site || !secret) return null;
  return { apiUrl, site, secret };
}

function isHttpsUrl(value) {
  try {
    return new URL(value).protocol === "https:";
  } catch {
    return false;
  }
}

function header(request, name) {
  const value = request.headers?.get?.(name);
  return typeof value === "string" ? value.trim() : "";
}

function pathnameOf(request) {
  if (typeof request.nextUrl?.pathname === "string") return request.nextUrl.pathname;
  try {
    return new URL(request.url).pathname;
  } catch {
    return "";
  }
}

export function requestHost(request) {
  return header(request, "host").split(",")[0].replace(/:\d+$/, "").toLowerCase();
}

function isPrefetch(request) {
  if (header(request, "next-router-prefetch")) return true;
  if (header(request, "next-router-segment-prefetch")) return true;
  if (header(request, "x-middleware-prefetch")) return true;
  const purpose = `${header(request, "purpose")} ${header(request, "sec-purpose")}`.toLowerCase();
  return purpose.includes("prefetch");
}

function isDocumentRequest(request) {
  const dest = header(request, "sec-fetch-dest").toLowerCase();
  if (dest) return dest === "document";
  const accept = header(request, "accept").toLowerCase();
  if (!accept || accept.includes("text/html") || accept.includes("*/*")) return true;
  return false;
}

/** True for real document loads. Prefetches, RSC flights, and assets are not pageviews. */
export function shouldTrackPageview(request) {
  if (!request || typeof request.headers?.get !== "function") return false;
  if ((request.method || "GET").toUpperCase() !== "GET") return false;

  const pathname = pathnameOf(request);
  if (!pathname.startsWith("/")) return false;
  if (pathname.startsWith("/_next") || pathname.startsWith("/api")) return false;
  if (SKIP_PATHS.has(pathname)) return false;
  if (/\.(?:xml|txt|json|map|webmanifest|ico|png|jpe?g|gif|webp|avif|svg|css|js|mjs|woff2?|ttf|eot|mp4|pdf)$/i.test(pathname)) {
    return false;
  }

  if (isPrefetch(request)) return false;
  if (header(request, "next-action")) return false;
  if (header(request, "rsc") === "1") return false;
  if (header(request, "accept").toLowerCase().includes("text/x-component")) return false;
  return isDocumentRequest(request);
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

function clientIp(request) {
  const forwarded = header(request, "x-vercel-forwarded-for").split(",")[0].trim();
  const candidates = [request.ip, header(request, "x-real-ip"), forwarded];
  for (const candidate of candidates) {
    if (isIp(candidate)) return candidate;
  }
  return "";
}

function pageUrl(request, host) {
  const pathname = pathnameOf(request);
  const search = typeof request.nextUrl?.search === "string" ? request.nextUrl.search : "";
  if (!pathname.startsWith("/") || !host) return "";
  const proto = header(request, "x-forwarded-proto").split(",")[0].toLowerCase();
  const scheme = proto === "http" ? "http" : "https";
  return `${scheme}://${host}${pathname}${search}`;
}

function referrerOf(request) {
  const value = header(request, "referer");
  if (!value || value.length > 2048 || !/^https?:\/\//i.test(value)) return "";
  return value;
}

function collectHeaders(request) {
  const headers = {};
  for (const name of HEADER_NAMES) {
    const value = header(request, name);
    if (!value) continue;
    headers[name] = value.slice(0, 512);
  }
  return Object.keys(headers).length ? headers : null;
}

export function buildPageview(request, site, nowMs) {
  const host = requestHost(request);
  const url = pageUrl(request, host);
  if (!url || url.length > 4096) return null;

  const event = {
    n: "pageview",
    d: site,
    u: url,
    timestamp: new Date(nowMs).toISOString(),
    method: "GET",
  };
  const referrer = referrerOf(request);
  if (referrer) event.r = referrer;
  const ua = header(request, "user-agent");
  if (ua) event.ua = ua.slice(0, 1024);
  const ip = clientIp(request);
  if (ip) event.ip = ip;
  const headers = collectHeaders(request);
  if (headers) event.headers = headers;
  event.p = { collector: "custom-http", via: "next-middleware" };
  return event;
}

function bytesToHex(bytes) {
  let hex = "";
  for (const byte of bytes) hex += byte.toString(16).padStart(2, "0");
  return hex;
}

export async function signHoneylogBody(secret, body, timestamp) {
  const key = await crypto.subtle.importKey(
    "raw",
    new TextEncoder().encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"],
  );
  const mac = await crypto.subtle.sign("HMAC", key, new TextEncoder().encode(`${timestamp}.${body}`));
  return bytesToHex(new Uint8Array(mac));
}

function abortAfter(ms) {
  if (typeof AbortSignal !== "undefined" && typeof AbortSignal.timeout === "function") {
    try {
      return AbortSignal.timeout(ms);
    } catch {
      // Older runtimes can throw on AbortSignal.timeout.
    }
  }
  const controller = new AbortController();
  setTimeout(() => controller.abort(), ms);
  return controller.signal;
}

function backoffMs(attempt) {
  return attempt <= 1 ? 250 : 1000;
}

function retryAfterMs(response, nowMs) {
  const raw = response.headers?.get?.("retry-after");
  if (!raw) return null;
  const seconds = Number(raw);
  if (Number.isFinite(seconds) && seconds >= 0) return Math.min(seconds * 1000, 5000);
  const when = Date.parse(raw);
  if (Number.isFinite(when)) return Math.min(Math.max(0, when - nowMs), 5000);
  return null;
}

async function responseDetail(response, secret) {
  try {
    const text = await response.text();
    const clean = redact(text, secret);
    return clean ? `HTTP ${response.status} ${clean}` : `HTTP ${response.status}`;
  } catch {
    return `HTTP ${response.status}`;
  }
}

async function drain(response) {
  try {
    await response.arrayBuffer();
  } catch {
    // Ignore a body that cannot be read after a 202.
  }
}

export function createHoneylog(options = {}) {
  const env = options.env || process.env;
  const fetchImpl = options.fetchImpl || globalThis.fetch;
  const scheduler = options.scheduler || defaultScheduler;
  const sleep = options.sleep || ((ms) => new Promise((resolve) => setTimeout(resolve, ms)));
  const now = options.now || Date.now;
  const flushIntervalMs = options.flushIntervalMs ?? FLUSH_INTERVAL_MS;
  const maxBatchSize = options.maxBatchSize ?? MAX_BATCH_SIZE;
  const maxBufferSize = options.maxBufferSize ?? MAX_BUFFER_SIZE;
  const maxAttempts = options.maxAttempts ?? MAX_ATTEMPTS;

  const buffer = [];
  let timer = null;
  let flushing = false;
  let waiters = [];
  let lastTimestamp = 0;
  let warnedInsecureUrl = false;

  function nextTimestamp() {
    let timestamp = Math.floor(now() / 1000);
    if (!Number.isFinite(timestamp) || timestamp < 0) timestamp = Math.floor(Date.now() / 1000);
    if (timestamp <= lastTimestamp) timestamp = lastTimestamp + 1;
    lastTimestamp = timestamp;
    return String(timestamp);
  }

  function armTimer() {
    if (timer || flushing || buffer.length === 0) return;
    timer = scheduler.schedule(() => {
      timer = null;
      return pump();
    }, flushIntervalMs);
  }

  function cancelTimer() {
    if (!timer) return;
    scheduler.cancel(timer);
    timer = null;
  }

  async function deliver(config, events) {
    const body = JSON.stringify({ events });
    let lastDetail = "unknown error";
    let used = 0;

    for (let attempt = 1; attempt <= maxAttempts; attempt += 1) {
      used = attempt;
      const timestamp = nextTimestamp();
      const signature = await signHoneylogBody(config.secret, body, timestamp);
      let response;
      try {
        response = await fetchImpl(config.apiUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "X-Honeylog-Site": config.site,
            "X-Honeylog-Timestamp": timestamp,
            "X-Honeylog-Signature": signature,
          },
          body,
          cache: "no-store",
          signal: abortAfter(REQUEST_TIMEOUT_MS),
        });
      } catch (error) {
        lastDetail = errorText(error);
        if (attempt === maxAttempts) break;
        await sleep(backoffMs(attempt));
        continue;
      }

      if (response.status === 202) {
        await drain(response);
        return;
      }

      lastDetail = await responseDetail(response, config.secret);
      const retryable = response.status === 401 || response.status === 429 || response.status >= 500;
      if (!retryable || attempt === maxAttempts) break;
      const delay = response.status === 429 ? retryAfterMs(response, now()) ?? backoffMs(attempt) : backoffMs(attempt);
      await sleep(delay);
    }

    logFailure("ingestion", `${lastDetail} (attempt ${used} of ${maxAttempts})`, config.secret);
  }

  async function pump() {
    if (flushing) return;
    flushing = true;
    const cycleWaiters = waiters;
    waiters = [];
    try {
      const config = readHoneylogConfig(env);
      const batch = buffer.splice(0, maxBatchSize);
      if (config && batch.length) await deliver(config, batch);
    } catch (error) {
      logFailure("flush", error, readHoneylogConfig(env)?.secret);
    } finally {
      flushing = false;
      for (const resolve of cycleWaiters) resolve();
      if (buffer.length >= maxBatchSize) startFlush();
      else armTimer();
    }
  }

  function startFlush() {
    void pump().catch((error) => {
      logFailure("flush", error, readHoneylogConfig(env)?.secret);
    });
  }

  function enqueue(event, defer) {
    if (buffer.length >= maxBufferSize) {
      buffer.shift();
      console.error("[honeylog] buffer full; dropped the oldest pageview");
    }
    buffer.push(event);
    const pending = new Promise((resolve) => {
      waiters.push(resolve);
    });
    if (typeof defer === "function") {
      try {
        defer(pending);
      } catch (error) {
        logFailure("defer", error, readHoneylogConfig(env)?.secret);
      }
    }
    if (buffer.length >= maxBatchSize) {
      cancelTimer();
      startFlush();
      return;
    }
    armTimer();
  }

  function record(request, defer) {
    try {
      const config = readHoneylogConfig(env);
      if (!config) return;
      if (!isHttpsUrl(config.apiUrl)) {
        if (!warnedInsecureUrl) {
          warnedInsecureUrl = true;
          console.error("[honeylog] ingestion URL must be https; pageviews were not sent");
        }
        return;
      }
      if (!shouldTrackPageview(request)) return;
      if (requestHost(request) !== config.site) return;
      const event = buildPageview(request, config.site, now());
      if (!event) return;
      enqueue(event, defer);
    } catch (error) {
      logFailure("enqueue", error, readHoneylogConfig(env)?.secret);
    }
  }

  return { record };
}

const shared = createHoneylog();

export function recordPageview(request, defer) {
  shared.record(request, defer);
}
