import crypto from "node:crypto";
import assert from "node:assert/strict";
import test from "node:test";

import { createHoneylog, shouldTrackPageview, signHoneylogBody } from "./honeylog.mjs";

const SECRET = "super-secret-value";
const ENV = {
  HONEYLOG_API_URL: "https://api.honeylog.io/api/events",
  HONEYLOG_SITE_DOMAIN: "promarket.fr",
  HONEYLOG_INGESTION_SECRET: SECRET,
};

function scheduler() {
  const queue = [];
  return {
    schedule(fn) {
      const item = { fn, cancelled: false };
      queue.push(item);
      return item;
    },
    cancel(item) {
      if (item) item.cancelled = true;
    },
    get pending() {
      return queue.filter((item) => !item.cancelled).length;
    },
    async runDue() {
      const due = queue.splice(0, queue.length).filter((item) => !item.cancelled);
      for (const item of due) await item.fn();
    },
  };
}

function page(pathname, init = {}) {
  const host = init.host || "promarket.fr";
  const headers = new Headers(init.headers || {});
  if (!headers.has("host")) headers.set("host", host);
  if (!headers.has("accept") && init.accept !== null) headers.set("accept", "text/html");
  if (!headers.has("sec-fetch-dest") && init.dest !== null) headers.set("sec-fetch-dest", "document");
  const url = new URL(pathname, `https://${host}`);
  return {
    method: init.method || "GET",
    headers,
    nextUrl: url,
    ip: init.ip,
    url: url.toString(),
  };
}

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

function nodeSignature(secret, timestamp, body) {
  return crypto.createHmac("sha256", secret).update(`${timestamp}.${body}`).digest("hex");
}

test("signature is lowercase hmac-sha256 of timestamp.body", async () => {
  const body = '{"events":[{"n":"pageview","d":"promarket.fr","u":"https://promarket.fr/"}]}';
  const signature = await signHoneylogBody("test-secret", body, "1700000000");
  assert.equal(signature, "e1f22d129ed7ca6a944d256db01a4d6ac97780f5366d806292ea7b2704778c06");
  assert.match(signature, /^[0-9a-f]+$/);
});

test("signature covers the exact UTF-8 JSON bytes", async () => {
  const body = '{"events":[{"n":"pageview","d":"promarket.fr","u":"https://promarket.fr/méthode"}]}';
  const signature = await signHoneylogBody(SECRET, body, "1700000001");
  assert.equal(signature, nodeSignature(SECRET, "1700000001", body));
});

test("missing env vars do nothing", async () => {
  const calls = [];
  const clock = scheduler();
  const honeylog = createHoneylog({
    env: { HONEYLOG_API_URL: "https://api.honeylog.io/api/events", HONEYLOG_SITE_DOMAIN: "promarket.fr" },
    fetchImpl: async () => {
      calls.push(1);
      return new Response(null, { status: 202 });
    },
    scheduler: clock,
  });
  honeylog.record(page("/services"));
  await clock.runDue();
  assert.equal(calls.length, 0);
  assert.equal(clock.pending, 0);
});

test("non-https ingestion URL is not called", async () => {
  const logs = captureConsole();
  const calls = [];
  try {
    const honeylog = createHoneylog({
      env: { ...ENV, HONEYLOG_API_URL: "http://api.honeylog.io/api/events" },
      fetchImpl: async () => {
        calls.push(1);
        return new Response(null, { status: 202 });
      },
      scheduler: scheduler(),
    });
    honeylog.record(page("/"));
    honeylog.record(page("/services"));
    assert.equal(calls.length, 0);
    assert.equal(logs.lines.length, 1);
    assert.equal(logs.lines.some((line) => line.includes(SECRET)), false);
  } finally {
    logs.restore();
  }
});

