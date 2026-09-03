import FactoryLicenceDelhiPage from "@/components/pages/FactoryLicenceDelhiPage";
import { CmsLandingBoundary } from "@/components/cms/FactoryCmsJsonLd";
import { buildLandingPageMetadata, getFactoryCmsLandingPage } from "@/lib/cms";

const LANDING_SLUG = "factory-licence-in-delhi";

// ISR: cache rendered page for 5 minutes instead of blocking on CMS every request.
export const revalidate = 300;

const fallbackMetadata = {
  title: "Factory Licence in Delhi – Online Application, Fees & Renewal",
  description:
    "Get factory licence in Delhi with online application support. Check factory licence fees in Delhi, Delhi factory license renewal online & NDMC renewal process help.",
  keywords: [
    "factory licence in delhi",
    "factory license in delhi",
    "delhi factory license",
    "factory licence fees in delhi",
    "north delhi municipal corporation factory licence renewal online",
    "Factory Licence Renewal in Delhi",
    "factory licence online application in delhi",
  ],
  openGraph: {
    title: "Factory Licence in Delhi – Online Application, Fees & Renewal",
    description:
      "Get factory licence in Delhi with online application support. Check factory licence fees in Delhi, Delhi factory license renewal online & NDMC renewal process help.",
    url: "https://factorylicence.in/factory-licence-in-delhi",
    type: "website",
    siteName: "FactoryLicence.in",
    images: [
      {
        url: "https://factorylicence.in/assets/factory-license-delhi-og.jpg",
        width: 1200,
        height: 630,
        alt: "Factory Licence in Delhi",
      },
    ],
  },
  alternates: {
    canonical: "https://factorylicence.in/factory-licence-in-delhi",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export async function generateMetadata() {
  return buildLandingPageMetadata(LANDING_SLUG, fallbackMetadata);
}

export default async function Page() {
  // Server-rendered so the CMS body ships in the initial HTML — avoids the
  // hardcoded-then-CMS-content flash that the old client-only DOM sync caused.
  const page = await getFactoryCmsLandingPage(LANDING_SLUG);

  return (
    <>
      <FactoryLicenceDelhiPage page={page} />
      <CmsLandingBoundary slug={LANDING_SLUG} />
    </>
  );
}
