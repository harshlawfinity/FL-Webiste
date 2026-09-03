import { cache } from "react";

const CMS_BASE_URL =
  process.env.NEXT_PUBLIC_CRM_CMS_BASE_URL ||
  process.env.CRM_CMS_BASE_URL ||
  "https://internal.lawfinity.in";

// Server fetch cache (ISR/metadata). Override via CMS_REVALIDATE_SECONDS env if needed.
const CMS_REVALIDATE_SECONDS = Number(process.env.CMS_REVALIDATE_SECONDS || 60);
// Marquee discovery is expensive — cache longer than per-page CMS (matches ISR default).
const MARQUEE_REVALIDATE_SECONDS = Number(process.env.CMS_MARQUEE_REVALIDATE_SECONDS || 300);
const MARQUEE_BFS_BATCH_SIZE = 6;
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

function firstNonEmpty(...values) {
  return values.find((value) => typeof value === "string" ? value.trim() : value);
}

function isTruthyCmsFlag(value) {
  if (typeof value === "string") return ["true", "1", "yes"].includes(value.toLowerCase());
  return value === true || value === 1;
}

function isFalseyCmsFlag(value) {
  if (typeof value === "string") return ["false", "0", "no"].includes(value.toLowerCase());
  return value === false || value === 0;
}

function parseCmsRobots(seo = {}, fallbackRobots = {}) {
  const robots = seo.robots;
  const robotsText = typeof robots === "string"
    ? robots.toLowerCase()
    : String(seo.robotsTag || seo.metaRobots || "").toLowerCase();
  const noIndex =
    isTruthyCmsFlag(seo.noIndex) ||
    isTruthyCmsFlag(robots?.noIndex) ||
    isFalseyCmsFlag(robots?.index) ||
    robotsText.includes("noindex");
  const noFollow =
    isTruthyCmsFlag(seo.noFollow) ||
    isTruthyCmsFlag(robots?.noFollow) ||
    isFalseyCmsFlag(robots?.follow) ||
    robotsText.includes("nofollow");

  return {
    index: noIndex ? false : fallbackRobots.index ?? true,
    follow: noFollow ? false : fallbackRobots.follow ?? true,
  };
}

export function buildCmsMetadata(page, fallback = {}) {
  if (!page) return fallback;
  const seo = page.seo || {};
  const canonical = firstNonEmpty(
    seo.canonicalUrl,
    seo.canonical,
    page.canonicalUrl,
    page.canonical,
    fallback.alternates?.canonical
  );
  const keywords = normalizeCmsKeywords(seo.keywords) || fallback.keywords;
  const title = firstNonEmpty(seo.title, seo.metaTitle, page.metaTitle, page.title, fallback.title);
  const description = firstNonEmpty(
    seo.description,
    seo.metaDescription,
    page.metaDescription,
    fallback.description
  );
  return {
    ...fallback,
    title,
    description,
    keywords,
    openGraph: {
      ...(fallback.openGraph || {}),
      title: firstNonEmpty(seo.ogTitle, seo.title, title, fallback.openGraph?.title),
      description:
        firstNonEmpty(seo.ogDescription, seo.description, description, fallback.openGraph?.description),
      url: canonical || fallback.openGraph?.url,
      images: seo.ogImage
        ? [{ url: seo.ogImage, alt: seo.ogImageAlt || page.title || "" }]
        : fallback.openGraph?.images,
    },
    alternates: {
      ...(fallback.alternates || {}),
      canonical,
    },
    robots: parseCmsRobots(seo, fallback.robots),
  };
}

