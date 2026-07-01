import { cache } from "react";

const CMS_BASE_URL =
  process.env.NEXT_PUBLIC_CRM_CMS_BASE_URL ||
  process.env.CRM_CMS_BASE_URL ||
  "https://internal.lawfinity.in";

// Server fetch cache (ISR/metadata). Override via CMS_REVALIDATE_SECONDS env if needed.
const CMS_REVALIDATE_SECONDS = Number(process.env.CMS_REVALIDATE_SECONDS || 60);
const MARQUEE_REVALIDATE_SECONDS = Number(process.env.CMS_MARQUEE_REVALIDATE_SECONDS || 30);
const CMS_FETCH_TIMEOUT_MS = Number(process.env.CMS_FETCH_TIMEOUT_MS || 15000);

async function fetchCms(path, { fresh = false, revalidate = CMS_REVALIDATE_SECONDS } = {}) {
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), CMS_FETCH_TIMEOUT_MS);

    const res = await fetch(`${CMS_BASE_URL}${path}`, {
      ...(fresh
        ? { cache: "no-store" }
        : { next: { revalidate } }),
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

// Uncached for /[slug] — SEO publish should be visible immediately, not after ISR window.
export const getFactoryCmsLandingPageLive = cache(async (slug) => {
  return fetchCms(`/api/public/factorylicence/landing-pages/${slug}`, { fresh: true });
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

// Static CMS pages that can seed marquee discovery (home marqueeServiceSlugs, connectedServices, etc.).
const MARQUEE_STATIC_PAGE_KEYS = ["home", "about", "contact", "blogs"];

// Default BFS seeds when CRM list API is unavailable — entry points for each service cluster.
// New CMS pages appear in marquee when linked via connectedServices from any discovered page.
const DEFAULT_MARQUEE_DISCOVERY_SEEDS = [
  "hazardous-waste-registration",
  "biomedical-waste-management-registration",
  "hospital-registration",
  "clinical-establishment-registration",
];

// Routes that are never CMS-only service landing pages in the footer marquee.
const RESERVED_MARQUEE_SLUGS = new Set([
  ...STATIC_LANDING_SLUGS,
  "about",
  "contact",
  "blogs",
  "privacy-policy",
  "terms-conditions",
  "refund-cancellation",
  "payments",
  "api",
]);

async function fetchCmsPayload(path, { revalidate = CMS_REVALIDATE_SECONDS } = {}) {
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), CMS_FETCH_TIMEOUT_MS);

    const res = await fetch(`${CMS_BASE_URL}${path}`, {
      next: { revalidate },
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

// CRM marks SEO-live pages as needs_review with publishedAt — not always status=published.
export function isPublishedCmsLandingPage(page) {
  if (!page?.slug) return false;

  const website = String(page.website || "factorylicence.in").toLowerCase();
  if (!website.includes("factorylicence.in")) return false;

  const status = String(page.status || "published").toLowerCase();
  if (["draft", "archived", "deleted", "inactive"].includes(status)) return false;

  const explicitlyPublished = ["published", "publish", "active", "visible"].includes(status);
  const liveOnCrm = status === "needs_review" && Boolean(page.publishedAt);

  return explicitlyPublished || liveOnCrm;
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
      // connectedServices uses `name`; CMS list items may use title/label.
      const title = item?.title || item?.name || item?.label || item?.mainHeading;
      return toMarqueeItem(slug, title);
    })
    .filter(Boolean);
}

function isMarqueeCandidateSlug(slug) {
  const clean = String(slug || "").replace(/^\/+|\/+$/g, "");
  if (!clean || RESERVED_MARQUEE_SLUGS.has(clean)) return false;
  if (clean.startsWith("blogs")) return false;
  return /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(clean);
}

function enqueueMarqueeSlug(queue, slug) {
  const clean = String(slug || "").replace(/^\/+|\/+$/g, "");
  if (isMarqueeCandidateSlug(clean)) queue.push(clean);
}

// Scan CMS JSON for internal service links (connectedServices, body HTML hrefs, slug fields).
function collectInternalSlugsFromValue(value, slugs) {
  if (value == null) return;

  if (typeof value === "string") {
    const patterns = [
      /factorylicence\.in\/([a-z0-9]+(?:-[a-z0-9]+)*)/gi,
      /href=["']\/([a-z0-9]+(?:-[a-z0-9]+)*)/gi,
    ];
    for (const pattern of patterns) {
      let match = pattern.exec(value);
      while (match) {
        if (isMarqueeCandidateSlug(match[1])) slugs.add(match[1]);
        match = pattern.exec(value);
      }
    }
    return;
  }

  if (Array.isArray(value)) {
    value.forEach((item) => collectInternalSlugsFromValue(item, slugs));
    return;
  }

  if (typeof value === "object") {
    if (isMarqueeCandidateSlug(value.slug)) slugs.add(value.slug);
    const fromHref = extractSlugFromHref(value.url || value.link || value.href || "");
    if (isMarqueeCandidateSlug(fromHref)) slugs.add(fromHref);
    Object.values(value).forEach((item) => collectInternalSlugsFromValue(item, slugs));
  }
}

function extractLinkedSlugsFromCmsPage(page) {
  const slugs = new Set();
  // connectedServices is how SEO links new CMS service pages — seed marquee discovery.
  collectInternalSlugsFromValue(page?.content?.connectedServices || page?.connectedServices, slugs);
  collectInternalSlugsFromValue(page?.content, slugs);
  collectInternalSlugsFromValue(page?.customSections, slugs);
  collectInternalSlugsFromValue(page?.content?.customSections, slugs);
  return Array.from(slugs);
}

function extractMarqueeSeedsFromStaticContent(content = {}) {
  const seeds = [];

  extractMarqueeItemsFromConfig(content.connectedServices).forEach((item) => {
    seeds.push(item.slug);
  });

  extractMarqueeItemsFromConfig(
    content.marqueeServices ||
      content.serviceMarquee ||
      content.newServices ||
      content.services ||
      (Array.isArray(content.marqueeServiceSlugs)
        ? content.marqueeServiceSlugs.map((slug) => ({ slug }))
        : [])
  ).forEach((item) => {
    seeds.push(item.slug);
  });

  const slugSet = new Set();
  collectInternalSlugsFromValue(content, slugSet);
  slugSet.forEach((slug) => seeds.push(slug));

  return seeds;
}

function pagesFromListPayload(data) {
  if (!data?.success) return null;

  const pages =
    data.pages ||
    data.landingPages ||
    data.data?.pages ||
    (Array.isArray(data.data) ? data.data : null);

  return Array.isArray(pages) && pages.length ? pages : null;
}

// CRM list endpoint (preferred) — returns all published factorylicence.in landing pages.
async function fetchCmsLandingPagesList() {
  const paths = [
    `/api/public/factorylicence/published-landing-pages?website=factorylicence.in`,
    `/api/public/factorylicence/landing-pages/list?website=factorylicence.in`,
    `/api/public/factorylicence/landing-pages?website=factorylicence.in&status=published`,
  ];

  for (const path of paths) {
    const data = await fetchCmsPayload(path, { revalidate: MARQUEE_REVALIDATE_SECONDS });
    const pages = pagesFromListPayload(data);
    if (pages) return pages;
  }

  return null;
}

// Optional CMS static pages — SEO can curate service links until CRM list API ships.
const MARQUEE_LIST_STATIC_KEYS = [
  "services-marquee",
  "service-pages",
  "marquee-services",
  "all-services",
];

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

async function fetchMarqueeServicesFromStaticPages() {
  const items = [];
  for (const pageKey of MARQUEE_LIST_STATIC_KEYS) {
    items.push(...(await fetchMarqueeServicesFromStaticPage(pageKey)));
  }
  return items;
}

// Walk CMS links from static + landing pages to discover CMS-only service pages.
async function discoverMarqueeServicesViaGraph() {
  const found = new Map();
  const visited = new Set();
  const queue = [...STATIC_LANDING_SLUGS];

  // Home/about/contact/blogs may declare marqueeServiceSlugs or linked services in CMS.
  for (const pageKey of MARQUEE_STATIC_PAGE_KEYS) {
    const page = await getFactoryCmsStaticPage(pageKey);
    const content = page?.content || page?.sections || {};
    for (const slug of extractMarqueeSeedsFromStaticContent(content)) {
      enqueueMarqueeSlug(queue, slug);
    }
  }

  const envSeeds = String(process.env.CMS_MARQUEE_SEED_SLUGS || "")
    .split(",")
    .map((slug) => slug.trim())
    .filter(Boolean);

  const discoverySeeds =
    envSeeds.length > 0 ? envSeeds : DEFAULT_MARQUEE_DISCOVERY_SEEDS;
  discoverySeeds.forEach((slug) => enqueueMarqueeSlug(queue, slug));

  // Pre-enqueue connectedServices from seed pages — new CMS pages SEO links there appear in marquee.
  for (const seed of discoverySeeds) {
    const seedPage = await fetchCms(`/api/public/factorylicence/landing-pages/${seed}`, {
      revalidate: MARQUEE_REVALIDATE_SECONDS,
    });
    for (const slug of extractLinkedSlugsFromCmsPage(seedPage || {})) {
      enqueueMarqueeSlug(queue, slug);
    }
  }

  for (const item of await fetchMarqueeServicesFromStaticPages()) {
    enqueueMarqueeSlug(queue, item.slug);
  }

  while (queue.length) {
    const slug = queue.shift();
    if (!slug || visited.has(slug)) continue;
    visited.add(slug);

    const page = await fetchCms(`/api/public/factorylicence/landing-pages/${slug}`, {
      revalidate: MARQUEE_REVALIDATE_SECONDS,
    });
    if (!isPublishedCmsLandingPage(page)) continue;

    if (!STATIC_LANDING_SLUGS.has(slug)) {
      found.set(slug, toMarqueeItem(slug, marqueeTitleFromPage(page)));
    }

    // Follow connectedServices plus any internal links embedded in CMS section HTML.
    for (const nextSlug of extractLinkedSlugsFromCmsPage(page)) {
      enqueueMarqueeSlug(queue, nextSlug);
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

  for (const item of await fetchMarqueeServicesFromStaticPages()) {
    if (!STATIC_LANDING_SLUGS.has(item.slug)) items.set(item.slug, item);
  }

  for (const item of await discoverMarqueeServicesViaGraph()) {
    if (!STATIC_LANDING_SLUGS.has(item.slug)) items.set(item.slug, item);
  }

  return Array.from(items.values()).sort((a, b) => a.title.localeCompare(b.title));
});
