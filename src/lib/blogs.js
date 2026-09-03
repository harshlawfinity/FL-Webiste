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

// <meta name="robots"> directive for a single blog page — honors the CRM's
// noIndex/noFollow flags (or a raw robots string), mirroring the same check
// isSearchablePublishedBlog below already uses to filter the blog list/related posts.
export function getBlogRobots(blog) {
  const robotsText = String(blog?.robots || "").toLowerCase();
  return {
    index: !(blog?.noIndex || robotsText.includes("noindex")),
    follow: !(blog?.noFollow || robotsText.includes("nofollow")),
  };
}

export const fetchPublishedBlogs = cache(async () => {
  const res = await fetch(`${API_BASE}/api/public/published-fl?limit=1000`, {
    cache: "no-store",
  });

  if (!res.ok) return null;

  const data = await res.json();
  return Array.isArray(data?.blogs) ? data.blogs : [];
});

// CRM stores blogs for multiple websites in one shared database. The single-blog-by-slug
// endpoint below is not site-scoped (unlike published-fl), so we must verify ownership
// ourselves before rendering a blog on this site.
const SITE_WEBSITE_NAME = "Factory Licence";

function belongsToThisSite(blog) {
  return String(blog?.websiteName || "").toLowerCase() === SITE_WEBSITE_NAME.toLowerCase();
}

const RELATED_BLOG_LIMIT = 3;
const BLOG_HIDDEN_STATUSES = new Set(["draft", "hidden", "archived", "deleted", "inactive", "pending"]);
const STOP_WORDS = new Set([
  "and",
  "the",
  "for",
  "with",
  "from",
  "your",
  "you",
  "our",
  "are",
  "this",
  "that",
  "into",
  "about",
  "page",
  "service",
  "services",
  "online",
  "apply",
  "process",
  "guide",
  "complete",
  "latest",
  "new",
  "in",
]);
const SERVICE_GROUPS = [
  {
    key: "factory",
    terms: ["factory licence", "factory license", "factory registration", "mcd factory", "manufacturing"],
  },
  {
    key: "fire",
    terms: ["fire noc", "fire safety", "fire certificate", "dfs", "fire"],
  },
  {
    key: "pollution",
    terms: ["pollution noc", "pollution certificate", "pollution control", "cte", "cto", "pcb"],
  },
];
const LOCATION_TERMS = [
  "delhi",
  "haryana",
  "uttar pradesh",
  "up",
  "noida",
  "ghaziabad",
  "meerut",
  "rewari",
  "sonipat",
];

