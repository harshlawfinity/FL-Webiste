import AboutPage from "@/components/pages/AboutPage";
import FactoryCmsDomSync from "@/components/cms/FactoryCmsDomSync";
import { getFactoryCmsStaticPage } from "@/lib/cms";

export const metadata = {
  title: "About US - Factorylicence",
  description:
    "Factorylicence.in is your most trusted partner for all the services spanning from factory setup to factory management.",
  keywords: ["About US"],
  openGraph: {
    title: "About US - Factorylicence",
    description:
      "Factorylicence.in is your most trusted partner for all the services spanning from factory setup to factory management.",
    url: "https://factorylicence.in/about",
    type: "website",
    siteName: "FactoryLicence.in",
    images: [
      {
        url: "https://factorylicence.in/assets/about-lawfinity-og.jpg",
        width: 1200,
        height: 630,
        alt: "About US - Factorylicence",
      },
    ],
  },
  alternates: {
    canonical: "https://factorylicence.in/about",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default async function Page() {
  const cmsPage = await getFactoryCmsStaticPage("about");
  return (
    <>
      <AboutPage />
      <FactoryCmsDomSync page={cmsPage} />
    </>
  );
}
