import { Suspense } from "react";
import { getCmsSchema, getFactoryCmsLandingPage, getFactoryCmsStaticPage } from "@/lib/cms";
import FactoryCmsDomSync from "./FactoryCmsDomSync";

// Renders page-specific JSON-LD from CMS (seo.schema) in the document head.
export default function FactoryCmsJsonLd({ page }) {
  const schema = getCmsSchema(page);
  if (!schema) return null;

  return (
    <script
      id="cms-schema-org"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

async function LandingCmsSync({ slug }) {
  const page = await getFactoryCmsLandingPage(slug);
  return (
    <>
      <FactoryCmsJsonLd page={page} />
      <FactoryCmsDomSync page={page} />
    </>
  );
}

// Stream CMS sync after page shell renders — improves TTFB/LCP on landing pages.
export function CmsLandingBoundary({ slug }) {
  return (
    <Suspense fallback={null}>
      <LandingCmsSync slug={slug} />
    </Suspense>
  );
}

async function StaticCmsSync({ pageKey }) {
  const page = await getFactoryCmsStaticPage(pageKey);
  if (!page) return null;
  return <FactoryCmsDomSync page={page} />;
}

// Stream CMS DOM sync for static pages (home, about, blogs).
export function CmsStaticSyncBoundary({ pageKey }) {
  return (
    <Suspense fallback={null}>
      <StaticCmsSync pageKey={pageKey} />
    </Suspense>
  );
}
