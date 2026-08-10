"use client";

import { useState } from "react";
import HeroRotatingBackground from "@/components/HeroRotatingBackground";
import ContactFormModal from "@/components/ContactFormModal";
import ContactForm from "@/components/ContactForm";
import ContactFormBlogs from "@/components/ContactFormBlogs";
import HeroVideoSection from "@/components/HeroVideoSection";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import StateFaqCTA from "@/components/StateFaqCTA";
import { CMS_RICH_TEXT_CLASS } from "@/components/cms/FactoryCmsDomSync";
import { getCmsServiceLeadFormCopy, getCmsServiceFaqHeading, getCmsServiceHeroSlides } from "@/lib/leadFormCopy";

// Empty section shells for FactoryCmsDomSync — IDs must match SECTION_IDS in FactoryCmsDomSync.jsx.
const STANDARD_SECTIONS = [
  { id: "what-is", title: "Introduction" },
  { id: "why-required", title: "Why Required" },
  { id: "benefits", title: "Benefits" },
  { id: "eligibility", title: "Eligibility Criteria" },
  { id: "documents", title: "Documents Required" },
  { id: "steps", title: "Process" },
  { id: "timelines", title: "Timelines" },
  { id: "penalties", title: "Penalties" },
];

function promoteCmsTableHeaderCells(html = "") {
  return String(html || "").replace(/<table\b[\s\S]*?<\/table>/gi, (table) => {
    if (/<th\b/i.test(table)) return table;
    return table.replace(/<tr\b[^>]*>[\s\S]*?<\/tr>/i, (firstRow) =>
      firstRow.replace(/<\/?td\b/gi, (tag) => tag.replace(/td/i, "th"))
    );
  });
}

function stripCmsHtml(value = "") {
  return String(value).replace(/<[^>]*>/g, "").replace(/\s+/g, " ").trim().toLowerCase();
}

function stripCmsHighlightArtifacts(html = "") {
  return String(html || "")
    .replace(/<\/?mark\b[^>]*>/gi, "")
    .replace(/\sstyle=(["'])((?:(?!\1).)*background-color\s*:[^"']*)((?:(?!\1).)*)\1/gi, (_match, quote, before, after) => {
      const nextStyle = `${before}${after}`
        .replace(/background-color\s*:\s*[^;]+;?/gi, "")
        .replace(/;;+/g, ";")
        .trim();
      return nextStyle ? ` style=${quote}${nextStyle}${quote}` : "";
    });
}

function normalizeCmsBodyHtml(html = "") {
  let lastParagraphFingerprint = "";
  return promoteCmsTableHeaderCells(stripCmsHighlightArtifacts(html)).replace(
    /<h[1-6]\b[\s\S]*?<\/h[1-6]>|<p\b[\s\S]*?<\/p>/gi,
    (node) => {
      if (/^<h[1-6]\b/i.test(node)) {
        lastParagraphFingerprint = "";
        return node;
      }

      const fingerprint = stripCmsHtml(node);
      if (fingerprint && fingerprint === lastParagraphFingerprint) return "";
      lastParagraphFingerprint = fingerprint;
      return node;
    }
  );
}

function SectionShell({ id, title }) {
  return (
    <div id={id} className="space-y-4">
      <h2 className="md:text-3xl text-xl font-semibold text-[#7A3EF2] mb-4">{title}</h2>
      <p className="text-left md:text-justify text-gray-800" />
    </div>
  );
}

// Generic landing shell for CMS-only service pages (no dedicated static route).
export default function CmsDynamicLandingPage({ page }) {
  const [showPopup, setShowPopup] = useState(false);
  const content = page?.content || {};
  const hero = content.hero || {};
  const title = hero.headline || page?.mainHeading || page?.title || "Service";
  const subtitle = hero.subtext || page?.seo?.description || "";
  // CMS Page Title — shared by lead form, FAQ heading, and hero alts.
  const pageTitle = page?.title || page?.mainHeading || page?.content?.mainHeading || "Service";
  const formCopy = getCmsServiceLeadFormCopy(pageTitle);
  const faqHeading = getCmsServiceFaqHeading(pageTitle);
  // Hero slide alts + SEO URLs: Page Title → H1 headline → contact form title.
  const heroSlides = getCmsServiceHeroSlides(page);
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: title },
  ];

  return (
    <div>
      <section className="relative text-white py-32 md:py-20 px-4 mt-10 overflow-hidden">
        <HeroRotatingBackground
          alts={heroSlides.map((slide) => slide.alt)}
          images={heroSlides.map((slide) => slide.src)}
        />

        <div className="max-w-7xl mx-auto relative z-20 flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="md:w-1/2">
            <BreadcrumbNav items={breadcrumbItems} placement="hero" />
            <h1 className="text-4xl md:text-5xl font-semibold mb-4">{title}</h1>
            {subtitle ? (
              <p className="text-lg mb-6 text-gray-50 text-justify">{subtitle}</p>
            ) : null}
            <button
              type="button"
              onClick={() => setShowPopup(true)}
              className="bg-white text-[#7A3EF2] font-semibold px-6 py-3 rounded-full shadow hover:bg-gray-100 transition"
            >
              Get Started
            </button>
          </div>

          <div className="md:w-1/2 w-full">
            <ContactForm
              title={formCopy.title}
              description={formCopy.description}
              serviceName={pageTitle}
            />
          </div>
        </div>
      </section>

      <HeroVideoSection />

      <section className="max-w-7xl mx-auto py-16 px-4 grid md:grid-cols-4 gap-10 text-gray-800">
        <div className="md:col-span-3 space-y-14">
          {content.contentBody ? (
            // Single merged "body para" — same section order the SEO person
            // authored in the CMS, rendered server-side as one block instead
            // of split into fixed per-section shells (see FactoryCmsDomSync's
            // isUnifiedBody branch, which skips its DOM reorder pass for
            // pages that already ship this field).
            <div
              id="cms-unified-body"
              className={CMS_RICH_TEXT_CLASS}
              dangerouslySetInnerHTML={{
                __html: normalizeCmsBodyHtml(content.contentBody),
              }}
            />
          ) : (
            STANDARD_SECTIONS.map((section) => (
              <SectionShell key={section.id} id={section.id} title={section.title} />
            ))
          )}
        </div>

        <aside className="hidden md:block">
          <div className="sticky top-24 space-y-4">
            <ContactFormBlogs
              title={formCopy.title}
              description={formCopy.description}
              serviceName={pageTitle}
            />
            <div className="bg-white rounded-xl shadow-md p-6 border border-violet-100">
              <h3 className="text-lg font-semibold text-[#7A3EF2] mb-2">Quick Links</h3>
              <nav className="space-y-3 text-sm text-gray-700" />
            </div>
          </div>
        </aside>
      </section>

      <BreadcrumbNav items={breadcrumbItems} placement="mobile" />
      <StateFaqCTA onClick={() => setShowPopup(true)} />

      <section id="faqs" className="bg-gradient-to-b from-[#f9f9ff] to-white py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-semibold text-center text-[#000000] mb-12">
            {faqHeading}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6" />
        </div>
      </section>

      <ContactFormModal
        isOpen={showPopup}
        onClose={() => setShowPopup(false)}
        title={formCopy.title}
        description={formCopy.description}
        serviceName={pageTitle}
      />
    </div>
  );
}
