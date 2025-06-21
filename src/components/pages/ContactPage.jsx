import  { lazy, Suspense } from 'react';
import ContactHero from '@/components/ContactHero'; // load early for SEO/LCP
 
// Lazy load non-critical section
import LocationSection from '@/components/LocationSection';
const Contact = () => {
  return (
    <div>
        

      <ContactHero />

      <Suspense fallback={<div className="text-center py-10">Loading location...</div>}>
        <LocationSection />
      </Suspense>
    </div>
  );
};

export default Contact;
