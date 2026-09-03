import FactoryLicenceHaryanaPage from "@/components/pages/FactoryLicenceHaryanaPage";
import { CmsLandingBoundary } from "@/components/cms/FactoryCmsJsonLd";
import { buildLandingPageMetadata, getFactoryCmsLandingPage } from "@/lib/cms";

const LANDING_SLUG = "factory-licence-in-haryana";

// ISR: cache rendered page for 5 minutes instead of blocking on CMS every request.
export const revalidate = 300;

const fallbackMetadata = {
  title: "Factory License in Haryana – Online Apply, Fees & Registration",
  description:
    "Get factory license Haryana with online registration support. Apply factory license in Haryana, check factory licence fees in Haryana & expert factory licence Haryana help..",
  keywords: [
    "factory license haryana",
    "factory license in haryana",
    "factory license in haryana",
    "factory licence fees in haryana",
    "factory licence haryana",
  ],
  openGraph: {
    title: "Factory License in Haryana – Online Apply, Fees & Registration",
    description:
      "Get factory license Haryana with online registration support. Apply factory license in Haryana, check factory licence fees in Haryana & expert factory licence Haryana help..",
    url: "https://factorylicence.in/factory-licence-in-haryana",
    type: "website",
    siteName: "FactoryLicence.in",
    images: [
      {
        url: "https://factorylicence.in/assets/factory-license-haryana-og.jpg",
        width: 1200,
        height: 630,
        alt: "Factory Licence in Haryana",
      },
    ],
  },
  alternates: {
    canonical: "https://factorylicence.in/factory-licence-in-haryana",
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
      <FactoryLicenceHaryanaPage page={page} />
      <CmsLandingBoundary slug={LANDING_SLUG} />
    </>
  );
}
