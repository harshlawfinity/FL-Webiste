// app/factory-licence-in-delhi/page.jsx

import FireNOCUPPage from "@/components/pages/FireNOCUPPage";
import FactoryCmsDomSync from "@/components/cms/FactoryCmsDomSync";
import { buildLandingPageMetadata, getFactoryCmsLandingPage } from "@/lib/cms";

export const dynamic = "force-dynamic";

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
  return buildLandingPageMetadata("fire-noc-in-uttar-pradesh", fallbackMetadata);
}

export default async function Page() {
  const cmsPage = await getFactoryCmsLandingPage("fire-noc-in-uttar-pradesh");
  return (
    <>
      <FireNOCUPPage />
      <FactoryCmsDomSync page={cmsPage} />
    </>
  );
}
