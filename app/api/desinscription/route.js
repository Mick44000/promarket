import { MISSING_CONTACT_MESSAGE, clientKey, handleUnsubscribe, stateForResult } from "@/lib/unsubscribe.mjs";

export const dynamic = "force-dynamic";

function clientIp(request) {
  return clientKey(request.headers, request.ip);
}

async function readFields(request) {
  const type = request.headers.get("content-type") || "";
  if (type.includes("application/json")) {
    const payload = await request.json();
    if (!payload || typeof payload !== "object" || Array.isArray(payload)) return null;
    return {
      email: payload.email,
      phone: payload.phone,
      canaux: payload.canaux,
      tout: payload.tout,
      canaux_presents: payload.canaux_presents,
      pm_hp: payload.pm_hp ?? "",
    };
  }
  const form = await request.formData();
  return {
    email: form.get("email"),
    phone: form.get("phone"),
    canaux: form.getAll("canaux"),
    tout: form.get("tout"),
    canaux_presents: form.get("canaux_presents"),
    pm_hp: form.get("pm_hp") ?? "",
  };
}

function json(result) {
  return Response.json(
    { ok: result.ok, message: result.message },
    { status: result.status, headers: { "cache-control": "no-store" } },
  );
}

export async function POST(request) {
  let fields;
  try {
    fields = await readFields(request);
  } catch {
    fields = null;
  }
  if (!fields) {
    return json({ ok: false, status: 400, message: MISSING_CONTACT_MESSAGE });
  }

  const result = await handleUnsubscribe({
    ...fields,
    ip: clientIp(request),
    origin: request.headers.get("origin"),
    host: request.headers.get("host"),
  });

  const type = request.headers.get("content-type") || "";
  if (!type.includes("application/json")) {
    return new Response(null, {
      status: 303,
      headers: {
        Location: `/desinscription?etat=${stateForResult(result)}`,
        "cache-control": "no-store",
      },
    });
  }
  return json(result);
}
