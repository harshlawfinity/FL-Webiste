import TermsConditionsPage from "@/components/pages/TermsConditionsPage";
import FactoryCmsStaticPage from "@/components/cms/FactoryCmsStaticPage";
import { buildCmsMetadata, getFactoryCmsStaticPage } from "@/lib/cms";

const fallbackMetadata = {
  title: "Terms & Conditions – Factorylicence",
  description:
    "Review the terms and conditions for using Factorylicence.in services. Understand our agreement, user conduct, and policies governing your use of our website.",
  keywords: ["Terms and Conditions"],
  openGraph: {
    title: "Terms & Conditions – Factorylicence",
    description:
      "Review the terms and conditions for using Factorylicence.in services. Understand our agreement, user conduct, and policies governing your use of our website.",
    url: "https://factorylicence.in/terms-conditions",
    type: "website",
    siteName: "FactoryLicence.in",
  },
  alternates: {
    canonical: "https://factorylicence.in/terms-conditions",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export async function generateMetadata() {
  const cmsPage = await getFactoryCmsStaticPage("terms-conditions");
  return buildCmsMetadata(cmsPage, fallbackMetadata);
}

export default async function Page() {
  const cmsPage = await getFactoryCmsStaticPage("terms-conditions");

  if (cmsPage) {
    return <FactoryCmsStaticPage page={cmsPage} fallbackTitle="Terms & Conditions" />;
  }

  return <TermsConditionsPage />;
}
