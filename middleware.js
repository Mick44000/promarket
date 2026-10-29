import { NextResponse } from "next/server";
import { recordPageview } from "@/lib/honeylog.mjs";

export function middleware(request, event) {
  const host = (request.headers.get("host") || "").replace(/:\d+$/, "").toLowerCase();
  const response = NextResponse.next();
  if (host && host !== "promarket.fr") {
    response.headers.set("X-Robots-Tag", "noindex, nofollow");
  }

  // Buffer the pageview and flush after this response. waitUntil extends the
  // isolate only; it does not delay the document. A Honeylog failure must not
  // change the response.
  try {
    recordPageview(request, (promise) => {
      if (event && typeof event.waitUntil === "function") event.waitUntil(promise);
    });
  } catch {
    console.error("[honeylog] enqueue failed");
  }

  return response;
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|.*\\.(?:svg|jpg|jpeg|png|webp|ico|css|js)$).*)"],
};