export async function buildLandingPageMetadata(slug, fallback = {}) {
  const page = await getFactoryCmsLandingPageLive(slug);
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

// CRM rich text sometimes ships <mark> highlights / inline background-color from
// pasted content — strip those so published pages don't show stray highlighting.
function stripCmsBodyHighlightArtifacts(html = "") {
  return String(html || "")
    .replace(/<\/?mark\b[^>]*>/gi, "")
    .replace(/\sstyle=(["'])((?:(?!\1).)*background-color\s*:[^"']*)((?:(?!\1).)*)\1/gi, (_match, quote, before, after) => {
      const nextStyle = `${before}${after}`
        .replace(/background-color\s*:\s*[^;]+;?/gi, "")
        .replace(/;;+/g, ";")
        .trim();
      return nextStyle ? ` style=${quote}${nextStyle}${quote}` : "";
    });
}

// Promote bare <td> header cells to <th> for the CMS's first table row (CRM authors
// tables without explicit header markup).
function promoteCmsBodyTableHeaderCells(html = "") {
  return String(html || "").replace(/<table\b[\s\S]*?<\/table>/gi, (table) => {
    if (/<th\b/i.test(table)) return table;
    return table.replace(/<tr\b[^>]*>[\s\S]*?<\/tr>/i, (firstRow) =>
      firstRow.replace(/<\/?td\b/gi, (tag) => tag.replace(/td/i, "th"))
    );
  });
}

function stripCmsBodyTags(value = "") {
  return String(value).replace(/<[^>]*>/g, "").replace(/\s+/g, " ").trim().toLowerCase();
}

// CRM sometimes repeats a paragraph across the unified body — drop exact repeats
// within the same heading section (a new heading resets the dedupe window).
export function normalizeCmsBodyHtml(html = "") {
  let paragraphFingerprints = new Set();
  return promoteCmsBodyTableHeaderCells(stripCmsBodyHighlightArtifacts(html)).replace(
    /<h[1-6]\b[\s\S]*?<\/h[1-6]>|<p\b[\s\S]*?<\/p>/gi,
    (node) => {
      if (/^<h[1-6]\b/i.test(node)) {
        paragraphFingerprints = new Set();
        return node;
      }

      const fingerprint = stripCmsBodyTags(node);
      if (fingerprint && paragraphFingerprints.has(fingerprint)) return "";
      if (fingerprint) paragraphFingerprints.add(fingerprint);
      return node;
    }
  );
}

// CMS breadcrumb trail (content.breadcrumbs / page.breadcrumbs) for server-side
// rendering — mirrors FactoryCmsDomSync's cmsBreadcrumbs() client-side mapping so
// the hardcoded BreadcrumbNav items don't flash before the client sync replaces them.
export function getCmsBreadcrumbs(page) {
  const crumbs = page?.content?.breadcrumbs || page?.breadcrumbs;
  if (!Array.isArray(crumbs)) return [];

  const items = crumbs
    .map((item) => ({
      label: String(item?.label || item?.text || item?.name || "").replace(/<[^>]*>/g, "").trim(),
      href: item?.href || item?.link || item?.url || "",
    }))
    .filter((item) => item.label);

  // The current page is never a link — matches appendBreadcrumbCrumb's isLast
  // check in FactoryCmsDomSync and every hardcoded breadcrumbItems array, which
  // omit href on the last entry.
  if (items.length) items[items.length - 1] = { label: items[items.length - 1].label };

  return items;
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

// CRM list endpoint (preferred) — probe all candidate paths in parallel (list API often 404).
async function fetchCmsLandingPagesList() {
  const paths = [
    `/api/public/factorylicence/published-landing-pages?website=factorylicence.in`,
    `/api/public/factorylicence/landing-pages/list?website=factorylicence.in`,
    `/api/public/factorylicence/landing-pages?website=factorylicence.in&status=published`,
  ];

  const results = await Promise.all(
    paths.map((path) => fetchCmsPayload(path, { revalidate: MARQUEE_REVALIDATE_SECONDS }))
  );

  for (const data of results) {
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
  const batches = await Promise.all(
    MARQUEE_LIST_STATIC_KEYS.map((pageKey) => fetchMarqueeServicesFromStaticPage(pageKey))
  );
  return batches.flat();
}

// Pull connectedServices / internal links from a landing page without blocking BFS on one slug.
async function harvestMarqueeLinksFromLanding(slug) {
  const page = await fetchCms(`/api/public/factorylicence/landing-pages/${slug}`, {
    revalidate: MARQUEE_REVALIDATE_SECONDS,
  });
  return extractLinkedSlugsFromCmsPage(page || {});
}

// Walk CMS links from static + landing pages to discover CMS-only service pages.
async function discoverMarqueeServicesViaGraph(staticMarqueeItems = []) {
  const found = new Map();
  const visited = new Set();
  const queue = [];

  const envSeeds = String(process.env.CMS_MARQUEE_SEED_SLUGS || "")
    .split(",")
    .map((slug) => slug.trim())
    .filter(Boolean);

  const discoverySeeds =
    envSeeds.length > 0 ? envSeeds : DEFAULT_MARQUEE_DISCOVERY_SEEDS;

  // Phase 1 — harvest seed slugs in parallel (was 15+ sequential CRM round-trips).
  const seedHarvests = await Promise.all([
    ...MARQUEE_STATIC_PAGE_KEYS.map(async (pageKey) => {
      const page = await getFactoryCmsStaticPage(pageKey);
      const content = page?.content || page?.sections || {};
      return extractMarqueeSeedsFromStaticContent(content);
    }),
    // Static state landings are excluded from marquee output — only harvest their outbound links.
    ...[...STATIC_LANDING_SLUGS].map((slug) => harvestMarqueeLinksFromLanding(slug)),
  ]);

  for (const slugs of seedHarvests) {
    for (const slug of slugs) enqueueMarqueeSlug(queue, slug);
  }

  discoverySeeds.forEach((slug) => enqueueMarqueeSlug(queue, slug));
  for (const item of staticMarqueeItems) enqueueMarqueeSlug(queue, item.slug);

  // Phase 2 — BFS in parallel batches instead of one slug per round-trip.
  while (queue.length) {
    const batch = [];
    while (batch.length < MARQUEE_BFS_BATCH_SIZE && queue.length) {
      const slug = queue.shift();
      if (!slug || visited.has(slug)) continue;
      visited.add(slug);
      batch.push(slug);
    }
    if (!batch.length) break;

    const pages = await Promise.all(
      batch.map((slug) =>
        fetchCms(`/api/public/factorylicence/landing-pages/${slug}`, {
          revalidate: MARQUEE_REVALIDATE_SECONDS,
        })
      )
    );

    for (let i = 0; i < batch.length; i++) {
      const slug = batch[i];
      const page = pages[i];
      if (!isPublishedCmsLandingPage(page)) continue;

      if (!STATIC_LANDING_SLUGS.has(slug)) {
        found.set(slug, toMarqueeItem(slug, marqueeTitleFromPage(page)));
      }

      for (const nextSlug of extractLinkedSlugsFromCmsPage(page)) {
        enqueueMarqueeSlug(queue, nextSlug);
      }
    }
  }

  return Array.from(found.values());
}

// New CMS service pages for the footer marquee (excludes the 9 static state landing routes).
export const getCmsMarqueeServices = cache(async () => {
  const items = new Map();

  const [list, staticItems] = await Promise.all([
    fetchCmsLandingPagesList(),
    fetchMarqueeServicesFromStaticPages(),
  ]);

  if (list) {
    for (const page of list) {
      if (!page?.slug || STATIC_LANDING_SLUGS.has(page.slug)) continue;
      if (!isPublishedCmsLandingPage(page)) continue;
      items.set(page.slug, toMarqueeItem(page.slug, marqueeTitleFromPage(page)));
    }
  }

  for (const item of staticItems) {
    if (!STATIC_LANDING_SLUGS.has(item.slug)) items.set(item.slug, item);
  }

  for (const item of await discoverMarqueeServicesViaGraph(staticItems)) {
    if (!STATIC_LANDING_SLUGS.has(item.slug)) items.set(item.slug, item);
  }

  return Array.from(items.values()).sort((a, b) => a.title.localeCompare(b.title));
});
