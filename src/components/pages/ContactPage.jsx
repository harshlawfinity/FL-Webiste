import ContactHero from '@/components/ContactHero';
import LocationSection from '@/components/LocationSection';

// SEO metadata is provided by app/contact/page.jsx generateMetadata (CMS + fallback).
const Contact = () => {
  return (
    <div>
      <ContactHero />
      <LocationSection />
    </div>
  );
};

export default Contact;
