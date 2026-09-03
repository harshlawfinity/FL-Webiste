// app/factory-licence-in-delhi/page.jsx

import FireNOCUPPage from "@/components/pages/FireNOCUPPage";
import { CmsLandingBoundary } from "@/components/cms/FactoryCmsJsonLd";
import { buildLandingPageMetadata, getFactoryCmsLandingPage } from "@/lib/cms";

const LANDING_SLUG = "fire-noc-in-uttar-pradesh";

// ISR: cache rendered page for 5 minutes instead of blocking on CMS every request.
export const revalidate = 300;

const fallbackMetadata = {
  title: "Fire NOC in Uttar Pradesh, Apply & Renew Fire NOC Online in Uttar Pradesh - Factorylicence",
  description:
    "Fire NOC in Uttar Pradesh - Apply for Fire NOC in Uttar Pradesh online through Uttar Pradesh Fire Service. Get new Fire NOC, download certificate, and complete Fire NOC renewal online easily.",
  keywords: [
    "fire noc uttar pradesh",
    "uttar pradesh fire service noc",
    "fire noc apply online uttar pradesh",
    "fire noc online uttar pradesh",
    "fire noc renewal uttar pradesh",
    "fire noc renewal online in uttar pradesh",
    "online fire noc uttar pradesh",
    "renewal fire noc uttar pradesh",
  ],
  alternates: {
    canonical: "https://factorylicence.in/fire-noc-in-uttar-pradesh",
  },
  openGraph: {
    title: "Fire NOC in Uttar Pradesh, Apply & Renew Fire NOC Online in Uttar Pradesh - Factorylicence",
    description:
      "Fire NOC in Uttar Pradesh - Apply for Fire NOC in Uttar Pradesh online through Uttar Pradesh Fire Service. Get new Fire NOC, download certificate, and complete Fire NOC renewal online easily.",
    url: "https://factorylicence.in/fire-noc-in-uttar-pradesh",
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
      <FireNOCUPPage page={page} />
      <CmsLandingBoundary slug={LANDING_SLUG} />
    </>
  );
}
