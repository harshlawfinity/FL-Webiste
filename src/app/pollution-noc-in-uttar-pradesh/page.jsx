// app/factory-licence-in-delhi/page.jsx

import PollutionNOCUPPage from "@/components/pages/PollutionNOCUPPage";
import FactoryCmsDomSync from "@/components/cms/FactoryCmsDomSync";
import { getFactoryCmsLandingPage } from "@/lib/cms";

export const metadata = {
  title: "Pollution NOC in Uttar Pradesh – Apply Online & Certificate",
  description:
    "Get pollution noc in uttar pardesh with noc from pollution control board in uttar pardesh, CTO, certificate, documents required & factory waste authorisation.",
  keywords: [
    "pollution noc in uttar pardesh",
    "noc pollution control board in uttar pardesh",
    "pollution noc certificate in uttar pardesh",
    "noc from pollution control board in uttar pardesh",
    "cto pollution control board in uttar pardesh",
    "documents required for pollution noc",
    "pollution noc for factory in uttar pardesh",
  ],
  openGraph: {
    title: "Pollution NOC in Uttar Pradesh – Apply Online & Certificate",
    description:
      "Get pollution noc in uttar pardesh with noc from pollution control board in uttar pardesh, CTO, certificate, documents required & factory waste authorisation.",
    url: "https://factorylicence.in/pollution-noc-in-uttar-pradesh",
    type: "website",
    siteName: "FactoryLicence.in",
  },
  alternates: {
    canonical: "https://factorylicence.in/pollution-noc-in-uttar-pradesh",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default async function Page() {
  const cmsPage = await getFactoryCmsLandingPage("pollution-noc-in-uttar-pradesh");
  return (
    <>
      <PollutionNOCUPPage />
      <FactoryCmsDomSync page={cmsPage} />
    </>
  );
}
