const STORAGE_KEY = "fl_submitted_leads_v1";

function normalizePhone(phone = "") {
  return String(phone).replace(/\D/g, "").slice(-10);
}

// Local calendar date (YYYY-MM-DD) — a new day means a fresh lead even for the same
// phone + pageUrl combination.
function getLeadDateKey() {
  const now = new Date();
  const yyyy = now.getFullYear();
  const mm = String(now.getMonth() + 1).padStart(2, "0");
  const dd = String(now.getDate()).padStart(2, "0");
  return `${yyyy}-${mm}-${dd}`;
}

function readStore() {
  if (typeof window === "undefined") return {};
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    const parsed = raw ? JSON.parse(raw) : {};
    return parsed && typeof parsed === "object" ? parsed : {};
  } catch {
    return {};
  }
}

function writeStore(store) {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(store));
  } catch {
    // Ignore quota / private-mode failures — form still submits normally.
  }
}

// Client-side lead dedupe (organic leads only): a submission is a duplicate ONLY when
// leadDate + pageUrl + phone ALL match a previous submission for that phone. If even one
// of these three differs from the previous entry (e.g. a new day, a different page, or a
// different number), it is treated as a fresh lead and gets appended in the DB.
function leadKeyFor(phone, pageUrl) {
  const normalizedPhone = normalizePhone(phone);
  if (!normalizedPhone || normalizedPhone.length !== 10) return null;

  const normalizedPageUrl = String(pageUrl || "").trim().toLowerCase();
  const leadDate = getLeadDateKey();
  return `${normalizedPhone}::${normalizedPageUrl}::${leadDate}`;
}

/** True only when this phone already has a submission with the SAME pageUrl AND SAME leadDate. */
export function hasSubmittedLead(phone, pageUrl) {
  const key = leadKeyFor(phone, pageUrl);
  if (!key) return false;
  const store = readStore();
  return Boolean(store[key]);
}

/** Persist phone+pageUrl+leadDate after a successful new lead submission. */
export function markLeadSubmitted(phone, pageUrl) {
  const key = leadKeyFor(phone, pageUrl);
  if (!key) return;
  const store = readStore();
  store[key] = Date.now();
  writeStore(store);
}