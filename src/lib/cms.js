const CMS_BASE_URL =
  process.env.NEXT_PUBLIC_CRM_CMS_BASE_URL ||
  process.env.CRM_CMS_BASE_URL ||
  (process.env.NODE_ENV === "production"
    ? "https://internal.lawfinity.in"
    : "http://localhost:3000");

async function fetchCms(path) {
  try {
    const res = await fetch(`${CMS_BASE_URL}${path}`, {
      cache: "no-store",
    });
    if (!res.ok) return null;
    const data = await res.json();
    return data?.success ? data.page : null;
  } catch (error) {
    const message = String(error?.message || error || "");
    const isDynamicUsage =
      error?.digest === "DYNAMIC_SERVER_USAGE" ||
      message.includes("Dynamic server usage");

    if (!isDynamicUsage) {
      console.error("[factory CMS] fetch failed:", path, error);
    }
    return null;
  }
}

export function getFactoryCmsLandingPage(slug) {
  return fetchCms(`/api/public/factorylicence/landing-pages/${slug}`);
}

export function getFactoryCmsStaticPage(pageKey) {
  return fetchCms(`/api/public/factorylicence/static-pages/${pageKey}`);
}

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
