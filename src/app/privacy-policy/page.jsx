import PrivacyPolicyPage from "@/components/pages/PrivacyPolicyPage";

export const metadata = {
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

export default function Page() {
  return <PrivacyPolicyPage />;
}
