"use client";


import AboutHero from "../../components/AboutHero.jsx";
import NewAbout from "../../components/NewAbout.jsx";
import WhyChooseUs from "../../components/WhyChooseUs.jsx";
import OurStory from "../../components/OurStory.jsx";
import HowItWorks from "../../components/HowItWorks.jsx";
import FinalCTA from "../../components/FinalCTA.jsx";
import Head from "next/head";

const AboutUS = () => {
  return (
    <>
      <Head>
        <title>About US - Factorylicence</title>
        <meta
          name="description"
          content="Factorylicence.in is your most trusted partner for all the services spanning from factory setup to factory management. Stay updated with the latest factory license news and guides on Factorylicence. Explore expert blogs on factory licence registration, renewal, laws, and compliance requirements."
        />
        <meta name="keywords" content="About US" />
        <meta property="og:title" content="About US - Factorylicence" />
        <meta
          property="og:description"
          content="Factorylicence.in is your most trusted partner for all the services spanning from factory setup to factory management. Stay updated with the latest factory license news and guides on Factorylicence. Explore expert blogs on factory licence registration, renewal, laws, and compliance requirements."
        />
        <meta property="og:url" content="https://factorylicence.in/about" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="FactoryLicence.in" />
        <link rel="canonical" href="https://factorylicence.in/about" />
      </Head>


      <AboutHero />
      <NewAbout />
      <WhyChooseUs />
      <OurStory />
      <HowItWorks />
      <FinalCTA />
    </>
  );
};

export default AboutUS;
