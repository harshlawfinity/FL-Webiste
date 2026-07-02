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

async function LandingCmsBundle({ slug }) {
  // Single CMS fetch for JSON-LD + DOM sync (deduped with generateMetadata via cache()).
  const page = await getFactoryCmsLandingPage(slug);
  return (
    <>
      <FactoryCmsJsonLd page={page} />
      <FactoryCmsDomSync page={page} landingSlug={slug} />
    </>
  );
}

// Stream CMS schema + sync after landing page shell — avoids blocking hero/LCP on CRM fetch.
export function CmsLandingBoundary({ slug }) {
  return (
    <Suspense fallback={null}>
      <LandingCmsBundle slug={slug} />
    </Suspense>
  );
}

async function StaticCmsSync({ pageKey }) {
  const page = await getFactoryCmsStaticPage(pageKey);
  // Always mount sync — client fetches fresh CRM data even when server snapshot is null/stale.
  return <FactoryCmsDomSync page={page} staticPageKey={pageKey} />;
}

// Stream CMS DOM sync for static pages (home, about, blogs).
export function CmsStaticSyncBoundary({ pageKey }) {
  return (
    <Suspense fallback={null}>
      <StaticCmsSync pageKey={pageKey} />
    </Suspense>
  );
}
