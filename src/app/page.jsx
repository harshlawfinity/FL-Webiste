export const metadata = {
  title: "Factory Licence Registration & Renewal Online in India | Apply Now",
  description:
    "Apply factory license online in India with expert Factory License Consultant support. Get factory licence registration, renewal online, fees, certificate & process help.",
  keywords: [
    "factory license",
    "factory licence",
    "factory license renewal",
    "factory license registration",
    "factory license renewal online",
    "factory license fees",
    "Factory Licence Renewal",
    "factory registration certificate",
    "factory act licence",
    "mcd factory licence",
    "factory licence online",
    "factory licence registration",
    "apply factory license",
    "apply for factory license",
    "factory licence apply online",
    "factory licence online",
    "factory licence renewal fees",
    "factory licence renewal fees online payment",
    "factory licence renewal online",
    "factory registration online",
    "online factory licence",
    "online factory licence renewal",
    "online registration of factory licence",
    "renewal of factory license online",
    "factory licence fees",
    "factory licence online application",
    "Online Factory Registration in India",
    "Factory License Consultant",
    "factory license application",
    "factory registration process",
    "factory act license",
    "factory licence certificate",
    "factory licence mcd",
    "factory license for construction site",
    "licence factory",
    "license for factory",
    "mcd licence for factory",
    "mcd license for factory",
    "online factory license",
    "how to pay factory license fee online",
    "how to renew factory license online",
    "how to apply for factory license",
  ],
  openGraph: {
    title: "Factory Licence Registration & Renewal Online in India | Apply Now",
    description:
      "Apply factory license online in India with expert Factory License Consultant support. Get factory licence registration, renewal online, fees, certificate & process help.",
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
  robots: {
    index: true,
    follow: true,
  },
  other: {
    "DC.title": "FactoryLicence.in",
    "geo.region": "IN-DL",
    "geo.placename": "Sec-12, Dwarka, New Delhi - 110078",
    "geo.position": "28.585293;77.068899",
    ICBM: "28.585293, 77.068899",
  },
};

// ISR: cache rendered page for 5 minutes instead of blocking on CMS every request.
export const revalidate = 300;

import React from "react";

import HeroSection from "@/components/HeroSection";
import HeroVideoSection from "@/components/HeroVideoSection";
import FactoryLicenseGrid from "@/components/FactoryLicenseGrid";
import FactoryLicenseSection from "@/components/FactoryLicenseSection";
import StatsSection from "@/components/StatsSection";
import FeatureCard from "@/components/FeatureCard";
import AssistanceSection from "@/components/AssistanceSection";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import CallToActionSection from "@/components/CallToActionSection";
import FaqSection from "@/components/FaqSection";
import UniversalFeeCalculator from "@/components/UniversalFeeCalculator";
import ExtendedContent from "@/components/ExtendedContent";
import { CmsStaticSyncBoundary } from "@/components/cms/FactoryCmsJsonLd";

const Page = () => {
  return (
    <>
      <HeroSection />
      <HeroVideoSection />
      <UniversalFeeCalculator />

      <FactoryLicenseGrid />

      <FactoryLicenseSection />
      <StatsSection />

      <FeatureCard />
      <AssistanceSection />
      <TestimonialCarousel />
      <CallToActionSection />

      <ExtendedContent />
      <FaqSection />
      {/* CMS sync streams after shell — avoids blocking TTFB on CMS fetch */}
      <CmsStaticSyncBoundary pageKey="home" />
    </>
  );
};

export default Page;
