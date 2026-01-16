import BlogsPage from "@/components/pages/BlogsPage";

export const metadata = {
  title: "Latest Factory License – Factorylicence",
  description:
    "Stay updated with the latest factory license news and guides on Factorylicence. Explore expert blogs on factory licence registration, renewal, laws, and compliance requirements.",
  keywords: ["Latest Factory License"],
  openGraph: {
    title: "Latest Factory License – Factorylicence",
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
  return <BlogsPage />;
}