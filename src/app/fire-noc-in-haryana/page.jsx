// app/factory-licence-in-delhi/page.jsx

import FireNOCHaryanaPage from "@/components/pages/FireNOCHaryanaPage";
import { CmsLandingBoundary } from "@/components/cms/FactoryCmsJsonLd";
import { buildLandingPageMetadata, getFactoryCmsLandingPage } from "@/lib/cms";

const LANDING_SLUG = "fire-noc-in-haryana";

// ISR: cache rendered page for 5 minutes instead of blocking on CMS every request.
export const revalidate = 300;

const fallbackMetadata = {
  title: "Fire NOC in Haryana, Apply & Renew Fire NOC Online in Haryana - Factorylicence",
  description:
    "Fire NOC in Haryana - Apply for Fire NOC in Haryana online, download Fire NOC certificate, and manage Fire NOC renewal in Haryana through a simple and secure online process.",
  keywords: [
    "fire noc in haryana",
    "download fire noc certificate haryana",
    "fire noc apply online haryana",
    "fire noc online haryana",
    "fire noc renewal haryana",
    "fire noc renewal haryana online",
    "online fire noc haryana",
    "renewal fire noc haryana",
  ],
  alternates: {
    canonical: "https://factorylicence.in/fire-noc-in-haryana",
  },
  openGraph: {
    title: "Fire NOC in Haryana, Apply & Renew Fire NOC Online in Haryana - Factorylicence",
    description:
      "Fire NOC in Haryana - Apply for Fire NOC in Haryana online, download Fire NOC certificate, and manage Fire NOC renewal in Haryana through a simple and secure online process.",
    url: "https://factorylicence.in/fire-noc-in-haryana",
    type: "website",
    siteName: "FactoryLicence.in",
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
      <FireNOCHaryanaPage page={page} />
      <CmsLandingBoundary slug={LANDING_SLUG} />
    </>
  );
}
