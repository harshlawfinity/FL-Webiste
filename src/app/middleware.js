import { NextResponse } from 'next/server';

export function middleware(request) {
  const pathname = request.nextUrl.pathname || '';
  // Webhooks are server-to-server; skip any future auth or redirect logic
  if (pathname.startsWith('/api/webhooks') || pathname.startsWith('/api/tawk/webhook') || pathname.startsWith('/api/factory/tawk/webhook')) {
    return NextResponse.next();
  }

  const host = request.headers.get('host') || '';
  const hostname = host.split(':')[0];

  const parts = hostname.split('.');

  // Match format like: delhi.pollutionnoc.factorylicence.in
  if (
    parts.length === 4 &&
    parts[1] === 'pollutionnoc' &&
    parts[2] === 'factorylicence'
  ) {
    const state = parts[0];
    return NextResponse.rewrite(new URL(`/pollution-noc-in-${state}`, request.url));
  }

  return NextResponse.next();
}
