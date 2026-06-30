import ContactPage from "@/components/pages/ContactPage";
import { CmsStaticSyncBoundary } from "@/components/cms/FactoryCmsJsonLd";
import { buildCmsMetadata, getFactoryCmsStaticPageFresh } from "@/lib/cms";

// ISR: cache rendered page for 5 minutes instead of blocking on CMS every request.
export const revalidate = 300;

const fallbackMetadata = {
  title: "Contact US - Factorylicence",
  description:
    "Get in touch with us via email, phone, or by filling out the form to discover how factorylicence.in can solve your licencing challenges.",
  keywords: ["Contact US"],
  openGraph: {
    title: "Contact US - Factorylicence",
    description:
      "Get in touch with us via email, phone, or by filling out the form to discover how factorylicence.in can solve your licencing challenges.",
    url: "https://factorylicence.in/contact",
    type: "website",
    siteName: "FactoryLicence.in",
    images: [
      {
        url: "https://factorylicence.in/assets/contact-factory-licence-og.jpg",
        width: 1200,
        height: 630,
        alt: "Contact US – Factorylicence",
      },
    ],
  },
  alternates: {
    canonical: "https://factorylicence.in/contact",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export async function generateMetadata() {
  // Fresh CRM read — static page SEO must not wait on ISR cache.
  const cmsPage = await getFactoryCmsStaticPageFresh("contact");
  return buildCmsMetadata(cmsPage, fallbackMetadata);
}

export default function Page() {
  return (
    <>
      <ContactPage />
      <CmsStaticSyncBoundary pageKey="contact" />
    </>
  );
}
