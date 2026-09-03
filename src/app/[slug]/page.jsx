import { notFound } from "next/navigation";
import CmsDynamicLandingPage from "@/components/pages/CmsDynamicLandingPage";
import { CmsLandingBoundary } from "@/components/cms/FactoryCmsJsonLd";
import { buildCmsMetadata, getFactoryCmsLandingPageLive, isPublishedCmsLandingPage } from "@/lib/cms";

// Always resolve CMS slug from CRM on request — avoids stale 404 after SEO publishes.
export const dynamic = "force-dynamic";

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
  const page = await getFactoryCmsLandingPageLive(slug);

  if (!isPublishedCmsLandingPage(page)) {
    return { title: "Page Not Found", robots: { index: false, follow: false } };
  }

  return buildCmsMetadata(page, landingFallbackMetadata(slug));
}

export default async function CmsLandingSlugPage({ params }) {
  const { slug } = await params;
  const page = await getFactoryCmsLandingPageLive(slug);

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
