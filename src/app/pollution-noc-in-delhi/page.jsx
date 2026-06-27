// app/factory-licence-in-delhi/page.jsx

import PollutionNOCDelhiPage from "@/components/pages/PollutionNOCDelhiPage";
import FactoryCmsDomSync from "@/components/cms/FactoryCmsDomSync";
import FactoryCmsJsonLd from "@/components/cms/FactoryCmsJsonLd";
import { buildLandingPageMetadata, getFactoryCmsLandingPage } from "@/lib/cms";

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
  return buildLandingPageMetadata("pollution-noc-in-delhi", fallbackMetadata);
}

export default async function Page() {
  const cmsPage = await getFactoryCmsLandingPage("pollution-noc-in-delhi");
  return (
    <>
      <FactoryCmsJsonLd page={cmsPage} />
      <PollutionNOCDelhiPage />
      <FactoryCmsDomSync page={cmsPage} />
    </>
  );
}
