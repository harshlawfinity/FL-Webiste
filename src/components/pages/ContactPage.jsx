import { lazy, Suspense } from 'react';
import Head from 'next/head';
import ContactHero from '@/components/ContactHero'; // load early for SEO/LCP

// Lazy load non-critical section
import LocationSection from '@/components/LocationSection';
const Contact = () => {
  return (
    <div>
      <Head>
        <title>Contact US – Factorylicence</title>
        <meta
          name="description"
          content="Get in touch with us via email, phone, or by filling out the form to discover how factorylicence.in can solve your licencing challenges."
        />
        <meta name="keywords" content="Contact US" />
        <meta property="og:title" content="Contact US – Factorylicence" />
        <meta
          property="og:description"
          content="Get in touch with us via email, phone, or by filling out the form to discover how factorylicence.in can solve your licencing challenges."
        />
        <meta property="og:url" content="https://factorylicence.in/contact" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="FactoryLicence.in" />
        <link rel="canonical" href="https://factorylicence.in/contact" />
      </Head>


      <ContactHero />

      <Suspense fallback={<div className="text-center py-10">Loading location...</div>}>
        <LocationSection />
      </Suspense>
    </div>
  );
};

export default Contact;
