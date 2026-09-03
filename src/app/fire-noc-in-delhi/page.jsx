// app/factory-licence-in-delhi/page.jsx

import FireNOCDelhiPage from "@/components/pages/FireNOCDelhiPage";
import { CmsLandingBoundary } from "@/components/cms/FactoryCmsJsonLd";
import { buildLandingPageMetadata, getFactoryCmsLandingPage } from "@/lib/cms";

const LANDING_SLUG = "fire-noc-in-delhi";

// ISR: cache rendered page for 5 minutes instead of blocking on CMS every request.
export const revalidate = 300;

const fallbackMetadata = {
  title: "Fire NOC in Delhi, Apply & Renew Fire NOC Online in Delhi - Factorylicence",
  description:
    "Fire NOC in Delhi - Apply for Fire NOC in Delhi online with Delhi Fire Service. Check fire NOC requirements, apply for new or renewal Fire NOC in Delhi through a simple online process.",
  keywords: [
    "fire noc delhi",
    "online application for fire noc delhi",
    "fire noc delhi online",
    "fire noc requirement in delhi",
    "fire noc in delhi",
    "apply for fire noc delhi",
    "delhi fire noc renewal online apply",
    "delhi fire service noc",
    "fire noc apply online delhi",
  ],
  alternates: {
    canonical: "https://factorylicence.in/fire-noc-in-delhi",
  },
  openGraph: {
    title: "Fire NOC in Delhi, Apply & Renew Fire NOC Online in Delhi - Factorylicence",
    description:
      "Fire NOC in Delhi - Apply for Fire NOC in Delhi online with Delhi Fire Service. Check fire NOC requirements, apply for new or renewal Fire NOC in Delhi through a simple online process.",
    url: "https://factorylicence.in/fire-noc-in-delhi",
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
      <FireNOCDelhiPage page={page} />
      <CmsLandingBoundary slug={LANDING_SLUG} />
    </>
  );
}
