import { cache } from "react";

const API_BASE = "https://internal.lawfinity.in";

function tryParseJsonLd(value = "") {
  const trimmed = String(value).trim();
  if (!trimmed) return null;

  try {
    return JSON.parse(trimmed);
  } catch (error) {
    // CRM sometimes appends duplicate trailing fragments after valid JSON-LD.
    const posMatch = String(error?.message || "").match(/position (\d+)/);
    if (posMatch) {
      try {
        return JSON.parse(trimmed.slice(0, Number(posMatch[1])).trim());
      } catch {
        return null;
      }
    }
    return null;
  }
}

// CRM blog articles store JSON-LD in schemaMarkup (script tag, JSON string, or double-encoded).
export function getBlogSchema(blog) {
  const raw = blog?.schemaMarkup;
  if (!raw) return null;
  if (typeof raw === "object") return raw;

  let value = String(raw).trim();
  if (!value) return null;

  // SEO may paste the full <script type="application/ld+json"> block from CRM.
  value = value.replace(/^<script[^>]*>/i, "").replace(/<\/script>\s*$/i, "").trim();

  const parsed = tryParseJsonLd(value);
  if (parsed) return parsed;

  // Some CRM exports wrap JSON as an escaped string: "\"{...}\""
  if (value.startsWith('"') || value.startsWith("'")) {
    try {
      const unquoted = JSON.parse(value);
      if (typeof unquoted === "string") return tryParseJsonLd(unquoted);
      if (typeof unquoted === "object" && unquoted) return unquoted;
    } catch {
      return null;
    }
  }

  return null;
}

export const fetchPublishedBlogs = cache(async () => {
  const res = await fetch(`${API_BASE}/api/public/published-fl?limit=1000`, {
    cache: "no-store",
  });

  if (!res.ok) return null;

  const data = await res.json();
  return Array.isArray(data?.blogs) ? data.blogs : [];
});

// Deduped within one request (layout + page + generateMetadata share one list fetch).
export const getBlogBySlug = cache(async (slug) => {
  const blogs = await fetchPublishedBlogs();
  if (!blogs) return null;
  return blogs.find((blog) => blog?.urlSlug === slug) || null;
});