test("buffers several document views into one signed request", async () => {
  const calls = [];
  const clock = scheduler();
  const pending = [];
  const honeylog = createHoneylog({
    env: ENV,
    scheduler: clock,
    maxBatchSize: 10,
    now: () => Date.parse("2026-07-15T10:20:30Z"),
    fetchImpl: async (url, init) => {
      calls.push({ url, init });
      return new Response(null, { status: 202 });
    },
  });

  honeylog.record(page("/catalog?utm_source=custom", {
    headers: {
      referer: "https://www.google.com/search?q=gohighlevel",
      "user-agent": "Mozilla/5.0 CustomCollector/1.0",
      "accept-language": "fr-FR,fr;q=0.9",
      cookie: "session=nope",
      authorization: "Bearer nope",
    },
    ip: "203.0.113.10",
  }), (promise) => pending.push(promise));
  honeylog.record(page("/pricing"), (promise) => pending.push(promise));

  assert.equal(calls.length, 0);
  assert.equal(clock.pending, 1);
  await clock.runDue();
  await Promise.all(pending);

  assert.equal(calls.length, 1);
  const { url, init } = calls[0];
  assert.equal(url, ENV.HONEYLOG_API_URL);
  assert.equal(init.method, "POST");
  assert.deepEqual(Object.keys(init.headers).sort(), [
    "Content-Type",
    "X-Honeylog-Signature",
    "X-Honeylog-Site",
    "X-Honeylog-Timestamp",
  ]);
  assert.equal(init.headers["Content-Type"], "application/json");
  assert.equal(init.headers["X-Honeylog-Site"], "promarket.fr");
  assert.equal(
    init.headers["X-Honeylog-Signature"],
    nodeSignature(SECRET, init.headers["X-Honeylog-Timestamp"], init.body),
  );

  const payload = JSON.parse(init.body);
  assert.equal(payload.events.length, 2);
  assert.equal(payload.events[0].n, "pageview");
  assert.equal(payload.events[0].d, "promarket.fr");
  assert.equal(payload.events[0].u, "https://promarket.fr/catalog?utm_source=custom");
  assert.equal(payload.events[0].r, "https://www.google.com/search?q=gohighlevel");
  assert.equal(payload.events[0].ua, "Mozilla/5.0 CustomCollector/1.0");
  assert.equal(payload.events[0].ip, "203.0.113.10");
  assert.equal(payload.events[0].method, "GET");
  assert.equal(payload.events[0].status_code, undefined);
  assert.equal(payload.events[0].headers["accept-language"], "fr-FR,fr;q=0.9");
  assert.equal(payload.events[0].headers.cookie, undefined);
  assert.equal(payload.events[0].headers.authorization, undefined);
  assert.equal(payload.events[0].p.collector, "custom-http");
  assert.equal(payload.events[1].u, "https://promarket.fr/pricing");
  assert.equal(init.body.includes(SECRET), false);
});

test("a full batch flushes immediately and the remainder waits", async () => {
  const calls = [];
  const clock = scheduler();
  const pending = [];
  const honeylog = createHoneylog({
    env: ENV,
    scheduler: clock,
    maxBatchSize: 2,
    fetchImpl: async (_url, init) => {
      calls.push(init.body);
      return new Response(null, { status: 202 });
    },
  });

  honeylog.record(page("/a"), (promise) => pending.push(promise));
  honeylog.record(page("/b"), (promise) => pending.push(promise));
  honeylog.record(page("/c"), (promise) => pending.push(promise));
  await Promise.all(pending.slice(0, 2));

  assert.equal(calls.length, 1);
  assert.deepEqual(JSON.parse(calls[0]).events.map((event) => new URL(event.u).pathname), ["/a", "/b"]);
  assert.equal(clock.pending, 1);

  await clock.runDue();
  await pending[2];
  assert.equal(calls.length, 2);
  assert.deepEqual(JSON.parse(calls[1]).events.map((event) => new URL(event.u).pathname), ["/c"]);
});

test("retries use a fresh timestamp and the same body", async () => {
  const calls = [];
  let clockMs = 1_700_000_000_000;
  const honeylog = createHoneylog({
    env: ENV,
    scheduler: scheduler(),
    maxBatchSize: 1,
    sleep: async () => {},
    now: () => {
      clockMs += 1000;
      return clockMs;
    },
    fetchImpl: async (_url, init) => {
      calls.push(init);
      return new Response("temporary", { status: calls.length === 1 ? 500 : 202 });
    },
  });
  const pending = [];
  honeylog.record(page("/audit"), (promise) => pending.push(promise));
  await Promise.all(pending);

  assert.equal(calls.length, 2);
  assert.equal(calls[0].body, calls[1].body);
  assert.notEqual(calls[0].headers["X-Honeylog-Timestamp"], calls[1].headers["X-Honeylog-Timestamp"]);
  for (const call of calls) {
    assert.equal(
      call.headers["X-Honeylog-Signature"],
      nodeSignature(SECRET, call.headers["X-Honeylog-Timestamp"], call.body),
    );
  }
});