function plainText(value) {
  if (Array.isArray(value)) return value.map(plainText).join(" ");
  if (value && typeof value === "object") return Object.values(value).map(plainText).join(" ");

  return String(value || "")
    .replace(/<[^>]*>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function firstPresent(...values) {
  return values.map(plainText).find(Boolean) || "";
}

function truncateText(value, maxLength = 150) {
  const text = plainText(value);
  if (text.length <= maxLength) return text;

  const trimmed = text.slice(0, maxLength).trim();
  const lastSpace = trimmed.lastIndexOf(" ");
  return `${trimmed.slice(0, lastSpace > 80 ? lastSpace : trimmed.length)}...`;
}

function normalizeBlogSlug(blog) {
  return String(blog?.urlSlug || blog?.slug || "")
    .replace(/^\/?blogs\//, "")
    .replace(/^\/+/, "")
    .replace(/\/+$/, "");
}

function slugToTitle(slug) {
  return String(slug || "")
    .split("-")
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

function tokenize(value) {
  return plainText(value)
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, " ")
    .split(/\s+/)
    .filter((word) => word.length > 2 && !STOP_WORDS.has(word));
}

function findMatchingGroups(value) {
  const text = plainText(value).toLowerCase();
  return SERVICE_GROUPS.filter((group) => group.terms.some((term) => text.includes(term))).map(
    (group) => group.key
  );
}

function findLocations(value) {
  const text = plainText(value).toLowerCase();
  return LOCATION_TERMS.filter((term) => text.includes(term));
}

function getBlogSearchText(blog) {
  return plainText([
    normalizeBlogSlug(blog),
    blog?.title,
    blog?.metaTitle,
    blog?.category,
    blog?.excerpt,
    blog?.metaDescription,
    blog?.description,
    blog?.tags,
    blog?.keywords,
  ]);
}

function getPageSearchText(page, slug) {
  return plainText([
    slug,
    page?.title,
    page?.mainHeading,
    page?.heading,
    page?.metaTitle,
    page?.metaDescription,
    page?.description,
    page?.serviceCategory,
    page?.category,
    page?.keywords,
    page?.tags,
    page?.seo?.title,
    page?.seo?.description,
    page?.content?.title,
    page?.content?.heading,
    page?.content?.description,
    page?.content?.hero?.headline,
    page?.content?.hero?.subtext,
    page?.sections?.hero?.title,
    page?.sections?.hero?.description,
  ]);
}

function isSearchablePublishedBlog(blog) {
  const slug = normalizeBlogSlug(blog);
  if (!slug) return false;

  const status = String(blog?.status || "").toLowerCase();
  if (BLOG_HIDDEN_STATUSES.has(status)) return false;
  if (blog?.noIndex || blog?.noFollow) return false;

  const robots = String(blog?.robots || "").toLowerCase();
  return !robots.includes("noindex") && !robots.includes("nofollow");
}

function buildRelatedBlogContext(page, slug) {
  const text = getPageSearchText(page, slug);
  return {
    tokens: [...new Set(tokenize(text))],
    groups: findMatchingGroups(text),
    locations: findLocations(text),
  };
}

function scoreRelatedBlog(blog, context) {
  const searchText = getBlogSearchText(blog).toLowerCase();
  const titleText = plainText([normalizeBlogSlug(blog), blog?.title, blog?.metaTitle]).toLowerCase();
  let score = 0;

  context.groups.forEach((group) => {
    const terms = SERVICE_GROUPS.find((item) => item.key === group)?.terms || [];
    if (terms.some((term) => searchText.includes(term))) score += 20;
  });
  context.locations.forEach((location) => {
    if (searchText.includes(location)) score += 10;
  });
  context.tokens.forEach((token) => {
    if (titleText.includes(token)) score += 2;
    else if (searchText.includes(token)) score += 1;
  });

  return score;
}

function getBlogDateValue(blog) {
  return Date.parse(blog?.publishedAt || blog?.updatedAt || blog?.createdAt || "") || 0;
}

function toRelatedBlogCard(blog) {
  const slug = normalizeBlogSlug(blog);
  return {
    slug,
    title: firstPresent(blog?.title, blog?.metaTitle, slugToTitle(slug)),
    excerpt: truncateText(firstPresent(blog?.excerpt, blog?.metaDescription, blog?.description, blog?.content)),
    category: firstPresent(blog?.category),
    publishedAt: blog?.publishedAt || blog?.updatedAt || blog?.createdAt || null,
  };
}

// Match service-page intent against list-card metadata without fetching every blog body.
export const getRelatedBlogsForServicePage = cache(async (page, slug, limit = RELATED_BLOG_LIMIT) => {
  const blogs = await fetchPublishedBlogs();
  if (!Array.isArray(blogs)) return [];

  const context = buildRelatedBlogContext(page, slug);
  return blogs
    .filter(isSearchablePublishedBlog)
    .map((blog) => ({ blog, score: scoreRelatedBlog(blog, context) }))
    .filter(({ score }) => score > 0)
    .sort((a, b) => b.score - a.score || getBlogDateValue(b.blog) - getBlogDateValue(a.blog))
    .slice(0, limit)
    .map(({ blog }) => toRelatedBlogCard(blog));
});

// Full article payload (blocks + HTML content + schemaMarkup) — list API omits body content.
export const getBlogBySlug = cache(async (slug) => {
  if (!slug) return null;

  try {
    const res = await fetch(`${API_BASE}/api/public/blog/${encodeURIComponent(slug)}`, {
      cache: "no-store",
    });

    if (res.ok) {
      const blog = await res.json();
      // Reject blogs that belong to another website (e.g. Lawfinity) even though the
      // slug matched in the shared CRM database.
      if (blog && !blog.error && belongsToThisSite(blog)) return blog;
    }
  } catch {
    // Fall back to list snapshot below.
  }

  const blogs = await fetchPublishedBlogs();
  if (!blogs) return null;
  return blogs.find((blog) => blog?.urlSlug === slug) || null;
});
