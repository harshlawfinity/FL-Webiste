import { notFound } from "next/navigation";
import CmsDynamicLandingPage from "@/components/pages/CmsDynamicLandingPage";
import { CmsLandingBoundary } from "@/components/cms/FactoryCmsJsonLd";
import { buildCmsMetadata, getFactoryCmsLandingPage } from "@/lib/cms";

export const revalidate = 300;

// CMS-published landing pages that are not covered by a dedicated /app/<slug>/ route.
function isPublishedCmsLandingPage(page) {
  if (!page?.slug) return false;

  const status = String(page.status || "published").toLowerCase();
  if (!["published", "publish", "active"].includes(status)) return false;

  if (page.website && page.website !== "factorylicence.in") return false;

  return true;
}

function landingFallbackMetadata(slug) {
  return {
    alternates: {
      canonical: `https://factorylicence.in/${slug}`,
    },
    openGraph: {
      url: `https://factorylicence.in/${slug}`,
      type: "website",
      siteName: "FactoryLicence.in",
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const page = await getFactoryCmsLandingPage(slug);

  if (!isPublishedCmsLandingPage(page)) {
    return { title: "Page Not Found", robots: { index: false, follow: false } };
  }

  return buildCmsMetadata(page, landingFallbackMetadata(slug));
}

export default async function CmsLandingSlugPage({ params }) {
  const { slug } = await params;
  const page = await getFactoryCmsLandingPage(slug);

  if (!isPublishedCmsLandingPage(page)) {
    notFound();
  }

  return (
    <>
      <CmsDynamicLandingPage page={page} />
      <CmsLandingBoundary slug={slug} />
    </>
  );
}
