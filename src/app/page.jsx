export const metadata = {
  title: "Factory Licence Online in India – Fast Approval Guaranteed",
  description:
    "Get your online factory license quickly with expert help. Easy registration, renewal & compliance services across India. Trusted by 1000+ businesses!",
  keywords: ["factory licence", "factory license", "online factory registration"],
  openGraph: {
    title: "Factory Licence Online in India – Fast Approval Guaranteed",
    description:
      "Get your online factory license quickly with expert help. Easy registration, renewal & compliance services across India. Trusted by 1000+ businesses!",
    url: "https://factorylicence.in/",
    type: "website",
    siteName: "FactoryLicence.in",
    images: [
      {
        url: "https://factorylicence.in/assets/factory-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Factory Licence Online",
      },
    ],
  },
  alternates: {
    canonical: "https://factorylicence.in/",
  },
};

import React from "react";
import Head from "next/head";

import HeroSection from "@/components/HeroSection";
import FactoryLicenseGrid from "@/components/FactoryLicenseGrid";
import FactoryLicenseSection from "@/components/FactoryLicenseSection";
import StatsSection from "@/components/StatsSection";
import FeatureCard from "@/components/FeatureCard";
import AssistanceSection from "@/components/AssistanceSection";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import CallToActionSection from "@/components/CallToActionSection";
import FaqSection from "@/components/FaqSection";

const Page = () => {
  return (
    <>
      {/* Geo and Structured Data */}
      <Head>
        {/* ✅ Geo Tags */}
        <meta name="DC.title" content="FactoryLicence.in" />
        <meta name="geo.region" content="IN-DL" />
        <meta name="geo.placename" content="Sec-12, Dwarka, New Delhi - 110078" />
        <meta name="geo.position" content="28.585293;77.068899" />
        <meta name="ICBM" content="28.585293, 77.068899" />

        {/* ✅ JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "@id": "https://factorylicence.in/#business",
              "name": "FactoryLicence.in",
              "url": "https://factorylicence.in/",
              "logo":
                "https://factorylicence.in/wp-content/uploads/2023/12/Factory-Licence-Logo.webp",
              "image":
                "https://factorylicence.in/wp-content/uploads/2023/12/Factory-Licence-Logo.webp",
              "description":
                "FactoryLicence.in, operated by Lawfinity India Private Limited, provides expert services for online factory license registration, renewal, and compliance across India, including Delhi, Haryana, Uttar Pradesh, and Noida.",
              "telephone": "+91 99107 74687",
              "email": "info@factorylicence.in",
              "foundingDate": "2018",
              "address": {
                "@type": "PostalAddress",
                "streetAddress":
                  "T-10, Plot No. -7, 3rd Floor, Pankaj Plaza, Pocket-7, Sector-12, Dwarka, New Delhi - 110078",
                "addressLocality": "Delhi",
                "addressRegion": "New Delhi",
                "postalCode": "110078",
                "addressCountry": "IN",
              },
              "openingHours": "Mo-Sa 10:00-19:00",
              "areaServed": [
                { "@type": "Place", "name": "Delhi" },
                { "@type": "Place", "name": "Haryana" },
                { "@type": "Place", "name": "Uttar Pradesh" },
                { "@type": "Place", "name": "Noida" },
              ],
              "sameAs": [
                "https://www.facebook.com/lawfinityindia",
                "https://www.linkedin.com/company/lawfinity-india-private-limited",
                "https://twitter.com/lawfinityindia",
              ],
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Factory Licence Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Factory License Registration",
                      "serviceType": "Legal Licensing Service",
                      "provider": {
                        "@type": "Organization",
                        "name": "Lawfinity India Private Limited",
                      },
                    },
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Factory License Renewal",
                      "serviceType": "License Renewal Service",
                      "provider": {
                        "@type": "Organization",
                        "name": "Lawfinity India Private Limited",
                      },
                    },
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "MCD Factory Licence",
                      "serviceType": "Municipal License",
                      "provider": {
                        "@type": "Organization",
                        "name": "Lawfinity India Private Limited",
                      },
                    },
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Approval & Registration of Factories",
                      "serviceType": "Compliance Registration",
                      "provider": {
                        "@type": "Organization",
                        "name": "Lawfinity India Private Limited",
                      },
                    },
                  },
                ],
              },
            }),
          }}
        />
      </Head>

      {/* Page Content */}
      <HeroSection />
      <FactoryLicenseGrid />
      <FactoryLicenseSection />
      <StatsSection />
      
      <FeatureCard />
      <AssistanceSection />
      <TestimonialCarousel />
      <CallToActionSection />
      <FaqSection />
    </>
  );
};

export default Page;
