import { Suspense } from "react";
import { headers } from "next/headers";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServicePagesMarquee from "@/components/ServicePagesMarquee";
import "./globals.css";
import Script from "next/script";
import FloatingGetStartedButton from "@/components/FloatingGetStartedButton";
import { Poppins } from "next/font/google";
import TrackingScript from "@/components/TrackingScript";
import { getBlogBySlug, getBlogSchema } from "@/lib/blogs";

const poppins = Poppins({
  subsets: ["latin"],
  // 400/600/700 cover body, semibold headings, and bold — drop 500 to save a font file.
  weight: ["400", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
  adjustFontFallback: true,
});

export const metadata = {
  title: "Factory Licence Registration & Renewal Online in India | Apply Now",
  description:
    "Apply factory license online in India with expert Factory License Consultant support. Get factory licence registration, renewal online, fees, certificate & process help.",
  keywords:
    "factory license, factory licence, factory license renewal, factory license registration, factory license renewal online, factory license fees, Factory Licence Renewal, factory registration certificate, factory act licence, mcd factory licence, factory licence online, factory licence registration, apply factory license, apply for factory license, factory licence apply online, factory licence online, factory licence renewal fees, factory licence renewal fees online payment, factory licence renewal online, factory registration online, online factory licence, online factory licence renewal, online registration of factory licence, renewal of factory license online, factory licence fees, factory licence online application, Online Factory Registration in India, Factory License Consultant, factory license application, factory registration process, factory act license, factory licence certificate, factory licence mcd, factory license for construction site, licence factory, license for factory, mcd licence for factory, mcd license for factory, online factory license, how to pay factory license fee online, how to renew factory license online, how to apply for factory license",
  alternates: {
    canonical: "https://factorylicence.in/",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default async function RootLayout({ children }) {
  const headersList = await headers();
  const pathname = headersList.get("x-pathname") || "";
  const blogSlugMatch = pathname.match(/^\/blogs\/([^/]+)\/?$/);

  // Blog articles with CRM schemaMarkup — render in <head> (body scripts get corrupted by RSC).
  let showSiteSchema = true;
  let blogSchemaJson = null;
  if (blogSlugMatch) {
    const blog = await getBlogBySlug(blogSlugMatch[1]);
    const schema = getBlogSchema(blog);
    if (schema) {
      showSiteSchema = false;
      blogSchemaJson = JSON.stringify(schema).replace(/</g, "\\u003c");
    }
  }

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
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://internal.lawfinity.in" />
        {/* Must run first: suppress "Unable to store cookie" from third-party scripts when cookies are blocked */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var e=console.error;var msg="Unable to store cookie";console.error=function(){var a=arguments[0];var s=typeof a==="string"?a:(a&&a.message||"");if(s&&s.indexOf(msg)!==-1)return;return e.apply(console,arguments);};})();`,
          }}
        />
        {/* CRM blog schemaMarkup in head — must not live in page body (Next.js RSC truncates it). */}
        {blogSchemaJson ? (
          <script
            id="blog-schema-org"
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: blogSchemaJson }}
          />
        ) : null}
        {/* Sitewide schema — omitted on blog articles that ship CRM schemaMarkup */}
        {showSiteSchema ? (
          <script
            id="schema-org"
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
          />
        ) : null}

        {/* Third-party tags are delayed so they do not compete with the LCP hero image. */}
        <Script id="gtm-script" strategy="lazyOnload">
          {`
            (function(w,d){
              function loadGtm(){
                if (d.getElementById('gtm-runtime')) return;
                w.dataLayer=w.dataLayer||[];
                w.dataLayer.push({'gtm.start':new Date().getTime(),event:'gtm.js'});
                var f=d.getElementsByTagName('script')[0];
                var j=d.createElement('script');
                j.id='gtm-runtime';
                j.async=true;
                j.src='https://www.googletagmanager.com/gtm.js?id=GTM-TR58JL6Q';
                f.parentNode.insertBefore(j,f);
              }
              w.setTimeout(loadGtm,4500);
            })(window,document);
          `}
        </Script>

        {/* Meta pixel — GTM already loads GA/Ads; avoid duplicate gtag.js bundles */}
        <Script id="meta-pixel" strategy="lazyOnload">
          {`
            (function(w,d){
              function loadMeta(){
                if(w.fbq)return;
                var n=w.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                if(!w._fbq)w._fbq=n;
                n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];
                var t=d.createElement('script');
                t.async=!0;
                t.src='https://connect.facebook.net/en_US/fbevents.js';
                var s=d.getElementsByTagName('script')[0];
                s.parentNode.insertBefore(t,s);
                n('init','777415601527541');
                n('track','PageView');
              }
              w.setTimeout(loadMeta,5000);
            })(window,document);
          `}
        </Script>
      </head>
      <body className={`${poppins.variable} font-sans`} suppressHydrationWarning>
        {/* Strip extension-injected attributes before React hydrates to avoid hydration mismatch (e.g. fdprocessedid, data-lt-installed) */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
(function(){
  var attrs = ['fdprocessedid','data-lt-installed','form_signature','alternative_form_signature','field_signature','visibility_annotation'];
  function strip(){
    try {
      attrs.forEach(function(attr){
        document.querySelectorAll('['+attr+']').forEach(function(el){ el.removeAttribute(attr); });
      });
    } catch(e){}
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', strip);
  else strip();
  try {
    var obs = new MutationObserver(strip);
    obs.observe(document.documentElement, { attributes: true, subtree: true, attributeFilter: attrs });
  } catch(e){}
})();
            `.trim(),
          }}
        />
        <TrackingScript />

        <FloatingGetStartedButton />
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TR58JL6Q"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>

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
        {/* Stream footer marquee after page shell — avoids 20+ CRM fetches blocking TTFB */}
        <Suspense fallback={null}>
          <ServicePagesMarquee />
        </Suspense>
        <Footer />
      </body>
    </html>
  );
}
