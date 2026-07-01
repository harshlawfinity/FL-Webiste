"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { getCmsSchema } from "@/lib/cms";

// Client-side CRM fetch — bypasses server ISR cache so publishes appear immediately.
function resolveCmsClientBase() {
  if (process.env.NEXT_PUBLIC_CRM_CMS_BASE_URL) {
    return process.env.NEXT_PUBLIC_CRM_CMS_BASE_URL;
  }
  if (typeof window !== "undefined" && window.location.hostname === "localhost") {
    return "http://localhost:3000";
  }
  return "https://internal.lawfinity.in";
}

async function fetchFreshCmsPage(path) {
  const res = await fetch(`${resolveCmsClientBase()}${path}`, { cache: "no-store" });
  if (!res.ok) return null;
  const data = await res.json();
  return data?.success ? data.page : null;
}

const SECTION_IDS = {
  introduction: ["what-is"],
  whyNeeded: ["why-required"],
  benefits: ["benefits"],
  eligibilityCriteria: ["eligibility"],
  documentsRequired: ["documents"],
  steps: ["steps", "process"],
  timelines: ["timelines", "timeline"],
  penalties: ["penalties"],
};

const SKIP_RENDER_IDS = new Set(["hero", "breadcrumbs", "connectedServices", "pricing", "faqs", "faq"]);

// Horizontal TOC disabled site-wide — re-enable by uncommenting syncHorizontalToc() below.
// const HORIZONTAL_TOC_SKIP_PATHS = new Set(["/blogs", "/contact"]);

const LIST_CLASS = "list-disc pl-6 space-y-2 text-gray-800";
const ORDERED_LIST_CLASS = "list-decimal pl-6 space-y-3 text-gray-800";

const BULLET_BODY_SECTION_KEYS = new Set(["penalties", "benefits"]);

const CMS_RICH_TEXT_CLASS =
  "cms-rich-text max-w-full min-w-0 break-words text-gray-800 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:space-y-2 [&_li]:leading-relaxed [&_li_p]:inline [&_p]:text-justify [&_p]:mb-3 [&_strong]:font-bold [&_b]:font-bold [&_em]:italic [&_i]:italic [&_u]:underline";

function hasInlineFormatting(html = "") {
  return /<(strong|b|em|i|u|s|strike|mark)\b/i.test(String(html));
}

function hasBlockHtml(html = "") {
  return /<(ul|ol|table|div|h[1-6]|blockquote|p)\b/i.test(String(html));
}

function shouldUseRichTextWrapper(html = "") {
  const value = String(html || "").trim();
  if (!value) return false;
  return hasBlockHtml(value) || hasInlineFormatting(value);
}

