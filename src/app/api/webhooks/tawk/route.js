/**
 * Production webhook URL: https://factorylicence.in/api/webhooks/tawk
 * Re-exports the canonical handler from api/tawk/webhook so both URLs work.
 */
export { POST, runtime, dynamic } from "@/app/api/tawk/webhook/route";
