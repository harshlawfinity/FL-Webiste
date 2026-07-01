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

// Dedicated static routes — excluded from the footer marquee (already in footer Services list).
export const STATIC_LANDING_SLUGS = new Set([
  "factory-licence-in-delhi",
  "factory-licence-in-haryana",
  "factory-licence-in-uttar-pradesh",
  "fire-noc-in-delhi",
  "fire-noc-in-haryana",
  "fire-noc-in-uttar-pradesh",
  "pollution-noc-in-delhi",
  "pollution-noc-in-haryana",
  "pollution-noc-in-uttar-pradesh",
]);

async function fetchCmsPayload(path) {
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), CMS_FETCH_TIMEOUT_MS);

    const res = await fetch(`${CMS_BASE_URL}${path}`, {
      next: { revalidate: CMS_REVALIDATE_SECONDS },
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    if (!res.ok) return null;
    const contentType = res.headers.get("content-type") || "";
    if (!contentType.includes("application/json")) return null;

    return await res.json();
  } catch {
    return null;
  }
}

function extractSlugFromHref(href = "") {
  const value = String(href || "").trim();
  if (!value) return "";

  try {
    if (/^https?:\/\//i.test(value)) {
      const pathname = new URL(value).pathname.replace(/^\/+|\/+$/g, "");
      return pathname.split("/").filter(Boolean)[0] || "";
    }
  } catch {
    return "";
  }

  return value.replace(/^\/+|\/+$/g, "").split("/").filter(Boolean)[0] || "";
}

function isPublishedCmsLandingPage(page) {
  if (!page?.slug) return false;

  const status = String(page.status || "published").toLowerCase();
  if (!["published", "publish", "active"].includes(status)) return false;
  if (page.website && page.website !== "factorylicence.in") return false;

  return true;
}

// CMS page title for marquee pills (admin "Page Title" field — not hero/mainHeading).
function marqueeTitleFromPage(page) {
  return (
    page?.title ||
    page?.mainHeading ||
    page?.content?.mainHeading ||
    page?.content?.hero?.headline ||
    page?.seo?.title ||
    page?.slug
  );
}

function toMarqueeItem(slug, title) {
  const clean = String(slug || "").replace(/^\/+|\/+$/g, "");
  if (!clean) return null;

  return {
    slug: clean,
    title: String(title || clean).trim() || clean,
    href: `/${clean}`,
  };
}

function extractMarqueeItemsFromConfig(items = []) {
  if (!Array.isArray(items)) return [];

  return items
    .map((item) => {
      const slug =
        item?.slug ||
        extractSlugFromHref(item?.url || item?.link || item?.href || "");
      const title = item?.title || item?.name || item?.label || item?.mainHeading;
      return toMarqueeItem(slug, title);
    })
    .filter(Boolean);
}

// CRM list endpoint (preferred) — returns all published factorylicence.in landing pages.
async function fetchCmsLandingPagesList() {
  const paths = [
    `/api/public/factorylicence/landing-pages/list?website=factorylicence.in`,
    `/api/public/factorylicence/landing-pages?website=factorylicence.in&status=published`,
  ];

  for (const path of paths) {
    const data = await fetchCmsPayload(path);
    const pages = data?.pages || data?.landingPages;
    if (data?.success && Array.isArray(pages) && pages.length) return pages;
  }

  return null;
}

// Optional CMS static page `services-marquee` — SEO can curate new service links until list API ships.
async function fetchMarqueeServicesFromStaticPage(pageKey) {
  const page = await getFactoryCmsStaticPage(pageKey);
  if (!page) return [];

  const content = page.content || page.sections || {};
  const collections = [
    content.services,
    content.marqueeServices,
    content.serviceMarquee,
    content.newServices,
  ].filter(Array.isArray);

  return collections.flatMap(extractMarqueeItemsFromConfig);
}

// Walk connectedServices links from known landing pages to discover CMS-only service pages.
async function discoverMarqueeServicesViaGraph() {
  const found = new Map();
  const visited = new Set();
  const queue = [...STATIC_LANDING_SLUGS];

  const home = await getFactoryCmsStaticPage("home");
  const homeContent = home?.content || home?.sections || {};

  extractMarqueeItemsFromConfig(homeContent.connectedServices).forEach((item) => {
    queue.push(item.slug);
  });

  extractMarqueeItemsFromConfig(
    homeContent.marqueeServices ||
      homeContent.serviceMarquee ||
      (Array.isArray(homeContent.marqueeServiceSlugs)
        ? homeContent.marqueeServiceSlugs.map((slug) => ({ slug }))
        : [])
  ).forEach((item) => {
    queue.push(item.slug);
  });

  const envSeeds = String(process.env.CMS_MARQUEE_SEED_SLUGS || "")
    .split(",")
    .map((slug) => slug.trim())
    .filter(Boolean);

  // Bootstrap BFS when CRM list API is unavailable — discovers linked service pages (e.g. hazardous-waste cluster).
  const discoverySeeds =
    envSeeds.length > 0 ? envSeeds : ["hazardous-waste-registration"];
  queue.push(...discoverySeeds);

  for (const item of await fetchMarqueeServicesFromStaticPage("services-marquee")) {
    queue.push(item.slug);
  }

  while (queue.length) {
    const slug = queue.shift();
    if (!slug || visited.has(slug)) continue;
    visited.add(slug);

    const page = await getFactoryCmsLandingPage(slug);
    if (!isPublishedCmsLandingPage(page)) continue;

    if (!STATIC_LANDING_SLUGS.has(slug)) {
      found.set(slug, toMarqueeItem(slug, marqueeTitleFromPage(page)));
    }

    const linked = page.content?.connectedServices || page.connectedServices || [];
    for (const item of linked) {
      const nextSlug =
        item?.slug || extractSlugFromHref(item?.url || item?.link || item?.href || "");
      if (nextSlug && !visited.has(nextSlug)) queue.push(nextSlug);
    }
  }

  return Array.from(found.values());
}

// New CMS service pages for the footer marquee (excludes the 9 static state landing routes).
export const getCmsMarqueeServices = cache(async () => {
  const items = new Map();

  const list = await fetchCmsLandingPagesList();
  if (list) {
    for (const page of list) {
      if (!page?.slug || STATIC_LANDING_SLUGS.has(page.slug)) continue;
      if (!isPublishedCmsLandingPage(page)) continue;
      items.set(page.slug, toMarqueeItem(page.slug, marqueeTitleFromPage(page)));
    }
  }

  for (const item of await fetchMarqueeServicesFromStaticPage("services-marquee")) {
    if (!STATIC_LANDING_SLUGS.has(item.slug)) items.set(item.slug, item);
  }

  for (const item of await discoverMarqueeServicesViaGraph()) {
    if (!STATIC_LANDING_SLUGS.has(item.slug)) items.set(item.slug, item);
  }

  return Array.from(items.values()).sort((a, b) => a.title.localeCompare(b.title));
});
