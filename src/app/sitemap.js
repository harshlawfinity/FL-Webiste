import nextConfig from "../../next.config.mjs";
import { getCmsMarqueeServices } from "@/lib/cms";

const API_BASE = "https://internal.lawfinity.in";
const BASE_URL = "https://factorylicence.in";

export const dynamic = "force-dynamic";
export const revalidate = 0;

function normalizePath(value) {
  let path = String(value || "").trim();
  if (!path) return "";

  try {
    if (/^https?:\/\//i.test(path)) {
      path = new URL(path).pathname;
    }
  } catch {
    return "";
  }

  path = path.split("?")[0].split("#")[0];
  if (!path.startsWith("/")) path = `/${path}`;
  return path.length > 1 ? path.replace(/\/+$/, "") : path;
}

function normalizeSlug(value) {
  return normalizePath(value).replace(/^\/?blogs\//, "").replace(/^\/+/, "");
}

function isTruthyFlag(value) {
  if (value === true || value === 1) return true;
  if (typeof value === "string") {
    return ["true", "1", "yes", "y"].includes(value.trim().toLowerCase());
  }
  return false;
}

function robotsIncludes(value, directive) {
  return String(value || "")
    .toLowerCase()
    .split(/[,\s]+/)
    .includes(directive);
}

function seoBlocksSitemap(seo = {}) {
  return (
    isTruthyFlag(seo.noIndex) ||
    isTruthyFlag(seo.noFollow) ||
    robotsIncludes(seo.robots, "noindex") ||
    robotsIncludes(seo.robots, "nofollow")
  );
}

function blogBlocksSitemap(blog) {
  const status = String(blog?.status || "visible").toLowerCase();
  const robots = blog?.robots || blog?.seo?.robots || "";

  return (
    !blog?.urlSlug ||
    !["visible", "published", "publish", "active"].includes(status) ||
    isTruthyFlag(blog.noIndex) ||
    isTruthyFlag(blog.noFollow) ||
    isTruthyFlag(blog?.seo?.noIndex) ||
    isTruthyFlag(blog?.seo?.noFollow) ||
    robotsIncludes(robots, "noindex") ||
    robotsIncludes(robots, "nofollow")
  );
}

async function safeFetchJson(url) {
  try {
    const res = await fetch(url, { cache: "no-store" });
    if (!res.ok) return null;

    const contentType = res.headers.get("content-type") || "";
    if (!contentType.includes("application/json")) return null;

    return await res.json();
  } catch (error) {
    console.error("Error fetching sitemap data:", error);
    return null;
  }
}

function getBlogsFromResponse(data) {
  if (Array.isArray(data)) return data;
  if (Array.isArray(data?.blogs)) return data.blogs;
  if (Array.isArray(data?.data)) return data.data;
  return [];
}

async function fetchAllBlogs() {
  const pageSize = 100;
  const firstPageData = await safeFetchJson(
    `${API_BASE}/api/public/published-fl?page=1&limit=${pageSize}`
  );
  if (!firstPageData) return [];

  const firstPageBlogs = getBlogsFromResponse(firstPageData);
  const total = firstPageData.total || firstPageBlogs.length;
  const allBlogs = [...firstPageBlogs];
  const totalPages = Math.ceil(Math.min(total, 1000) / pageSize);

  if (totalPages > 1) {
    const pageRequests = [];
    for (let page = 2; page <= totalPages; page += 1) {
      pageRequests.push(
        safeFetchJson(`${API_BASE}/api/public/published-fl?page=${page}&limit=${pageSize}`)
      );
    }

    const pages = await Promise.all(pageRequests);
    pages.forEach((pageData) => {
      allBlogs.push(...getBlogsFromResponse(pageData));
    });
  }

  return allBlogs;
}

async function fetchFactoryCmsPage(type, key) {
  const endpoint =
    type === "landing"
      ? `/api/public/factorylicence/landing-pages/${key}`
      : `/api/public/factorylicence/static-pages/${key}`;
  const data = await safeFetchJson(`${API_BASE}${endpoint}`);
  return data?.success ? data.page : null;
}

async function getRedirectSourcePaths() {
  try {
    const redirects = await nextConfig.redirects?.();
    if (!Array.isArray(redirects)) return new Set();

    return new Set(
      redirects
        .filter((redirect) => redirect?.statusCode === 301 || redirect?.permanent === true)
        .map((redirect) => normalizePath(redirect.source))
        .filter(Boolean)
    );
  } catch (error) {
    console.error("Error loading redirect sources for sitemap:", error);
    return new Set();
  }
}

function toSitemapEntry(path, options = {}) {
  return {
    url: `${BASE_URL}${path === "/" ? "" : path}`,
    lastModified: options.lastModified || new Date(),
    changeFrequency: options.changeFrequency || "monthly",
    priority: options.priority ?? 0.7,
    cms: options.cms,
  };
}

function withoutInternalFields(route) {
  const { cms, ...publicRoute } = route;
  return publicRoute;
}

async function filterIndexableRoutes(routes, redirectSourcePaths) {
  const uniqueRoutes = new Map();

  for (const route of routes) {
    const path = normalizePath(route.url.replace(BASE_URL, "") || "/");
    if (!path || redirectSourcePaths.has(path)) continue;

    let cmsPage = null;
    if (route.cms) {
      cmsPage = await fetchFactoryCmsPage(route.cms.type, route.cms.key);
    }

    if (seoBlocksSitemap(cmsPage?.seo)) continue;
    uniqueRoutes.set(route.url, withoutInternalFields(route));
  }

  return Array.from(uniqueRoutes.values());
}

export default async function sitemap() {
  const redirectSourcePaths = await getRedirectSourcePaths();

  const staticRoutes = [
    toSitemapEntry("/", {
      changeFrequency: "daily",
      priority: 1,
      cms: { type: "static", key: "home" },
    }),
    toSitemapEntry("/about", {
      priority: 0.8,
      cms: { type: "static", key: "about" },
    }),
    toSitemapEntry("/contact", {
      priority: 0.8,
      cms: { type: "static", key: "contact" },
    }),
    toSitemapEntry("/blogs", {
      changeFrequency: "daily",
      priority: 0.9,
      cms: { type: "static", key: "blogs" },
    }),
    toSitemapEntry("/privacy-policy", {
      changeFrequency: "yearly",
      priority: 0.3,
      cms: { type: "static", key: "privacy-policy" },
    }),
    toSitemapEntry("/terms-conditions", {
      changeFrequency: "yearly",
      priority: 0.3,
      cms: { type: "static", key: "terms-conditions" },
    }),
    toSitemapEntry("/refund-cancellation", {
      changeFrequency: "yearly",
      priority: 0.3,
      cms: { type: "static", key: "refund-cancellation" },
    }),
    toSitemapEntry("/payments", {
      priority: 0.5,
      cms: { type: "static", key: "payments" },
    }),
  ];

  const serviceRoutes = [
    "/factory-licence-in-delhi",
    "/factory-licence-in-haryana",
    "/factory-licence-in-uttar-pradesh",
    "/fire-noc-in-delhi",
    "/fire-noc-in-haryana",
    "/fire-noc-in-uttar-pradesh",
    "/pollution-noc-in-delhi",
    "/pollution-noc-in-haryana",
    "/pollution-noc-in-uttar-pradesh",
  ].map((path) =>
    toSitemapEntry(path, {
      priority: 0.9,
      cms: { type: "landing", key: path.replace(/^\//, "") },
    })
  );

  // CMS-only landing pages (e.g. hazardous-waste-registration) — index/follow checked below.
  let dynamicLandingRoutes = [];
  try {
    const dynamicPages = await getCmsMarqueeServices();
    dynamicLandingRoutes = dynamicPages.map((page) =>
      toSitemapEntry(page.href, {
        priority: 0.9,
        cms: { type: "landing", key: page.slug },
      })
    );
  } catch (error) {
    console.error("Error fetching dynamic CMS landing routes for sitemap:", error);
  }

  let blogRoutes = [];
  try {
    const blogs = await fetchAllBlogs();
    blogRoutes = blogs
      .filter((blog) => {
        const path = normalizePath(`/blogs/${normalizeSlug(blog?.urlSlug)}`);
        return !blogBlocksSitemap(blog) && !redirectSourcePaths.has(path);
      })
      .map((blog) =>
        toSitemapEntry(`/blogs/${normalizeSlug(blog.urlSlug)}`, {
          lastModified: blog.updatedAt
            ? new Date(blog.updatedAt)
            : new Date(blog.createdAt || Date.now()),
          changeFrequency: "weekly",
          priority: 0.7,
        })
      );
  } catch (error) {
    console.error("Error fetching blog routes for sitemap:", error);
  }

  return filterIndexableRoutes(
    [...staticRoutes, ...serviceRoutes, ...dynamicLandingRoutes, ...blogRoutes],
    redirectSourcePaths
  );
}
