import { NextResponse } from 'next/server';import { NextResponse } from "next/server";

// Forward pathname to root layout — used for blog CRM schema in <head>.
function nextWithPathname(request) {
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-pathname", request.nextUrl.pathname || "");
  return NextResponse.next({ request: { headers: requestHeaders } });
}

export function middleware(request) {
  const pathname = request.nextUrl.pathname || "";
  // Webhooks are server-to-server; skip any future auth or redirect logic
  if (
    pathname.startsWith("/api/webhooks") ||
    pathname.startsWith("/api/tawk/webhook") ||
    pathname.startsWith("/api/factory/tawk/webhook")
  ) {
    return nextWithPathname(request);
  }

  const host = request.headers.get("host") || "";
  const hostname = host.split(":")[0];

  const parts = hostname.split(".");

  // Match format like: delhi.pollutionnoc.factorylicence.in
  if (
    parts.length === 4 &&
    parts[1] === "pollutionnoc" &&
    parts[2] === "factorylicence"
  ) {
    const state = parts[0];
    const rewriteUrl = new URL(`/pollution-noc-in-${state}`, request.url);
    const requestHeaders = new Headers(request.headers);
    requestHeaders.set("x-pathname", rewriteUrl.pathname);
    return NextResponse.rewrite(rewriteUrl, { request: { headers: requestHeaders } });
  }

  return nextWithPathname(request);
}