test("400 is not retried and the secret is never logged", async () => {
  const logs = captureConsole();
  const calls = [];
  try {
    const honeylog = createHoneylog({
      env: ENV,
      scheduler: scheduler(),
      maxBatchSize: 1,
      sleep: async () => {},
      fetchImpl: async () => {
        calls.push(1);
        return new Response(`bad signature ${SECRET}`, { status: 400 });
      },
    });
    const pending = [];
    honeylog.record(page("/"), (promise) => pending.push(promise));
    await Promise.all(pending);
    assert.equal(calls.length, 1);
    assert.equal(logs.lines.length, 1);
    assert.match(logs.lines[0], /HTTP 400/);
    assert.match(logs.lines[0], /\[redacted\]/);
    assert.equal(logs.lines.some((line) => line.includes(SECRET)), false);
  } finally {
    logs.restore();
  }
});

test("network failures stop after the attempt budget", async () => {
  const logs = captureConsole();
  const calls = [];
  try {
    const honeylog = createHoneylog({
      env: ENV,
      scheduler: scheduler(),
      maxBatchSize: 1,
      maxAttempts: 3,
      sleep: async () => {},
      fetchImpl: async () => {
        calls.push(1);
        throw new Error("connect ECONNRESET");
      },
    });
    const pending = [];
    honeylog.record(page("/guide"), (promise) => pending.push(promise));
    await pending[0];
    assert.equal(calls.length, 3);
    assert.match(logs.lines.join("\n"), /attempt 3 of 3/);
    assert.equal(logs.lines.some((line) => line.includes(SECRET)), false);
  } finally {
    logs.restore();
  }
});

test("other hosts, prefetches, and non-document requests are ignored", async () => {
  const calls = [];
  const clock = scheduler();
  const honeylog = createHoneylog({
    env: ENV,
    scheduler: clock,
    fetchImpl: async () => {
      calls.push(1);
      return new Response(null, { status: 202 });
    },
  });

  const ignored = [
    page("/", { host: "promarket-git-preview.vercel.app" }),
    page("/", { host: "promarket.fr", headers: { "x-forwarded-host": "promarket.fr", host: "localhost:3000" } }),
    page("/services", { headers: { "next-router-prefetch": "1" } }),
    page("/services", { headers: { purpose: "prefetch" } }),
    page("/services", { headers: { rsc: "1", accept: "text/x-component" }, dest: null }),
    page("/robots.txt"),
    page("/sitemap.xml"),
    page("/logo.svg"),
    page("/", { method: "POST" }),
    page("/guide", { headers: { "sec-fetch-dest": "empty" } }),
  ];
  for (const request of ignored) honeylog.record(request);
  await clock.runDue();
  assert.equal(calls.length, 0);

  assert.equal(shouldTrackPageview(page("/services")), true);
  assert.equal(
    shouldTrackPageview(page("/guide/gohighlevel-france", {
      dest: null,
      headers: { accept: "*/*", "user-agent": "Mozilla/5.0 (compatible; Googlebot/2.1)" },
    })),
    true,
  );
  assert.equal(shouldTrackPageview(page("/feed.json")), false);
});

test("client-supplied x-forwarded-for is not used as the IP", async () => {
  const calls = [];
  const clock = scheduler();
  const honeylog = createHoneylog({
    env: ENV,
    scheduler: clock,
    maxBatchSize: 1,
    fetchImpl: async (_url, init) => {
      calls.push(init.body);
      return new Response(null, { status: 202 });
    },
  });
  const pending = [];
  honeylog.record(page("/", {
    ip: undefined,
    headers: { "x-forwarded-for": "198.51.100.20", "x-real-ip": "203.0.113.8" },
  }), (promise) => pending.push(promise));
  await Promise.all(pending);
  assert.equal(JSON.parse(calls[0]).events[0].ip, "203.0.113.8");
});

test("enqueue failures do not escape to the caller", () => {
  const logs = captureConsole();
  try {
    const honeylog = createHoneylog({ env: ENV, scheduler: scheduler() });
    assert.doesNotThrow(() => honeylog.record(null));
    assert.equal(logs.lines.some((line) => line.includes(SECRET)), false);
  } finally {
    logs.restore();
  }
});
