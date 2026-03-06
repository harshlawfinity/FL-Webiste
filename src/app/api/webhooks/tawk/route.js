/**
 * Production webhook URL: https://factorylicence.in/api/webhooks/tawk
 * POST = Tawk webhook (re-exported). GET = health check so browser/open URL returns 200.
 */
import { NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export { POST } from "../../tawk/webhook/route";

export function GET() {
  return NextResponse.json({
    ok: true,
    message: "Tawk webhook endpoint. Use POST for webhook events.",
  });
}
