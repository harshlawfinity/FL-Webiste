// app/factory-licence-in-delhi/page.jsx

import PollutionNOCDelhiPage from "@/components/pages/PollutionNOCDelhiPage";
import { CmsLandingBoundary } from "@/components/cms/FactoryCmsJsonLd";
import { buildLandingPageMetadata, getFactoryCmsLandingPage } from "@/lib/cms";

const LANDING_SLUG = "pollution-noc-in-delhi";

// ISR: cache rendered page for 5 minutes instead of blocking on CMS every request.
export const revalidate = 300;

const fallbackMetadata = {
  title: "Pollution NOC in Delhi – Waste Authorization & License Online",
  description:
    "Get Pollution NOC in Delhi with Bio Medical Waste Authorization in Delhi, Hazardous Waste Management",
  keywords: [
    "pollution noc in delhi",
    "bio medical waste authorization",
    "Bio Medical Waste Authorization in delhi",
  ],
  openGraph: {
    title: "Pollution NOC in Delhi – Waste Authorization & License Online",
    description:
      "Get Pollution NOC in Delhi with Bio Medical Waste Authorization in Delhi, Hazardous Waste Management",
    url: "https://factorylicence.in/pollution-noc-in-delhi",
    type: "website",
    siteName: "FactoryLicence.in",
  },
  alternates: {
    canonical: "https://factorylicence.in/pollution-noc-in-delhi",
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
      <PollutionNOCDelhiPage page={page} />
      <CmsLandingBoundary slug={LANDING_SLUG} />
    </>
  );
}
