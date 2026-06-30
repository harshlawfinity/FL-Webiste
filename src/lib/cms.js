import { cache } from "react";

const CMS_BASE_URL =
  process.env.NEXT_PUBLIC_CRM_CMS_BASE_URL ||
  process.env.CRM_CMS_BASE_URL ||
  (process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : "https://internal.lawfinity.in");

// Server fetch cache (ISR/metadata). Override via CMS_REVALIDATE_SECONDS env if needed.
const CMS_REVALIDATE_SECONDS = Number(process.env.CMS_REVALIDATE_SECONDS || 60);
const CMS_FETCH_TIMEOUT_MS = Number(process.env.CMS_FETCH_TIMEOUT_MS || 15000);

async function fetchCms(path, { fresh = false } = {}) {
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), CMS_FETCH_TIMEOUT_MS);

    const res = await fetch(`${CMS_BASE_URL}${path}`, {
      ...(fresh
        ? { cache: "no-store" }
        : { next: { revalidate: CMS_REVALIDATE_SECONDS } }),
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    if (!res.ok) return null;
    const data = await res.json();
    return data?.success ? data.page : null;
  } catch (error) {
    const message = String(error?.message || error || "");
    const isDynamicUsage =
      error?.digest === "DYNAMIC_SERVER_USAGE" ||
      message.includes("Dynamic server usage");

    if (!isDynamicUsage && error?.name !== "AbortError") {
      console.error("[factory CMS] fetch failed:", path, error);
    }
    // Timeout is non-fatal — page shell renders and client sync fetches fresh CRM data.
    if (error?.name === "AbortError" && process.env.NODE_ENV === "development") {
      console.warn("[factory CMS] fetch timeout (static fallback):", path);
    }
    return null;
  }
}

// Dedupe CMS fetches within the same request (generateMetadata + page component share one call).
export const getFactoryCmsLandingPage = cache(async (slug) => {
  return fetchCms(`/api/public/factorylicence/landing-pages/${slug}`);
});

export const getFactoryCmsStaticPage = cache(async (pageKey) => {
  return fetchCms(`/api/public/factorylicence/static-pages/${pageKey}`);
});

// Uncached fetch for metadata — avoids stale SEO when CRM publishes.
export async function getFactoryCmsStaticPageFresh(pageKey) {
  return fetchCms(`/api/public/factorylicence/static-pages/${pageKey}`, { fresh: true });
}

function normalizeCmsKeywords(keywords) {
  if (Array.isArray(keywords)) return keywords.filter(Boolean);
  if (typeof keywords === "string" && keywords.trim()) {
    return keywords.split(",").map((item) => item.trim()).filter(Boolean);
  }
  return keywords;
}

export function buildCmsMetadata(page, fallback = {}) {
  if (!page) return fallback;
  const seo = page.seo || {};
  const canonical = seo.canonicalUrl || fallback.alternates?.canonical;
  const keywords = normalizeCmsKeywords(seo.keywords) || fallback.keywords;
  return {
    ...fallback,
    title: seo.title || page.title || fallback.title,
    description: seo.description || fallback.description,
    keywords,
    openGraph: {
      ...(fallback.openGraph || {}),
      title: seo.ogTitle || seo.title || page.title || fallback.openGraph?.title,
      description:
        seo.ogDescription ||
        seo.description ||
        fallback.openGraph?.description ||
        fallback.description,
      url: canonical || fallback.openGraph?.url,
      images: seo.ogImage
        ? [{ url: seo.ogImage, alt: seo.ogImageAlt || page.title || "" }]
        : fallback.openGraph?.images,
    },
    alternates: {
      ...(fallback.alternates || {}),
      canonical,
    },
    robots: {
      index: seo.noIndex ? false : fallback.robots?.index ?? true,
      follow: seo.noFollow ? false : fallback.robots?.follow ?? true,
    },
  };
}

export async function buildLandingPageMetadata(slug, fallback = {}) {
  const page = await getFactoryCmsLandingPage(slug);
  return buildCmsMetadata(page, fallback);
}

// Parse CMS JSON-LD schema (object or JSON string from seo.schema).
export function getCmsSchema(page) {
  const raw = page?.seo?.schema;
  if (!raw) return null;

  if (typeof raw === "object") return raw;

  if (typeof raw !== "string") return null;

  const trimmed = raw.trim();
  if (!trimmed) return null;

  try {
    return JSON.parse(trimmed);
  } catch (error) {
    // CMS sometimes appends duplicate trailing fragments after valid JSON-LD.
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
