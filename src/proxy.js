import { NextResponse } from "next/server";

export function proxy(request) {
  const url = request.nextUrl.clone();
  const host = request.headers.get("host");

  // Skip redirects for local development (localhost, 127.0.0.1, or any port-based local URL)
  if (
    host && 
    (host.includes("localhost") || 
     host.includes("127.0.0.1") || 
     host.includes(":3000"))
  ) {
    return NextResponse.next();
  }

  // 1. WWW to Non-WWW Redirect
  if (host && host.startsWith("www.")) {
    url.hostname = host.replace("www.", "");
    url.port = ""; // Explicitly remove dev ports (like :3000) if they leaked in
    url.protocol = "https:"; // Enforce production HTTPS
    return NextResponse.redirect(url, 301);
  }

  // 2. HTTP to HTTPS enforcement
  const proto = request.headers.get("x-forwarded-proto");
  if (proto === "http") {
    url.protocol = "https:";
    url.port = ""; // Ensure standard HTTPS port
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
