import FactoryLicenceUttarPradeshPage from "@/components/pages/FactoryLicenceUttarPradeshPage";
import FactoryCmsDomSync from "@/components/cms/FactoryCmsDomSync";
import { getFactoryCmsLandingPage } from "@/lib/cms";

export const metadata = {
  title: "Factory Licence in Uttar Pradesh – Online Renewal & Apply",
  description:
    "Factory License in Uttar Pradesh - Renew your factory licence online in Uttar Pradesh with ease. Learn about the process, requirements, and how to complete your factory licence renewal in Uttar Pradesh quickly and efficiently.",
  keywords: [
    "factory licence renewal online uttar pradesh",
    "factory licence in uttar pradesh",
  ],
  openGraph: {
    title: "Factory Licence in Uttar Pradesh – Online Renewal & Apply",
    description:
      "Factory License in Uttar Pradesh - Renew your factory licence online in Uttar Pradesh with ease. Learn about the process, requirements, and how to complete your factory licence renewal in Uttar Pradesh quickly and efficiently.",
    url: "https://factorylicence.in/factory-licence-in-uttar-pradesh",
    type: "website",
    siteName: "FactoryLicence.in",
    images: [
      {
        url: "https://factorylicence.in/assets/factory-license-up-og.jpg",
        width: 1200,
        height: 630,
        alt: "Factory Licence in Uttar Pradesh",
      },
    ],
  },
  alternates: {
    canonical: "https://factorylicence.in/factory-licence-in-uttar-pradesh",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default async function Page() {
  const cmsPage = await getFactoryCmsLandingPage("factory-licence-in-uttar-pradesh");
  return (
    <>
      <FactoryLicenceUttarPradeshPage />
      <FactoryCmsDomSync page={cmsPage} />
    </>
  );
}
