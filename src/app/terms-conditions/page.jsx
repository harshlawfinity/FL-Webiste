import TermsConditionsPage from "@/components/pages/TermsConditionsPage";
import FactoryCmsStaticPage from "@/components/cms/FactoryCmsStaticPage";
import { buildCmsMetadata, getFactoryCmsStaticPageFresh } from "@/lib/cms";
import { Suspense } from "react";

// ISR: cache rendered page for 5 minutes instead of blocking on CMS every request.
export const revalidate = 300;

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
  const cmsPage = await getFactoryCmsStaticPageFresh("terms-conditions");
  return buildCmsMetadata(cmsPage, fallbackMetadata);
}

export default function Page() {
  return (
    <Suspense fallback={<TermsConditionsPage />}>
      <TermsCmsContent />
    </Suspense>
  );
}

async function TermsCmsContent() {
  const cmsPage = await getFactoryCmsStaticPageFresh("terms-conditions");

  if (cmsPage) {
    return <FactoryCmsStaticPage page={cmsPage} fallbackTitle="Terms & Conditions" />;
  }

  return <TermsConditionsPage />;
}
