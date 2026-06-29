import PrivacyPolicyPage from "@/components/pages/PrivacyPolicyPage";
import FactoryCmsStaticPage from "@/components/cms/FactoryCmsStaticPage";
import { buildCmsMetadata, getFactoryCmsStaticPage } from "@/lib/cms";
import { Suspense } from "react";

// ISR: cache rendered page for 5 minutes instead of blocking on CMS every request.
export const revalidate = 300;

const fallbackMetadata = {
  title: "Privacy Policy – Factorylicence",
  description:
    "Learn about our privacy policy at Factorylicence.in. We are committed to protecting your personal information and ensuring your privacy while using our services.",
  keywords: ["Privacy Policy"],
  openGraph: {
    title: "Privacy Policy – Factorylicence",
    description:
      "Learn about our privacy policy at Factorylicence.in. We are committed to protecting your personal information and ensuring your privacy while using our services.",
    url: "https://factorylicence.in/privacy-policy",
    type: "website",
    siteName: "FactoryLicence.in",
  },
  alternates: {
    canonical: "https://factorylicence.in/privacy-policy",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export async function generateMetadata() {
  const cmsPage = await getFactoryCmsStaticPage("privacy-policy");
  return buildCmsMetadata(cmsPage, fallbackMetadata);
}

export default function Page() {
  return (
    <Suspense fallback={<PrivacyPolicyPage />}>
      <PrivacyCmsContent />
    </Suspense>
  );
}

async function PrivacyCmsContent() {
  const cmsPage = await getFactoryCmsStaticPage("privacy-policy");

  if (cmsPage) {
    return <FactoryCmsStaticPage page={cmsPage} fallbackTitle="Privacy Policy" />;
  }

  return <PrivacyPolicyPage />;
}
