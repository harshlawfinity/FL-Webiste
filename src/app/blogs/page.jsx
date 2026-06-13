import BlogsPage from "@/components/pages/BlogsPage";
import FactoryCmsDomSync from "@/components/cms/FactoryCmsDomSync";
import { getFactoryCmsStaticPage } from "@/lib/cms";

export const dynamic = "force-dynamic";

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

export default async function Page() {
  const cmsPage = await getFactoryCmsStaticPage("blogs");
  return (
    <>
      <BlogsPage />
      <FactoryCmsDomSync page={cmsPage} />
    </>
  );
}