// Remove CMS artefacts that inflate mobile layout (empty <p>, unwrapped wide tables).
function normalizeCmsHtml(html = "") {
  let value = String(html || "").trim();
  if (!value) return "";

  value = value.replace(/<p>(?:\s|&nbsp;|&#160;|<br\s*\/?>)*<\/p>/gi, "");

  if (/<table\b/i.test(value) && !/<div[^>]*cms-table-scroll/i.test(value)) {
    value = value.replace(
      /(<table\b[\s\S]*?<\/table>)/gi,
      '<div class="cms-table-scroll">$1</div>'
    );
  }

  return value;
}

function createContentElement(html) {
  const value = normalizeCmsHtml(html);
  if (!value) return null;

  if (shouldUseRichTextWrapper(value)) {
    const div = document.createElement("div");
    div.className = CMS_RICH_TEXT_CLASS;
    div.innerHTML = value;
    div.querySelectorAll("p").forEach((p) => {
      if (!stripHtml(p.innerHTML)) p.remove();
    });
    if (!div.childElementCount && !div.textContent.trim()) return null;
    return div;
  }

  const text = stripHtml(value);
  if (!text) return null;

  const p = document.createElement("p");
  p.className = "text-justify text-gray-800";
  p.textContent = text;
  return p;
}

function collectHeadingFingerprints(html = "") {
  const fingerprints = [];
  const regex = /<h[3-6][^>]*>([\s\S]*?)<\/h[3-6]>/gi;
  let match;
  while ((match = regex.exec(String(html)))) {
    const fp = contentFingerprint(match[1]);
    if (fp) fingerprints.push(fp);
  }
  return fingerprints;
}

function isLegacyContentNode(el) {
  if (!el) return false;
  if (el.closest("[data-cms-added='true'], [data-cms-synced='true']")) return false;
  if (el.closest("nav, aside, form, table")) return false;
  if (el.matches("h1, h2")) return false;
  // Only skip nodes inside a heading ancestor — not the heading element itself.
  if (el.parentElement?.closest("h3, h4")) return false;
  return true;
}

function hideLegacyContent(sectionEl) {
  Array.from(sectionEl.querySelectorAll("p, li, ul, ol, table, h3, h4")).forEach((el) => {
    if (!isLegacyContentNode(el)) return;
    el.style.display = "none";
    el.dataset.cmsLegacyHidden = "true";
  });
}

function hideLegacySectionChildren(sectionEl, preserveIds = new Set()) {
  Array.from(sectionEl.children).forEach((child) => {
    if (child.dataset.cmsSynced === "true") return;
    if (child.dataset.cmsPreserve === "true") return;
    if (child.matches("h2")) return;
    if (child.id && preserveIds.has(child.id)) return;
    child.style.display = "none";
    child.dataset.cmsLegacyHidden = "true";
  });
}

function restoreLegacyContent() {
  document.querySelectorAll("[data-cms-legacy-hidden='true']").forEach((el) => {
    el.style.display = "";
    delete el.dataset.cmsLegacyHidden;
  });
}

function clearSyncedContent(sectionEl) {
  sectionEl?.querySelectorAll("[data-cms-synced='true']").forEach((node) => node.remove());
}

function renderSectionContent(sectionEl, section, sectionKey = "") {
  if (!sectionEl) return;

  clearSyncedContent(sectionEl);

  const container = document.createElement("div");
  container.dataset.cmsSynced = "true";
  container.className = "cms-sync-content cms-rich-text space-y-3 max-w-full min-w-0";

  renderSectionBody(container, section, sectionKey);
  if (!container.childElementCount) return;

  hideLegacyContent(sectionEl);
  sectionEl.appendChild(container);
}

function stripHtml(value = "") {
  return String(value).replace(/<[^>]*>/g, "").trim();
}

function contentFingerprint(html = "") {
  return stripHtml(html).replace(/\s+/g, " ").trim().toLowerCase();
}

function normalizeHeadingText(value = "") {
  return stripHtml(value)
    .replace(/\s+/g, " ")
    .replace(/[?!.:]+$/g, "")
    .trim()
    .toLowerCase();
}

function slugify(value = "") {
  return String(value)
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

const INTERNAL_SITE_HOSTS = new Set(["factorylicence.in", "www.factorylicence.in"]);

function isInternalHref(href = "") {
  const value = String(href).trim();
  if (!value || value.startsWith("#") || value.startsWith("mailto:") || value.startsWith("tel:")) {
    return false;
  }
  if (value.startsWith("/")) return true;
  try {
    return INTERNAL_SITE_HOSTS.has(new URL(value).hostname);
  } catch {
    return false;
  }
}

function toRelativeHref(href = "") {
  if (href.startsWith("/")) return href;
  try {
    const url = new URL(href);
    return `${url.pathname}${url.search}${url.hash}` || "/";
  } catch {
    return href;
  }
}

// Keep same-site links dofollow: use relative paths and remove nofollow/target.
function normalizeInternalLinks(root = document) {
  root.querySelectorAll("a[href]").forEach((anchor) => {
    const href = anchor.getAttribute("href") || "";
    if (!isInternalHref(href)) return;

    anchor.setAttribute("href", toRelativeHref(href));
    anchor.removeAttribute("target");

    const rel = (anchor.getAttribute("rel") || "")
      .split(/\s+/)
      .filter((token) => token && token !== "nofollow");
    if (rel.length) anchor.setAttribute("rel", rel.join(" "));
    else anchor.removeAttribute("rel");
  });
}

function upsertMeta(attr, key, value) {
  if (!value) return;
  const selector = attr === "name" ? `meta[name="${key}"]` : `meta[property="${key}"]`;
  let el = document.querySelector(selector);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", value);
}

// Push fresh CRM seo fields to <head> when server metadata is still ISR-cached.
function syncDocumentSeo(page) {
  if (!page) return;
  const seo = page.seo || {};
  const title = seo.title || page.title;
  if (title) document.title = title;

  upsertMeta("name", "description", seo.description);

  const keywords = Array.isArray(seo.keywords)
    ? seo.keywords.filter(Boolean).join(", ")
    : seo.keywords;
  if (keywords) upsertMeta("name", "keywords", keywords);

  upsertMeta("property", "og:title", seo.ogTitle || seo.title || page.title);
  upsertMeta("property", "og:description", seo.ogDescription || seo.description);
  if (seo.canonicalUrl) upsertMeta("property", "og:url", seo.canonicalUrl);

  if (seo.canonicalUrl) {
    let link = document.querySelector('link[rel="canonical"]');
    if (!link) {
      link = document.createElement("link");
      link.rel = "canonical";
      document.head.appendChild(link);
    }
    link.href = seo.canonicalUrl;
  }
}

function normalizeBodyItem(item) {
  if (item == null) return "";
  if (typeof item === "string") return item;
  if (item.step && item.description) {
    return `<strong>${item.step}:</strong> ${item.description}`;
  }
  return item.description || item.content || item.text || item.answer || item.title || item.step || "";
}

// True when CRM section has body, table, image, or nested blocks — heading alone is not enough.
function sectionHasRenderableContent(section) {
  if (!section) return false;

  if (section.type === "image" && section.url) return true;

  if (section.type === "table") {
    const columns = Array.isArray(section.columns) ? section.columns : [];
    const rows = Array.isArray(section.rows) ? section.rows : [];
    return rows.length > 0 && columns.some((column) => stripHtml(column));
  }

  if (stripHtml(section.introParagraph || "")) return true;

  const body = Array.isArray(section.body) ? section.body : section.body ? [section.body] : [];
  if (
    body.some((item) => {
      if (item && typeof item === "object" && item.step && item.description) {
        return stripHtml(item.description);
      }
      return stripHtml(normalizeBodyItem(item));
    })
  ) {
    return true;
  }

  const nested = Array.isArray(section.nestedSections) ? section.nestedSections : [];
  if (nested.some((item) => sectionHasRenderableContent(item))) return true;

  if (Array.isArray(section.categories)) {
    return section.categories.some((category) => categoryListItems(category).length > 0);
  }

  return false;
}

function hideEmptyCmsSection(sectionEl) {
  if (!sectionEl) return;
  sectionEl.style.display = "none";
  sectionEl.dataset.cmsLegacyHidden = "true";
}

function createBulletList(items, ordered = false) {
  const list = document.createElement(ordered ? "ol" : "ul");
  list.className = ordered ? ORDERED_LIST_CLASS : LIST_CLASS;

  items.forEach((item) => {
    const html = typeof item === "object" ? normalizeBodyItem(item) : String(item || "");
    if (!stripHtml(html)) return;
    const li = document.createElement("li");
    li.className = "text-justify leading-relaxed cms-rich-text";
    li.innerHTML = html;
    list.appendChild(li);
  });

  return list.childElementCount ? list : null;
}

function categoryListItems(category) {
  return (
    category?.documents ||
    category?.criteria ||
    category?.items ||
    category?.points ||
    []
  );
}

function renderSectionBody(parent, section, sectionKey = "") {
  if (!section || !parent) return;

  const seenContent = new Set();
  const introHtml = section.introParagraph && stripHtml(section.introParagraph)
    ? String(section.introParagraph).trim()
    : "";

  if (introHtml) {
    seenContent.add(contentFingerprint(introHtml));
    const intro = createContentElement(introHtml);
    if (intro) parent.appendChild(intro);
  }

  const body = Array.isArray(section.body)
    ? section.body
    : section.body
      ? [section.body]
      : [];

  const stepItems = body.filter(
    (item) => item && typeof item === "object" && item.step && item.description
  );
  const nonStepBody = body.filter(
    (item) => !(item && typeof item === "object" && item.step && item.description)
  );

  const blockHtmlItems = [];
  const paragraphItems = [];

  nonStepBody.forEach((item) => {
    const html = normalizeBodyItem(item);
    if (!stripHtml(html)) return;

    const fingerprint = contentFingerprint(html);
    if (seenContent.has(fingerprint)) return;
    seenContent.add(fingerprint);
    collectHeadingFingerprints(html).forEach((fp) => seenContent.add(fp));

    if (hasBlockHtml(html)) blockHtmlItems.push(html);
    else paragraphItems.push(html);
  });

  if (BULLET_BODY_SECTION_KEYS.has(sectionKey) && paragraphItems.length) {
    const ul = createBulletList(paragraphItems, false);
    if (ul) parent.appendChild(ul);
  } else {
    paragraphItems.forEach((html) => {
      const el = createContentElement(html);
      if (el) parent.appendChild(el);
    });
  }

  blockHtmlItems.forEach((html) => {
    const el = createContentElement(html);
    if (el) parent.appendChild(el);
  });

  if (stepItems.length) {
    const ol = createBulletList(
      stepItems.map((item) => `<strong>${item.step}:</strong> ${item.description}`),
      true
    );
    if (ol) parent.appendChild(ol);
  }

  if (Array.isArray(section.categories)) {
    section.categories.forEach((category) => {
      const items = categoryListItems(category);
      if (!items.length) return;

      const label = category.applicantType || category.title || category.name;
      const labelFp = label ? contentFingerprint(label) : "";
      const headingAlreadyRendered = labelFp && seenContent.has(labelFp);

      if (label && stripHtml(label) && !headingAlreadyRendered) {
        const heading = document.createElement("h4");
        heading.className = "text-base font-semibold text-gray-900 mt-2 mb-2";
        heading.textContent = label;
        parent.appendChild(heading);
        seenContent.add(labelFp);
      }

      const ul = createBulletList(items, false);
      if (ul) parent.appendChild(ul);
    });
  }
}

// CMS nestedSections use placement (beforeBody) or afterBodyIndex (insert after body[i]).
function partitionNestedSections(nested = []) {
  const beforeBody = [];
  const afterBodyEnd = [];
  const byBodyIndex = new Map();

  nested.forEach((item) => {
    if (!item) return;
    if (item.placement === "beforeBody") {
      beforeBody.push(item);
      return;
    }
    if (typeof item.afterBodyIndex === "number" && item.afterBodyIndex >= 0) {
      const idx = item.afterBodyIndex;
      if (!byBodyIndex.has(idx)) byBodyIndex.set(idx, []);
      byBodyIndex.get(idx).push(item);
      return;
    }
    afterBodyEnd.push(item);
  });

  return { beforeBody, byBodyIndex, afterBodyEnd };
}

function renderSectionBodyWithNestedPlacement(parent, section, sectionKey = "") {
  if (!section || !parent) return;

  const nested = Array.isArray(section.nestedSections) ? section.nestedSections : [];
  const { beforeBody, byBodyIndex, afterBodyEnd } = partitionNestedSections(nested);

  beforeBody.forEach((nestedSection, index) => {
    renderNestedInto(parent, nestedSection, index, section);
  });

  const seenContent = new Set();
  const introHtml = section.introParagraph && stripHtml(section.introParagraph)
    ? String(section.introParagraph).trim()
    : "";

  if (introHtml) {
    seenContent.add(contentFingerprint(introHtml));
    const intro = createContentElement(introHtml);
    if (intro) parent.appendChild(intro);
  }

  const body = Array.isArray(section.body)
    ? section.body
    : section.body
      ? [section.body]
      : [];

  const stepItems = body.filter(
    (item) => item && typeof item === "object" && item.step && item.description
  );

  // Render each body block in CMS order; inject nested tables/images after the matching index.
  body.forEach((item, bodyIndex) => {
    if (item && typeof item === "object" && item.step && item.description) return;

    const html = normalizeBodyItem(item);
    if (!stripHtml(html)) return;

    const fingerprint = contentFingerprint(html);
    if (seenContent.has(fingerprint)) return;
    seenContent.add(fingerprint);
    collectHeadingFingerprints(html).forEach((fp) => seenContent.add(fp));

    const el = createContentElement(html);
    if (el) parent.appendChild(el);

    const interleaved = byBodyIndex.get(bodyIndex) || [];
    interleaved.forEach((nestedSection, index) => {
      renderNestedInto(parent, nestedSection, index, section);
    });
  });

  if (stepItems.length) {
    const ol = createBulletList(
      stepItems.map((item) => `<strong>${item.step}:</strong> ${item.description}`),
      true
    );
    if (ol) parent.appendChild(ol);
  }

  if (Array.isArray(section.categories)) {
    section.categories.forEach((category) => {
      const items = categoryListItems(category);
      if (!items.length) return;

      const label = category.applicantType || category.title || category.name;
      const labelFp = label ? contentFingerprint(label) : "";
      const headingAlreadyRendered = labelFp && seenContent.has(labelFp);

      if (label && stripHtml(label) && !headingAlreadyRendered) {
        const heading = document.createElement("h4");
        heading.className = "text-base font-semibold text-gray-900 mt-2 mb-2";
        heading.textContent = label;
        parent.appendChild(heading);
        seenContent.add(labelFp);
      }

      const ul = createBulletList(items, false);
      if (ul) parent.appendChild(ul);
    });
  }

  afterBodyEnd.forEach((nestedSection, index) => {
    renderNestedInto(parent, nestedSection, index, section);
  });
}

function contentHeading(section, fallback = "") {
  return section?.heading || section?.subsectionTitle || section?.title || fallback;
}

const GENERIC_NESTED_TITLES = new Set(["text", "paragraph", "content", "body", "table"]);

function nestedSectionHeading(nestedSection) {
  // Embedded data tables should not render CMS placeholder titles like "Table".
  if (nestedSection?.type === "table") return "";

  const explicitHeading = stripHtml(
    nestedSection?.heading || nestedSection?.title || ""
  );
  if (explicitHeading) return explicitHeading;

  if (nestedSection?.type === "text") return "";

  const subsectionTitle = stripHtml(nestedSection?.subsectionTitle || "");
  if (!subsectionTitle || GENERIC_NESTED_TITLES.has(subsectionTitle.toLowerCase())) {
    return "";
  }

  return subsectionTitle;
}

function sectionIdFor(key, section) {
  return slugify(key || section?.id || contentHeading(section) || `cms-section-${Date.now()}`);
}

function findMainContentColumn() {
  return (
    document.querySelector(".md\\:col-span-3") ||
    document.querySelector('[class*="md:col-span-3"]') ||
    document.querySelector("main") ||
    document.body
  );
}

function headingClassName() {
  return (
    document.querySelector(".md\\:col-span-3 h2")?.className ||
    document.querySelector('[class*="md:col-span-3"] h2')?.className ||
    "md:text-3xl text-xl font-semibold text-[#7A3EF2] mb-4"
  );
}

function findSectionElement(key) {
  const el = document.getElementById(key);
  if (!el) return null;
  if (/^H[1-6]$/i.test(el.tagName)) {
    return el.parentElement || el;
  }
  return el;
}

function findHeadingEl(sectionEl) {
  if (!sectionEl) return null;
  if (/^H[1-6]$/i.test(sectionEl.tagName)) return sectionEl;
  return sectionEl.querySelector(":scope > h1, :scope > h2, :scope > h3");
}

function iconIndexFromHeading(heading = "") {
  const text = normalizeHeadingText(heading);
  let hash = 0;
  for (let i = 0; i < text.length; i += 1) {
    hash = (hash * 31 + text.charCodeAt(i)) >>> 0;
  }
  return hash % HEADING_ICON_POOL.length;
}

// Distinct fallback icons for CMS custom headings that do not match a keyword rule.
const HEADING_ICON_POOL = [
  "M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z",
  "M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5A3.375 3.375 0 0 0 10.125 2.25H6.75A2.25 2.25 0 0 0 4.5 4.5v15A2.25 2.25 0 0 0 6.75 21.75h10.5a2.25 2.25 0 0 0 2.25-2.25v-5.25Z",
  "M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.5 20.25a8.25 8.25 0 0 1 15 0",
  "M8.25 6.75h12M8.25 12h12M8.25 17.25h12M3.75 6.75h.008v.008H3.75V6.75Zm0 5.25h.008v.008H3.75V12Zm0 5.25h.008v.008H3.75v-.008Z",
  "M12 6v6h4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z",
  "M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125h17.25c.621 0 1.125.504 1.125 1.125V6m-19.5 0v9.75m19.5-9.75v9.75m0 0v.375c0 .621-.504 1.125-1.125 1.125H3.375A1.125 1.125 0 0 1 2.25 16.125v-.375m19.5 0H2.25",
  "M12 9v3.75m0 3.75h.008v.008H12v-.008ZM10.29 3.86 1.82 18a2.25 2.25 0 0 0 1.93 3.375h16.5A2.25 2.25 0 0 0 22.18 18L13.71 3.86a2.25 2.25 0 0 0-3.42 0Z",
  "M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21",
];

function iconSvgPathForHeading(heading = "") {
  const normalized = normalizeHeadingText(heading);
  if (/benefit|why choose/.test(normalized)) {
    return "M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z";
  }
  if (/why|important|need|help/.test(normalized)) {
    return "M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M12 17.25h.008M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z";
  }
  if (/document|certificate|authorisation|authorization|consent|noc/.test(normalized)) {
    return "M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5A3.375 3.375 0 0 0 10.125 2.25H6.75A2.25 2.25 0 0 0 4.5 4.5v15A2.25 2.25 0 0 0 6.75 21.75h10.5a2.25 2.25 0 0 0 2.25-2.25v-5.25Z";
  }
  if (/eligible|who/.test(normalized)) {
    return "M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.5 20.25a8.25 8.25 0 0 1 15 0";
  }
  if (/step|process|apply/.test(normalized)) {
    return "M8.25 6.75h12M8.25 12h12M8.25 17.25h12M3.75 6.75h.008v.008H3.75V6.75Zm0 5.25h.008v.008H3.75V12Zm0 5.25h.008v.008H3.75v-.008Z";
  }
  if (/fee|cost|price|charge/.test(normalized)) {
    return "M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125h17.25c.621 0 1.125.504 1.125 1.125V6m-19.5 0v9.75m19.5-9.75v9.75m0 0v.375c0 .621-.504 1.125-1.125 1.125H3.375A1.125 1.125 0 0 1 2.25 16.125v-.375m19.5 0H2.25";
  }
  if (/timeline|renewal|valid|expir/.test(normalized)) {
    return "M12 6v6h4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z";
  }
  if (/penalt|lost|fine|non-compliance|reject|objection|reason/.test(normalized)) {
    return "M12 9v3.75m0 3.75h.008v.008H12v-.008ZM10.29 3.86 1.82 18a2.25 2.25 0 0 0 1.93 3.375h16.5A2.25 2.25 0 0 0 22.18 18L13.71 3.86a2.25 2.25 0 0 0-3.42 0Z";
  }
  if (/licens|authority|regulat|government|official/.test(normalized)) {
    return "M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21";
  }
  if (/industry|sector|service|hospital|clinic|nursing|medical|health/.test(normalized)) {
    return "M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.5 20.25a8.25 8.25 0 0 1 15 0";
  }
  if (/compliance|safety|fire|waste|pollution|biomedical/.test(normalized)) {
    return "M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z";
  }
  if (/introduc|what is|overview/.test(normalized)) {
    return "M11.25 11.25l.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z";
  }
  if (/choose|factorylicence|factory licence/.test(normalized)) {
    return "M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z";
  }

  return HEADING_ICON_POOL[iconIndexFromHeading(heading)];
}

function createHeadingIcon(heading = "") {
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("viewBox", "0 0 24 24");
  svg.setAttribute("fill", "none");
  svg.setAttribute("stroke", "currentColor");
  svg.setAttribute("stroke-width", "2");
  svg.setAttribute("stroke-linecap", "round");
  svg.setAttribute("stroke-linejoin", "round");
  svg.setAttribute("aria-hidden", "true");
  svg.classList.add("inline", "mr-2", "h-[1em]", "w-[1em]", "align-[-0.125em]", "text-[#7A3EF2]");

  const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path.setAttribute("d", iconSvgPathForHeading(heading));
  svg.appendChild(path);
  return svg;
}

function ensureHeadingIcon(headingEl, heading = "") {
  if (!headingEl || /^H1$/i.test(headingEl.tagName)) return;

  const label = getHeadingLabel(headingEl);
  // Section wrappers without title render an empty h2; child components (e.g. fee calculators) supply their own.
  if (!label) {
    headingEl.style.display = "none";
    return;
  }

  const iconHeading = heading || label;
  const nextPath = iconSvgPathForHeading(iconHeading);
  const existingSvg = headingEl.querySelector("svg");

  if (existingSvg) {
    const path = existingSvg.querySelector("path");
    if (path && path.getAttribute("d") !== nextPath) {
      path.setAttribute("d", nextPath);
    }
    return;
  }

  headingEl.insertBefore(createHeadingIcon(iconHeading), headingEl.firstChild);
}

function setHeading(sectionEl, heading) {
  if (!heading || !sectionEl) return;
  let headingEl = findHeadingEl(sectionEl);
  if (!headingEl) {
    headingEl = document.createElement("h2");
    headingEl.className = headingClassName();
    sectionEl.insertBefore(headingEl, sectionEl.firstChild);
  }

  const icon = headingEl.querySelector("svg, i");
  headingEl.replaceChildren();
  headingEl.appendChild(icon || createHeadingIcon(heading));
  headingEl.append(document.createTextNode(` ${heading}`));
}

function syncTextBlocks(sectionEl, section, sectionKey = "") {
  renderSectionContent(sectionEl, section, sectionKey);
}

function renderSectionInto(parent, section, sectionKey = "") {
  renderSectionBody(parent, section, sectionKey);
}

// Render body plus nested tables/images (CMS embeds tables inside text sections via nestedSections).
function renderSectionWithNestedSections(parent, section, sectionKey = "") {
  const nested = Array.isArray(section.nestedSections) ? section.nestedSections : [];
  if (!nested.length) {
    renderSectionInto(parent, section, sectionKey);
    return;
  }

  const { beforeBody, byBodyIndex, afterBodyEnd } = partitionNestedSections(nested);

  // CMS afterBodyIndex — e.g. fee paragraph → table → note paragraph.
  if (byBodyIndex.size > 0) {
    renderSectionBodyWithNestedPlacement(parent, section, sectionKey);
    return;
  }

  beforeBody.forEach((nestedSection, index) => {
    renderNestedInto(parent, nestedSection, index, section);
  });
  renderSectionInto(parent, section, sectionKey);
  afterBodyEnd.forEach((nestedSection, index) => {
    renderNestedInto(parent, nestedSection, index, section);
  });
}

function renderTable(parent, section) {
  const columns = Array.isArray(section.columns) ? section.columns : [];
  const rows = Array.isArray(section.rows) ? section.rows : [];
  if (!columns.length && !rows.length) return;

  const wrapper = document.createElement("div");
  wrapper.className = "cms-table-scroll max-w-full w-full rounded-xl border border-gray-200";
  const table = document.createElement("table");
  table.className = "w-full min-w-0 text-left text-sm";

  if (columns.length) {
    const thead = document.createElement("thead");
    thead.className = "bg-[#7A3EF2] text-white";
    const tr = document.createElement("tr");
    columns.forEach((column) => {
      const th = document.createElement("th");
      th.className = "p-3 font-semibold";
      th.textContent = column;
      tr.appendChild(th);
    });
    thead.appendChild(tr);
    table.appendChild(thead);
  }

  const tbody = document.createElement("tbody");
  tbody.className = "divide-y divide-gray-200";
  rows.forEach((row) => {
    const tr = document.createElement("tr");
    (Array.isArray(row) ? row : [row]).forEach((cell) => {
      const td = document.createElement("td");
      td.className = "p-3 align-top";
      td.innerHTML = cell || "";
      tr.appendChild(td);
    });
    tbody.appendChild(tr);
  });
  table.appendChild(tbody);
  wrapper.appendChild(table);
  parent.appendChild(wrapper);
}

function renderImage(parent, section) {
  if (!section.url) return;
  const figure = document.createElement("figure");
  figure.className = "space-y-2";
  const img = document.createElement("img");
  img.src = section.url;
  img.alt = section.alt || contentHeading(section) || "";
  img.className = "max-w-full rounded-xl shadow";
  figure.appendChild(img);
  if (section.caption) {
    const caption = document.createElement("figcaption");
    caption.className = "text-sm italic text-gray-500";
    caption.textContent = section.caption;
    figure.appendChild(caption);
  }
  parent.appendChild(figure);
}

function appendCmsSection({ key, section, targetParent, nested = false }) {
  if (!section || !targetParent) return null;
  if (!sectionHasRenderableContent(section)) return null;

  const id = sectionIdFor(key, section);
  const sectionEl = document.createElement("div");
  sectionEl.id = id;
  sectionEl.dataset.cmsAdded = "true";
  sectionEl.className = nested
    ? "mt-6 space-y-3 rounded-2xl border border-gray-100 bg-white/70 p-4"
    : "space-y-4";

  const heading = contentHeading(section, nested ? section.subsectionTitle : "");
  if (heading) {
    const h = document.createElement(nested ? "h3" : "h2");
    h.className = nested ? "text-xl font-semibold text-[#7A3EF2]" : headingClassName();
    if (!nested) h.appendChild(createHeadingIcon(heading));
    h.append(document.createTextNode(nested ? heading : ` ${heading}`));
    sectionEl.appendChild(h);
  }

  if (section.type === "table") {
    const columns = Array.isArray(section.columns) ? section.columns : [];
    const rows = Array.isArray(section.rows) ? section.rows : [];
    const hasTableData = rows.length > 0 && columns.some((column) => stripHtml(column));

    if (hasTableData) {
      renderTable(sectionEl, section);
    } else {
      renderSectionInto(sectionEl, section);
    }
  } else if (section.type === "image") {
    renderImage(sectionEl, section);
  } else {
    renderSectionWithNestedSections(sectionEl, section, key);
  }

  targetParent.appendChild(sectionEl);
  return sectionEl;
}

function renderNestedInto(parent, nestedSection, index, parentSection) {
  const wrapper = document.createElement("div");
  wrapper.dataset.cmsSynced = "true";
  wrapper.className = "cms-nested-section cms-rich-text space-y-3";

  const heading = nestedSectionHeading(nestedSection);
  if (heading) {
    const h = document.createElement("h3");
    h.className = "text-xl font-semibold text-[#7A3EF2] mb-2";
    h.textContent = heading;
    wrapper.appendChild(h);
  }

  if (nestedSection.type === "table") {
    const columns = Array.isArray(nestedSection.columns) ? nestedSection.columns : [];
    const rows = Array.isArray(nestedSection.rows) ? nestedSection.rows : [];
    const hasTableData = rows.length > 0 && columns.some((column) => stripHtml(column));
    if (hasTableData) {
      renderTable(wrapper, nestedSection);
    } else {
      renderSectionInto(wrapper, nestedSection);
    }
  } else if (nestedSection.type === "image") {
    renderImage(wrapper, nestedSection);
  } else {
    renderSectionInto(wrapper, nestedSection);
  }

  parent.appendChild(wrapper);
}

function syncExistingCustomSection(sectionEl, section, preserveIds = new Set()) {
  if (!sectionHasRenderableContent(section)) {
    hideEmptyCmsSection(sectionEl);
    return;
  }

  sectionEl.style.display = "";
  delete sectionEl.dataset.cmsLegacyHidden;

  const container = document.createElement("div");
  container.dataset.cmsSynced = "true";
  container.className = "cms-sync-content cms-rich-text space-y-4 max-w-full min-w-0";

  const preserveEl = sectionEl.querySelector("[data-cms-preserve='true']");
  const nested = Array.isArray(section.nestedSections) ? section.nestedSections : [];
  const hasCmsTable = nested.some((item) => item?.type === "table") || section.type === "table";

  renderSectionWithNestedSections(container, section);

  if (!container.childElementCount) return;

  setHeading(sectionEl, contentHeading(section));
  clearSyncedContent(sectionEl);
  hideLegacySectionChildren(sectionEl, preserveIds);
  // CMS fee tables should replace preserved static tables; static tables remain the fallback when CMS has no table.
  if (preserveEl && hasCmsTable) {
    preserveEl.style.display = "none";
    preserveEl.dataset.cmsLegacyHidden = "true";
  }

  if (preserveEl && !hasCmsTable) {
    sectionEl.insertBefore(container, preserveEl);
  } else {
    sectionEl.appendChild(container);
  }
}

function findSectionElementByHeading(heading) {
  const wanted = normalizeHeadingText(heading);
  if (!wanted) return null;

  return Array.from(document.querySelectorAll("h2, h3"))
    .filter((headingEl) => !headingEl.closest("aside, nav, form"))
    .map((headingEl) => ({ headingEl, text: normalizeHeadingText(headingEl.textContent || "") }))
    .filter(({ text }) => text === wanted)
    .map(({ headingEl }) => headingEl.parentElement || headingEl)
    .find(Boolean) || null;
}

function pageContent(page) {
  return page?.content || page?.sections || null;
}

function customSections(page) {
  const content = pageContent(page);
  return {
    ...(content?.customSections || {}),
    ...(page?.customSections || {}),
    ...(page?.sections || {}),
  };
}

function getSectionData(page, key) {
  if (!key) return null;
  return pageContent(page)?.[key] || customSections(page)[key] || null;
}

// CMS sectionOrder is the source of truth for display sequence.
function buildSectionOrder(page) {
  const content = pageContent(page);
  const order = [
    ...(Array.isArray(page?.sectionOrder) ? page.sectionOrder : []),
    ...(Array.isArray(content?.sectionOrder) ? content.sectionOrder : []),
  ].filter((key, index, arr) => key && arr.indexOf(key) === index);

  if (order.length) return order;

  return [
    ...Object.keys(SECTION_IDS),
    ...Object.keys(customSections(page)),
    ...Object.keys(content || {}).filter(
      (key) =>
        !["sectionOrder", "customSections", "mainHeading", "hero", "breadcrumbs", "connectedServices"].includes(key)
    ),
  ].filter((key, index, arr) => key && arr.indexOf(key) === index);
}

// True when CRM sent sectionOrder — static sections not listed should be hidden.
function hasExplicitCmsSectionOrder(page) {
  const content = pageContent(page);
  return (
    (Array.isArray(page?.sectionOrder) && page.sectionOrder.length > 0) ||
    (Array.isArray(content?.sectionOrder) && content.sectionOrder.length > 0)
  );
}

function domIdsForSectionKey(key, page) {
  const ids = new Set();
  sectionIdAliases(key).forEach((alias) => ids.add(alias));
  SECTION_IDS[key]?.forEach((id) => ids.add(id));

  const section = getSectionData(page, key);
  const resolved = resolveSectionElement(key, section);
  if (resolved?.id) ids.add(resolved.id);

  return ids;
}

function collectActiveSectionDomIds(sectionOrder, page, syncedElements) {
  const ids = new Set();

  sectionOrder.forEach((key) => {
    if (MAIN_COLUMN_ORDER_SKIP.has(key) || SKIP_RENDER_IDS.has(key)) return;
    domIdsForSectionKey(key, page).forEach((id) => ids.add(id));
  });

  syncedElements.forEach((el) => {
    if (el?.id) ids.add(el.id);
  });

  return ids;
}

// Hide hardcoded page sections that CRM removed from sectionOrder (e.g. renewal on Fire NOC Delhi).
function hideSectionsRemovedFromCms(mainColumn, page, sectionOrder, syncedElements) {
  if (!mainColumn || !hasExplicitCmsSectionOrder(page)) return;

  const activeIds = collectActiveSectionDomIds(sectionOrder, page, syncedElements);

  Array.from(mainColumn.children).forEach((child) => {
    if (child.dataset.cmsHorizontalToc === "true") return;
    if (!child.id) return;
    if (activeIds.has(child.id)) return;

    child.style.display = "none";
    child.dataset.cmsLegacyHidden = "true";
  });
}

function sectionIdAliases(key = "") {
  const aliases = [key];
  if (/authorization/i.test(key)) aliases.push(key.replace(/authorization/gi, "authorisation"));
  if (/authorisation/i.test(key)) aliases.push(key.replace(/authorisation/gi, "authorization"));
  return [...new Set(aliases.filter(Boolean))];
}

function resolveSectionElement(key, section) {
  for (const alias of sectionIdAliases(key)) {
    const el = findSectionElement(alias);
    if (el) return el;
  }

  if (SECTION_IDS[key]) {
    const mapped = SECTION_IDS[key].map((id) => findSectionElement(id)).find(Boolean);
    if (mapped) return mapped;
  }

  const heading = contentHeading(section, key);
  if (heading) return findSectionElementByHeading(heading);

  return null;
}

const MAIN_COLUMN_ORDER_SKIP = new Set([
  "hero",
  "breadcrumbs",
  "faqs",
  "faq",
  "connectedServices",
  "pricing",
]);

function syncStandardSection(key, section, syncedElements) {
  const sectionEl = SECTION_IDS[key]?.map((id) => findSectionElement(id)).find(Boolean);
  if (!sectionEl) return;

  if (!sectionHasRenderableContent(section)) {
    hideEmptyCmsSection(sectionEl);
    syncedElements.set(key, sectionEl);
    return;
  }

  sectionEl.style.display = "";
  delete sectionEl.dataset.cmsLegacyHidden;

  const heading = contentHeading(section);
  if (heading) {
    setHeading(sectionEl, heading);
    const headingEl = findHeadingEl(sectionEl);
    if (headingEl) headingEl.style.display = "";
  } else {
    const headingEl = findHeadingEl(sectionEl);
    if (headingEl) headingEl.style.display = "none";
  }

  const nested = Array.isArray(section.nestedSections) ? section.nestedSections : [];
  const hasInterleavedNested = nested.some(
    (item) => typeof item?.afterBodyIndex === "number" && item.afterBodyIndex >= 0
  );

  if (hasInterleavedNested) {
    clearSyncedContent(sectionEl);
    hideLegacyContent(sectionEl);
    const container = document.createElement("div");
    container.dataset.cmsSynced = "true";
    container.className = "cms-sync-content cms-rich-text space-y-4 max-w-full min-w-0";
    renderSectionWithNestedSections(container, section, key);
    if (container.childElementCount) sectionEl.appendChild(container);
  } else {
    syncTextBlocks(sectionEl, section, key);

    if (nested.length) {
      const container =
        sectionEl.querySelector("[data-cms-synced='true']") ||
        (() => {
          const el = document.createElement("div");
          el.dataset.cmsSynced = "true";
          el.className = "cms-sync-content cms-rich-text space-y-4 max-w-full min-w-0";
          sectionEl.appendChild(el);
          return el;
        })();
      nested.forEach((nestedSection, index) => {
        renderNestedInto(container, nestedSection, index, section);
      });
    }
  }

  syncedElements.set(key, sectionEl);
}

function syncCustomSection(key, section, mainColumn, syncedElements, preserveIds) {
  const existingEl = resolveSectionElement(key, section);
  if (existingEl) {
    if (!sectionHasRenderableContent(section)) {
      hideEmptyCmsSection(existingEl);
      return;
    }
    syncExistingCustomSection(existingEl, section, preserveIds);
    syncedElements.set(key, existingEl);
    return;
  }

  if (!mainColumn || !sectionHasRenderableContent(section)) return;

  const added = appendCmsSection({ key, section, targetParent: mainColumn });
  if (!added) return;

  syncedElements.set(key, added);
  addQuickLink(added.id, contentHeading(section, key));
}

// Reorder main-column sections to match CMS sectionOrder.
function reorderMainColumnSections(mainColumn, sectionOrder, syncedElements) {
  if (!mainColumn || !sectionOrder.length) return;

  const orderedNodes = [];
  sectionOrder.forEach((key) => {
    if (MAIN_COLUMN_ORDER_SKIP.has(key)) return;
    const el = syncedElements.get(key);
    if (el && mainColumn.contains(el) && !orderedNodes.includes(el)) {
      orderedNodes.push(el);
    }
  });

  if (!orderedNodes.length) return;

  const faqAnchor = mainColumn.querySelector("#faqs");
  orderedNodes.forEach((node) => {
    if (faqAnchor && faqAnchor.parentElement === mainColumn) {
      mainColumn.insertBefore(node, faqAnchor);
    } else {
      mainColumn.appendChild(node);
    }
  });
}

// Process diagrams are static <img> siblings after #steps — section re-order leaves them stuck below the TOC.
function restoreProcessDiagramPlacement(mainColumn) {
  if (!mainColumn) return;

  // Top-level diagram only (not nested inside a section); src/alt may omit the word "process" (e.g. Haryana).
  const processImg = Array.from(mainColumn.children).find((node) => node.tagName === "IMG");
  if (!processImg) return;

  const stepsSection =
    mainColumn.querySelector("#steps") || mainColumn.querySelector("#process");
  if (!stepsSection) return;

  const feeSection = mainColumn.querySelector("#fee, #fees");
  if (
    feeSection &&
    feeSection.parentElement === mainColumn &&
    stepsSection.compareDocumentPosition(feeSection) & Node.DOCUMENT_POSITION_FOLLOWING
  ) {
    mainColumn.insertBefore(processImg, feeSection);
    return;
  }

  if (processImg.previousElementSibling !== stepsSection) {
    mainColumn.insertBefore(processImg, stepsSection.nextSibling);
  }
}

function quickLinksNav() {
  return Array.from(document.querySelectorAll("aside nav")).find((el) =>
    /quick links|connected services/i.test(el.closest("aside")?.textContent || "")
  );
}

function addQuickLink(id, label) {
  if (!id || !label) return;
  const nav = quickLinksNav();
  if (!nav || nav.querySelector(`[data-cms-link="${id}"]`)) return;

  const button = document.createElement("button");
  button.type = "button";
  button.dataset.cmsLink = id;
  button.className = "cursor-pointer hover:text-[#7A3EF2] block text-left w-full";
  button.textContent = label;
  button.addEventListener("click", () => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  });
  nav.appendChild(button);
}

function getHeadingLabel(headingEl) {
  return stripHtml(headingEl?.textContent || "")
    .replace(/\s+/g, " ")
    .trim();
}

// Resolve the scroll target id for an h2 (parent section id or slugified heading).
function resolveSectionId(headingEl, mainColumn) {
  let el = headingEl.parentElement;
  while (el && el !== mainColumn) {
    if (el.id) return el.id;
    el = el.parentElement;
  }

  const label = getHeadingLabel(headingEl);
  const generatedId = slugify(label);
  const parent = headingEl.parentElement;
  if (parent && generatedId && !parent.id) {
    parent.id = generatedId;
  }
  return parent?.id || generatedId || null;
}

// Collect h2 headings for the horizontal TOC (main content + FAQ when outside main column).
function mainColumnTocItems() {
  const mainColumn = findMainContentColumn();
  if (!mainColumn) return [];

  const headingEls = Array.from(mainColumn.querySelectorAll("h2"));
  const faqRoot = document.getElementById("faqs");
  const faqHeading = faqRoot?.querySelector("h2");
  if (faqHeading && !mainColumn.contains(faqHeading)) {
    headingEls.push(faqHeading);
  }

  headingEls.sort((a, b) => {
    const position = a.compareDocumentPosition(b);
    if (position & Node.DOCUMENT_POSITION_FOLLOWING) return -1;
    if (position & Node.DOCUMENT_POSITION_PRECEDING) return 1;
    return 0;
  });

  const seen = new Set();
  return headingEls
    .filter((headingEl) => {
      if (headingEl.closest("[data-cms-horizontal-toc='true'], aside, nav, form")) return false;
      // Skip headings inside sections CRM removed from sectionOrder.
      if (headingEl.closest("[data-cms-legacy-hidden='true']")) return false;
      return Boolean(getHeadingLabel(headingEl));
    })
    .map((headingEl) => ({
      id: resolveSectionId(headingEl, mainColumn),
      label: getHeadingLabel(headingEl),
    }))
    .filter((item) => {
      if (!item.id || !item.label || !document.getElementById(item.id)) return false;
      if (seen.has(item.id)) return false;
      seen.add(item.id);
      return true;
    });
}

// Sticky TOC sits below site header; offset used for scroll-spy and anchor jumps.
const TOC_HEADER_OFFSET_MOBILE = 72; // matches top-[4.5rem]
const TOC_HEADER_OFFSET_DESKTOP = 96; // matches md:top-24

function getTocStickyOffset(tocEl) {
  const isDesktop = window.matchMedia("(min-width: 768px)").matches;
  const header = isDesktop ? TOC_HEADER_OFFSET_DESKTOP : TOC_HEADER_OFFSET_MOBILE;
  const tocHeight = tocEl?.offsetHeight || 0;
  return header + tocHeight + 12;
}

// Hero video is always above the content grid — TOC at the column top sits directly below it.
function findTocInsertBeforeNode(mainColumn) {
  return mainColumn.firstChild;
}

function applyTocScrollMargins(tocEl, items) {
  const margin = `${getTocStickyOffset(tocEl)}px`;
  items.forEach((item) => {
    const target = document.getElementById(item.id);
    if (target) target.style.scrollMarginTop = margin;
  });
}

function syncHorizontalToc() {
  const items = mainColumnTocItems();
  const mainColumn = findMainContentColumn();
  if (!items.length || !mainColumn || document.querySelector("[data-cms-horizontal-toc='true']")) return;

  const wrapper = document.createElement("div");
  wrapper.dataset.cmsHorizontalToc = "true";
  // Stay within column width on mobile — negative margins caused page-wide horizontal overflow.
  wrapper.className =
    "sticky top-[4.5rem] md:top-20 z-20 mb-12 md:mb-14 w-full max-w-full rounded-none sm:rounded-xl border-y sm:border border-violet-100 bg-violet-50/95 px-1.5 py-2.5 sm:p-2 shadow-sm backdrop-blur";

  const createArrowButton = (direction) => {
    const button = document.createElement("button");
    button.type = "button";
    button.setAttribute("aria-label", `Scroll table of contents ${direction}`);
    button.className =
      "shrink-0 rounded-full bg-white/90 p-2.5 sm:p-2 text-slate-600 shadow-sm transition-colors hover:bg-slate-100";
    button.innerHTML = direction === "left"
      ? '<svg aria-hidden="true" viewBox="0 0 20 20" fill="currentColor" class="h-4 w-4"><path fill-rule="evenodd" d="M12.79 5.23a.75.75 0 0 1-.02 1.06L9.06 10l3.71 3.71a.75.75 0 1 1-1.06 1.06l-4.24-4.24a.75.75 0 0 1 0-1.06l4.24-4.24a.75.75 0 0 1 1.08 0Z" clip-rule="evenodd"/></svg>'
      : '<svg aria-hidden="true" viewBox="0 0 20 20" fill="currentColor" class="h-4 w-4"><path fill-rule="evenodd" d="M7.21 14.77a.75.75 0 0 1 .02-1.06L10.94 10 7.23 6.29a.75.75 0 1 1 1.06-1.06l4.24 4.24a.75.75 0 0 1 0 1.06l-4.24 4.24a.75.75 0 0 1-1.08 0Z" clip-rule="evenodd"/></svg>';
    return button;
  };

  const scroller = document.createElement("div");
  scroller.className =
    "flex min-w-0 flex-1 gap-2 overflow-x-auto overflow-y-hidden scroll-smooth snap-x snap-mandatory [scrollbar-width:none] [&::-webkit-scrollbar]:hidden py-0.5";

  const leftButton = createArrowButton("left");
  const rightButton = createArrowButton("right");
  const scrollToc = (direction) => {
    scroller.scrollBy({ left: direction === "left" ? -220 : 220, behavior: "smooth" });
  };
  leftButton.addEventListener("click", () => scrollToc("left"));
  rightButton.addEventListener("click", () => scrollToc("right"));

  items.forEach((item) => {
    const button = document.createElement("button");
    button.type = "button";
    button.dataset.tocId = item.id;
    button.title = item.label;
    button.className =
      "shrink-0 snap-start rounded-lg border border-slate-200/70 bg-white/90 px-3 py-2.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium text-slate-700 transition-colors hover:bg-white hover:text-[#7A3EF2] max-w-[72vw] sm:max-w-none sm:whitespace-nowrap whitespace-normal text-left leading-snug line-clamp-2 sm:line-clamp-none min-h-[44px] sm:min-h-0 flex items-center";
    button.textContent = item.label;
    button.addEventListener("click", () => {
      const target = document.getElementById(item.id);
      if (!target) return;
      const y = target.getBoundingClientRect().top + window.pageYOffset - getTocStickyOffset(wrapper);
      window.scrollTo({ top: y, behavior: "smooth" });
    });
    scroller.appendChild(button);
  });

  // Edge fades hint that the TOC scrolls horizontally on mobile.
  const scrollWrap = document.createElement("div");
  scrollWrap.className = "relative min-w-0 flex-1";
  const fadeLeft = document.createElement("div");
  fadeLeft.className =
    "pointer-events-none absolute left-0 top-0 bottom-0 z-10 w-5 bg-gradient-to-r from-violet-50 to-transparent opacity-0 transition-opacity";
  const fadeRight = document.createElement("div");
  fadeRight.className =
    "pointer-events-none absolute right-0 top-0 bottom-0 z-10 w-5 bg-gradient-to-l from-violet-50 to-transparent opacity-100 transition-opacity";
  scrollWrap.append(scroller, fadeLeft, fadeRight);

  const updateScrollFades = () => {
    const { scrollLeft, scrollWidth, clientWidth } = scroller;
    fadeLeft.style.opacity = scrollLeft > 4 ? "1" : "0";
    fadeRight.style.opacity = scrollLeft + clientWidth < scrollWidth - 4 ? "1" : "0";
  };
  scroller.addEventListener("scroll", updateScrollFades, { passive: true });

  const inner = document.createElement("div");
  inner.className = "flex items-stretch gap-1.5 sm:gap-2";
  inner.append(leftButton, scrollWrap, rightButton);
  wrapper.appendChild(inner);

  // Top of main column = directly below HeroVideoSection on every landing page.
  const insertBefore = findTocInsertBeforeNode(mainColumn);
  if (insertBefore) {
    mainColumn.insertBefore(wrapper, insertBefore);
  } else {
    mainColumn.appendChild(wrapper);
  }

  applyTocScrollMargins(wrapper, items);

  // Keep the same section-aware feel as Lawfinity's horizontal TOC without adding a new component.
  const syncActiveItem = () => {
    const scrollLine = window.scrollY + getTocStickyOffset(wrapper);
    let activeId = items[0]?.id;
    items.forEach((item) => {
      const target = document.getElementById(item.id);
      if (!target) return;
      const top = target.getBoundingClientRect().top + window.scrollY;
      if (top <= scrollLine) activeId = item.id;
    });

    scroller.querySelectorAll("[data-toc-id]").forEach((button) => {
      const isActive = button.dataset.tocId === activeId;
      button.classList.toggle("bg-[#7A3EF2]", isActive);
      button.classList.toggle("text-white", isActive);
      button.classList.toggle("border-[#7A3EF2]", isActive);
      button.classList.toggle("shadow-sm", isActive);
      button.classList.toggle("text-slate-700", !isActive);
      button.classList.toggle("bg-white/90", !isActive);
    });

    const activeButton = scroller.querySelector(`[data-toc-id="${activeId}"]`);
    if (activeButton) {
      const left = activeButton.offsetLeft - scroller.clientWidth / 2 + activeButton.offsetWidth / 2;
      scroller.scrollTo({ left: Math.max(0, left), behavior: "smooth" });
    }
    updateScrollFades();
  };

  const wheelToPageScroll = (event) => {
    if (Math.abs(event.deltaY) <= Math.abs(event.deltaX)) return;
    window.scrollBy(0, event.deltaY);
    event.preventDefault();
  };

  syncActiveItem();
  updateScrollFades();
  window.addEventListener("scroll", syncActiveItem, { passive: true });
  const onResize = () => {
    applyTocScrollMargins(wrapper, items);
    syncActiveItem();
    updateScrollFades();
  };
  window.addEventListener("resize", onResize);
  scroller.addEventListener("wheel", wheelToPageScroll, { passive: false });

  return () => {
    window.removeEventListener("scroll", syncActiveItem);
    window.removeEventListener("resize", onResize);
    scroller.removeEventListener("wheel", wheelToPageScroll);
  };
}

function syncConnectedServices(page) {
  const services = pageContent(page)?.connectedServices || page?.connectedServices || [];
  const nav = quickLinksNav();
  if (!nav) return;

  const card = nav.parentElement;
  if (!Array.isArray(services) || !services.length) {
    if (card) card.style.display = "none";
    return;
  }

  if (card) card.style.display = "";
  const title = card?.querySelector("h3");
  if (title) title.textContent = "Connected Services";
  nav.replaceChildren();

  services.forEach((service, index) => {
    const label = stripHtml(service?.name || service?.title || service?.label || "");
    const href = service?.link || service?.url || service?.href || (service?.slug ? `/${service.slug}` : "");
    if (!label || !href) return;

    const anchor = document.createElement("a");
    anchor.dataset.cmsLink = `connected-service-${index}`;
    anchor.className = "block hover:text-[#7A3EF2]";
    anchor.href = href;
    anchor.textContent = label;
    nav.appendChild(anchor);
  });
}

function findFaqRoot() {
  const byId =
    document.getElementById("faqs") ||
    document.getElementById("faq-section");
  if (byId) return byId;

  return Array.from(document.querySelectorAll("section, div")).find((el) =>
    /frequently asked questions|^faqs$/i.test(
      el.querySelector(":scope > div > h2, :scope > h2")?.textContent?.trim() || ""
    )
  );
}

function renderFaqAnswer(html = "") {
  const value = String(html || "").trim();
  const answer = document.createElement("div");
  answer.className = "cms-rich-text pb-4 text-base text-gray-600";

  if (!stripHtml(value)) {
    answer.textContent = "";
    return answer;
  }

  if (shouldUseRichTextWrapper(value)) {
    answer.innerHTML = value;
  } else {
    answer.textContent = stripHtml(value);
  }

  return answer;
}

function createFaqItem(faq, index, grid) {
  const item = document.createElement("div");
  item.className = "bg-white rounded-xl shadow transition-all duration-300 ease-in-out";
  item.dataset.cmsFaqSynced = "true";

  const button = document.createElement("button");
  button.type = "button";
  button.className =
    "w-full flex justify-between items-center text-left px-6 py-5 sm:py-3 font-medium text-gray-800 hover:text-[#7A3EF2] focus:outline-none";

  const question = document.createElement("span");
  question.className = "text-base pr-4";
  question.textContent = faq.question || faq.title || "";
  button.appendChild(question);

  const chevron = document.createElement("span");
  chevron.dataset.faqChevron = "true";
  chevron.className = "text-gray-400 shrink-0";
  chevron.textContent = "▼";
  button.appendChild(chevron);

  const answerWrap = document.createElement("div");
  answerWrap.dataset.faqAnswer = "true";
  answerWrap.className =
    "overflow-hidden px-6 transition-all duration-300 max-h-0";
  answerWrap.appendChild(renderFaqAnswer(faq.answer || faq.content || ""));

  button.addEventListener("click", () => {
    const isOpen = answerWrap.dataset.open === "true";

    grid.querySelectorAll("[data-faq-answer]").forEach((el) => {
      el.dataset.open = "false";
      el.classList.remove("max-h-[1200px]", "pb-2", "pb-4");
      el.classList.add("max-h-0");
    });
    grid.querySelectorAll("[data-faq-chevron]").forEach((el) => {
      el.className = "text-gray-400 shrink-0";
      el.textContent = "▼";
    });

    if (!isOpen) {
      answerWrap.dataset.open = "true";
      answerWrap.classList.remove("max-h-0");
      answerWrap.classList.add("max-h-[1200px]", "pb-4");
      chevron.className = "text-[#7A3EF2] shrink-0";
      chevron.textContent = "▲";
    }
  });

  item.appendChild(button);
  item.appendChild(answerWrap);
  return item;
}

function syncFaqs(page) {
  const content = pageContent(page);
  const faqSection = content?.faqs;
  const faqs = faqSection?.body;
  if (!Array.isArray(faqs) || !faqs.length) return;

  const faqRoot = findFaqRoot();
  if (!faqRoot) return;

  const headingEl = faqRoot.querySelector("h2");
  // Keep each page's static FAQ heading when CMS section has no title.
  const heading = contentHeading(
    faqSection,
    headingEl?.textContent?.trim() || "Frequently Asked Questions"
  );
  if (headingEl && heading) headingEl.textContent = heading;

  const grid =
    faqRoot.querySelector("[data-cms-faq-grid]") ||
    faqRoot.querySelector(".grid");
  if (!grid) return;

  grid.dataset.cmsFaqGrid = "true";
  grid.replaceChildren();

  const mid = Math.ceil(faqs.length / 2);
  const columns = [faqs.slice(0, mid), faqs.slice(mid)];

  columns.forEach((half) => {
    const col = document.createElement("div");
    col.className = "space-y-5";
    col.dataset.cmsFaqSynced = "true";
    half.forEach((faq, index) => col.appendChild(createFaqItem(faq, index, grid)));
    grid.appendChild(col);
  });
}

function cmsBreadcrumbs(page) {
  const content = pageContent(page);
  const crumbs = content?.breadcrumbs || page?.breadcrumbs;
  if (!Array.isArray(crumbs)) return [];

  return crumbs
    .map((item) => ({
      label: stripHtml(item?.label || item?.text || item?.name || ""),
      href: item?.href || item?.link || item?.url || "",
    }))
    .filter((item) => item.label);
}

function appendBreadcrumbCrumb(parent, item, isLast) {
  const row = document.createElement("div");
  row.className = "flex items-center";

  if (parent.childElementCount > 0) {
    const sep = document.createElement("span");
    sep.className = "px-2 text-gray-400";
    sep.textContent = "›";
    row.appendChild(sep);
  }

  if (!isLast && item.href) {
    const link = document.createElement("a");
    link.href = item.href;
    link.className = "text-gray-50 hover:underline";
    link.textContent = item.label;
    row.appendChild(link);
  } else {
    const label = document.createElement("span");
    label.className = "text-gray-50";
    label.textContent = item.label;
    row.appendChild(label);
  }

  parent.appendChild(row);
}

// Sync CMS breadcrumb labels/links into hero and mobile breadcrumb navs.
function syncBreadcrumbs(page) {
  const crumbs = cmsBreadcrumbs(page);
  if (!crumbs.length) return;

  const heroNav = document.querySelector('[data-cms-breadcrumb-nav="hero"]');
  if (heroNav) {
    heroNav.replaceChildren();
    crumbs.forEach((item, index) => {
      appendBreadcrumbCrumb(heroNav, item, index === crumbs.length - 1);
    });
  }

  const mobileInner = document.querySelector(
    '[data-cms-breadcrumb-nav="mobile"] [data-cms-breadcrumb-inner]'
  );
  if (mobileInner) {
    const home = crumbs[0];
    const current = crumbs[crumbs.length - 1];
    mobileInner.replaceChildren();

    const homeLink = document.createElement("a");
    homeLink.href = home?.href || "/";
    homeLink.className = "shrink-0 font-medium text-[#7A3EF2] hover:underline";
    homeLink.textContent = home?.label || "Home";
    mobileInner.appendChild(homeLink);

    if (crumbs.length > 1 && current?.label) {
      const sep = document.createElement("span");
      sep.className = "shrink-0 text-gray-400 pt-px";
      sep.textContent = "›";
      mobileInner.appendChild(sep);

      const currentLabel = document.createElement("span");
      currentLabel.className = "min-w-0 text-gray-600 font-medium line-clamp-2";
      currentLabel.textContent = current.label;
      mobileInner.appendChild(currentLabel);
    }
  }
}

function hasUrlHashAnchor() {
  return typeof window !== "undefined" && Boolean(window.location.hash);
}

// CRM DOM reorder shifts scroll to the footer on refresh — keep hero in view unless #anchor present.
function scrollToHeroUnlessAnchored() {
  if (hasUrlHashAnchor()) return;
  window.scrollTo({ top: 0, left: 0, behavior: "auto" });
}

export default function FactoryCmsDomSync({ page, landingSlug, staticPageKey }) {
  const pathname = usePathname();

  useEffect(() => {
    let cancelled = false;
    let idleId;
    let timeoutId;

    if (typeof window !== "undefined" && "scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }
    scrollToHeroUnlessAnchored();

    const runSync = (activePage) => {
      syncDocumentSeo(activePage);

      const content = pageContent(activePage);
      if (!content) return;

      restoreLegacyContent();
      document.querySelectorAll("[data-cms-added='true'], [data-cms-link], [data-cms-synced='true'], [data-cms-horizontal-toc='true']").forEach((node) => node.remove());

      const hero = content.hero || {};
      const heroTitle = hero.headline || hero.heading || activePage.mainHeading || activePage.title;
      const heroSubtitle = hero.subtext || activePage.seo?.description;
      const firstH1 = document.querySelector("h1");
      if (firstH1 && heroTitle) firstH1.textContent = heroTitle;
      const heroParagraph = firstH1?.parentElement?.querySelector("p");
      if (heroParagraph && heroSubtitle) heroParagraph.innerHTML = heroSubtitle;

      const mainColumn = findMainContentColumn();
      const sectionOrder = buildSectionOrder(activePage);
      const syncedElements = new Map();
      const preserveIds = new Set(sectionOrder);

      sectionOrder.forEach((key) => {
        if (MAIN_COLUMN_ORDER_SKIP.has(key) || SKIP_RENDER_IDS.has(key)) return;

        const section = getSectionData(activePage, key);
        if (!section) return;

        if (SECTION_IDS[key]) {
          syncStandardSection(key, section, syncedElements);
          return;
        }

        syncCustomSection(key, section, mainColumn, syncedElements, preserveIds);
      });

      reorderMainColumnSections(mainColumn, sectionOrder, syncedElements);
      hideSectionsRemovedFromCms(mainColumn, activePage, sectionOrder, syncedElements);
      restoreProcessDiagramPlacement(mainColumn);

      syncFaqs(activePage);
      syncBreadcrumbs(activePage);
      // Horizontal TOC disabled on all static + dynamic CMS pages.
      // if (!HORIZONTAL_TOC_SKIP_PATHS.has(pathname)) {
      //   syncHorizontalToc();
      // }
      syncConnectedServices(activePage);
      mainColumn?.querySelectorAll("h2").forEach((headingEl) => {
        ensureHeadingIcon(headingEl, getHeadingLabel(headingEl));
      });
      normalizeInternalLinks(document);

      // Keep JSON-LD in sync when CRM publishes before the next ISR cycle.
      const schema = getCmsSchema(activePage);
      const schemaEl = document.getElementById("cms-schema-org");
      if (schemaEl && schema) {
        schemaEl.textContent = JSON.stringify(schema);
      }

      // Section reorder runs after paint — pin scroll to hero on full refresh.
      scrollToHeroUnlessAnchored();
      requestAnimationFrame(() => {
        if (!cancelled) scrollToHeroUnlessAnchored();
      });
    };

    const scheduleSync = (activePage) => {
      if (cancelled) return;
      if (typeof window.requestIdleCallback === "function") {
        idleId = window.requestIdleCallback(() => runSync(activePage), { timeout: 1500 });
      } else {
        timeoutId = window.setTimeout(() => runSync(activePage), 0);
      }
    };

    // Always pull the latest CRM snapshot on the client — server props may be ISR-cached.
    (async () => {
      let activePage = page;
      try {
        if (landingSlug) {
          activePage =
            (await fetchFreshCmsPage(`/api/public/factorylicence/landing-pages/${landingSlug}`)) ||
            page;
        } else if (staticPageKey) {
          activePage =
            (await fetchFreshCmsPage(`/api/public/factorylicence/static-pages/${staticPageKey}`)) ||
            page;
        }
      } catch {
        // Offline or CRM down — fall back to the server-rendered snapshot.
      }
      scheduleSync(activePage);
    })();

    return () => {
      cancelled = true;
      if (idleId && typeof window.cancelIdleCallback === "function") {
        window.cancelIdleCallback(idleId);
      }
      if (timeoutId) window.clearTimeout(timeoutId);
      if (typeof window !== "undefined" && "scrollRestoration" in history) {
        history.scrollRestoration = "auto";
      }
    };
  }, [page, landingSlug, staticPageKey, pathname]);

  return null;
}
