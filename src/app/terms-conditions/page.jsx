import TermsConditionsPage from "@/components/pages/TermsConditionsPage";

export const metadata = {
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

export default function Page() {
  return <TermsConditionsPage />;
}
