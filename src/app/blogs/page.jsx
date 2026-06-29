import BlogsPage from "@/components/pages/BlogsPage";
import { CmsStaticSyncBoundary } from "@/components/cms/FactoryCmsJsonLd";

// ISR: cache rendered page for 5 minutes instead of blocking on CMS every request.
export const revalidate = 300;

export const metadata = {
  title: "Latest Factorry License - Factorylicence",
  description:
    "Stay updated with the latest factory license news and guides on Factorylicence. Explore expert blogs on factory licence registration, renewal, laws, and compliance requirements.",
  keywords: ["Latest Factorry License"],
  openGraph: {
    title: "Latest Factorry License - Factorylicence",
    description:
      "Stay updated with the latest factory license news and guides on Factorylicence. Explore expert blogs on factory licence registration, renewal, laws, and compliance requirements.",
    url: "https://factorylicence.in/blogs",
    type: "website",
    siteName: "FactoryLicence.in",
  },
  alternates: {
    canonical: "https://factorylicence.in/blogs",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
  return (
    <>
      <BlogsPage />
      <CmsStaticSyncBoundary pageKey="blogs" />
    </>
  );
}
