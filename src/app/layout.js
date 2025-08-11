import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";
import Script from "next/script";

export const metadata = {
  icons: {
    icon: "/fav2.png",
  },
};

export default function RootLayout({ children }) {

  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        "@id": "https://factorylicence.in/#organization",
        name: "Factory Licence",
        url: "https://factorylicence.in/",
        telephone: "+91 99107 74687",
        address: {
          "@type": "PostalAddress",
          streetAddress: "T-10, Pankaj Plaza, Pocket 7, Sector 12 Dwarka",
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
        publisher: { "@id": "https://factorylicence.in/#organization" },
      },
    ],
  };

  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" href="/fav2.png" />
        {/* Schema.org JSON-LD */}
        <Script
          id="schema-org"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />


        {/* Google Tag Manager */}
        <Script id="gtm-script" strategy="beforeInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-TR58JL6Q');
          `}
        </Script>

        {/* Meta Pixel Script */}
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '777415601527541');
            fbq('track', 'PageView');
          `}
        </Script>

        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-WB9C1YGDMG"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-WB9C1YGDMG');
          `}
        </Script>
      </head>
      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TR58JL6Q"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>

        {/* Google tag (gtag.js) for Ads */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-17199345901"
          strategy="afterInteractive"
        />
        <Script id="google-ads" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17199345901');
          `}
        </Script>

        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=777415601527541&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>

        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
