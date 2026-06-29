export { default } from "@/components/pages/ContactPage";

// ISR: cache rendered page for 5 minutes.
export const revalidate = 300;

export const metadata = {
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
