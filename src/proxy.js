import { NextResponse } from "next/server";

export function proxy(request) {
  const url = request.nextUrl.clone();
  const host = request.headers.get("host");

  // Skip redirects for localhost to avoid SSL errors during development
  if (host && (host.includes("localhost") || host.includes("127.0.0.1"))) {
    return NextResponse.next();
  }

  // 1. WWW to Non-WWW Redirect
  if (host && host.startsWith("www.")) {
    const newHost = host.replace("www.", "");
    url.host = newHost;
    url.protocol = "https:"; // Enforce HTTPS during redirect
    return NextResponse.redirect(url, 301);
  }

  // 2. HTTP to HTTPS enforcement
  const proto = request.headers.get("x-forwarded-proto");
  if (proto === "http") {
    url.protocol = "https:";
    return NextResponse.redirect(url, 301);
  }

  return NextResponse.next();
}

// Ensure middleware only runs on relevant routes, excluding assets, static files, and API
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - sitemap.xml
     * - robots.txt
     */
    "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
  ],
};
