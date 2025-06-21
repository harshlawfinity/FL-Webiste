import React from 'react'
import HeroSection from '@/components/HeroSection'
import FactoryLicenseGrid from '@/components/FactoryLicenseGrid'
import FactoryLicenseSection from '@/components/FactoryLicenseSection'
import StatsSection from '@/components/StatsSection'
import FeatureCard from '@/components/FeatureCard'
import AssistanceSection from '@/components/AssistanceSection'
import TestimonialCarousel from '@/components/TestimonialCarousel'
import CallToActionSection from '@/components/CallToActionSection'
import FaqSection from '@/components/FaqSection'
const Page = () => {
  return (
    <div>
      
      <HeroSection />
      <FactoryLicenseGrid />
      <FactoryLicenseSection />
      <StatsSection />
      <FeatureCard />
      <AssistanceSection />
      <TestimonialCarousel />
      <CallToActionSection />
      <FaqSection />
    </div>
  )
}

export default Page
