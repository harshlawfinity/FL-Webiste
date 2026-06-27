import { cache } from "react";

const CMS_BASE_URL =
  process.env.NEXT_PUBLIC_CRM_CMS_BASE_URL ||
  process.env.CRM_CMS_BASE_URL ||
  (process.env.NODE_ENV === "production"
    ? "https://internal.lawfinity.in"
    : "http://localhost:3000");

// Cache CMS responses across requests; revalidate periodically instead of no-store on every hit.
const CMS_REVALIDATE_SECONDS = 300;
const CMS_FETCH_TIMEOUT_MS = 8000;

async function fetchCms(path) {
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), CMS_FETCH_TIMEOUT_MS);

    const res = await fetch(`${CMS_BASE_URL}${path}`, {
      next: { revalidate: CMS_REVALIDATE_SECONDS },
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
    if (error?.name === "AbortError") {
      console.error("[factory CMS] fetch timeout:", path);
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

export function buildCmsMetadata(page, fallback = {}) {
  if (!page) return fallback;
  const seo = page.seo || {};
  const canonical = seo.canonicalUrl || fallback.alternates?.canonical;
  return {
    ...fallback,
    title: seo.title || page.title || fallback.title,
    description: seo.description || fallback.description,
    keywords: seo.keywords || fallback.keywords,
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

  if (typeof raw === "string") {
    try {
      return JSON.parse(raw);
    } catch {
      return null;
    }
  }

  if (typeof raw === "object") return raw;
  return null;
}
