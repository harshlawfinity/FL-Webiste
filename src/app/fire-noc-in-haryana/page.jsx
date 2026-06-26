// app/factory-licence-in-delhi/page.jsx

import FireNOCHaryanaPage from "@/components/pages/FireNOCHaryanaPage";
import FactoryCmsDomSync from "@/components/cms/FactoryCmsDomSync";
import FactoryCmsJsonLd from "@/components/cms/FactoryCmsJsonLd";
import { buildLandingPageMetadata, getFactoryCmsLandingPage } from "@/lib/cms";

export const dynamic = "force-dynamic";

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
  return buildLandingPageMetadata("fire-noc-in-haryana", fallbackMetadata);
}

export default async function Page() {
  const cmsPage = await getFactoryCmsLandingPage("fire-noc-in-haryana");
  return (
    <>
      <FactoryCmsJsonLd page={cmsPage} />
      <FireNOCHaryanaPage />
      <FactoryCmsDomSync page={cmsPage} />
    </>
  );
}
