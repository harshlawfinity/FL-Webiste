export const metadata = {
  title: "Factory Licence Online in India – Fast Approval Guaranteed",
  description:
    "Get your online factory license quickly with expert help. Easy registration, renewal & compliance services across India. Trusted by 1000+ businesses!",
  keywords: [
    "factory licence",
    "factory license",
    "online factory registration",
  ],
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
import UniversalFeeCalculator from "@/components/UniversalFeeCalculator";

const Page = () => {
  return (
    <>
      {/* Geo and Structured Data */}
      <Head>
        {/* Page Title & Metadata */}
        <title>
          Factory Licence Online in India – Fast Approval Guaranteed
        </title>
        <meta
          name="description"
          content="Get your online factory license quickly with expert help. Easy registration, renewal & compliance services across India. Trusted by 1000+ businesses!"
        />
        <meta
          name="keywords"
          content="factory licence, factory license, online factory registration"
        />

        {/* Favicon */}
        <link rel="icon" href="/fav2.ico" type="image/x-icon" />
        <link rel="shortcut icon" href="/fav2.ico" type="image/x-icon" />
        <link rel="apple-touch-icon" sizes="180x180" href="/fav2.ico" />

        {/* Open Graph (Social Sharing) */}
        <meta
          property="og:title"
          content="Factory Licence Online in India – Fast Approval Guaranteed"
        />
        <meta
          property="og:description"
          content="Get your online factory license quickly with expert help. Easy registration, renewal & compliance services across India. Trusted by 1000+ businesses!"
        />
        <meta property="og:url" content="https://factorylicence.in/" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="FactoryLicence.in" />
        <meta
          property="og:image"
          content="https://factorylicence.in/assets/factory-og-image.jpg"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Factory Licence Online" />

        {/* Canonical */}
        <link rel="canonical" href="https://factorylicence.in/" />

        {/* Geo Meta Tags */}
        <meta name="DC.title" content="FactoryLicence.in" />
        <meta name="geo.region" content="IN-DL" />
        <meta
          name="geo.placename"
          content="Sec-12, Dwarka, New Delhi - 110078"
        />
        <meta name="geo.position" content="28.585293;77.068899" />
        <meta name="ICBM" content="28.585293, 77.068899" />

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "ProfessionalService",
                  "@id": "https://factorylicence.in/#organization",
                  name: "Factory Licence",
                  url: "https://factorylicence.in/",
                  image:
                    "https://factorylicence.in/assets/factory-og-image.jpg",
                   telephone: "+91 99107 74687",
                  address: {
                    "@type": "PostalAddress",
                    streetAddress:
                      "T-10, Pankaj Plaza, Pocket 7, Sector 12 Dwarka",
                    addressLocality: "Dwarka, New Delhi",
                    addressRegion: "Delhi",
                    postalCode: "110078",
                    addressCountry: "IN",
                  },
                  sameAs: [
                    "https://www.facebook.com/factorylicence",
                    "https://www.instagram.com/factorylicence.in/",
                    "https://www.linkedin.com/company/factorylicence/",
                    "https://www.youtube.com/@FactoryLicence",
                  ],
                  openingHoursSpecification: [
                    {
                      "@type": "OpeningHoursSpecification",
                      dayOfWeek: [
                        "Monday",
                        "Tuesday",
                        "Wednesday",
                        "Thursday",
                        "Friday",
                        "Saturday",
                      ],
                      opens: "10:00",
                      closes: "19:00",
                    },
                  ],
                  areaServed: "IN",
                  contactPoint: {
                    "@type": "ContactPoint",
                    contactType: "customer support",
                    telephone: "+91 99107 74687",
                    areaServed: ["IN"],
                    availableLanguage: ["en", "hi"],
                  },
                },
                {
                  "@type": "WebSite",
                  "@id": "https://factorylicence.in/#website",
                  url: "https://factorylicence.in/",
                  name: "Factory Licence",
                  publisher: {
                    "@id": "https://factorylicence.in/#organization",
                  },
                },
              ],
            }),
          }}
        />
      </Head>

      {/* Page Content */}
      <HeroSection />
      <UniversalFeeCalculator />

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
