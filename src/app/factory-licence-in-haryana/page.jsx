import FactoryLicenceHaryanaPage from "@/components/pages/FactoryLicenceHaryanaPage";
import FactoryCmsDomSync from "@/components/cms/FactoryCmsDomSync";
import FactoryCmsJsonLd from "@/components/cms/FactoryCmsJsonLd";
import { buildLandingPageMetadata, getFactoryCmsLandingPage } from "@/lib/cms";

export const dynamic = "force-dynamic";

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
  return buildLandingPageMetadata("factory-licence-in-haryana", fallbackMetadata);
}

export default async function Page() {
  const cmsPage = await getFactoryCmsLandingPage("factory-licence-in-haryana");
  return (
    <>
      <FactoryCmsJsonLd page={cmsPage} />
      <FactoryLicenceHaryanaPage />
      <FactoryCmsDomSync page={cmsPage} />
    </>
  );
}
