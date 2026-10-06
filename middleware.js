import { NextResponse } from "next/server";

export function middleware(request) {
  const host = (request.headers.get("host") || "").replace(/:\d+$/, "").toLowerCase();
  const response = NextResponse.next();
  if (host && host !== "promarket.fr") {
    response.headers.set("X-Robots-Tag", "noindex, nofollow");
  }
  return response;
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|.*\\.(?:svg|jpg|jpeg|png|webp|ico|css|js)$).*)"],
};
