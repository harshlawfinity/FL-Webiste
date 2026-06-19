"use client";

import { useEffect } from "react";

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

const LIST_CLASS = "list-disc pl-6 space-y-2 text-gray-800";
const ORDERED_LIST_CLASS = "list-decimal pl-6 space-y-3 text-gray-800";

const BULLET_BODY_SECTION_KEYS = new Set(["penalties", "benefits"]);

const CMS_RICH_TEXT_CLASS =
  "cms-rich-text text-gray-800 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:space-y-2 [&_li]:leading-relaxed [&_li_p]:inline [&_p]:text-justify [&_p]:mb-3 [&_strong]:font-bold [&_b]:font-bold [&_em]:italic [&_i]:italic [&_u]:underline";

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

function createContentElement(html) {
  const value = String(html || "").trim();
  if (!value) return null;

  if (shouldUseRichTextWrapper(value)) {
    const div = document.createElement("div");
    div.className = CMS_RICH_TEXT_CLASS;
    div.innerHTML = value;
    return div;
  }

  const p = document.createElement("p");
  p.className = "text-justify text-gray-800";
  p.textContent = stripHtml(value);
  return p;
}

function isLegacyContentNode(el) {
  if (!el) return false;
  if (el.closest("nav, aside, form, table, h1, h2, h3, h4")) return false;
  if (el.closest("[data-cms-added='true'], [data-cms-synced='true']")) return false;
  return true;
}

function hideLegacyContent(sectionEl) {
  Array.from(sectionEl.querySelectorAll("p, li, ul, ol, table")).forEach((el) => {
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
  container.className = "cms-sync-content cms-rich-text space-y-3";

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

function slugify(value = "") {
  return String(value)
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function normalizeBodyItem(item) {
  if (item == null) return "";
  if (typeof item === "string") return item;
  if (item.step && item.description) {
    return `<strong>${item.step}:</strong> ${item.description}`;
  }
  return item.description || item.content || item.text || item.answer || item.title || item.step || "";
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
      if (label && stripHtml(label)) {
        const heading = document.createElement("h4");
        heading.className = "text-base font-semibold text-gray-900 mt-2 mb-2";
        heading.textContent = label;
        parent.appendChild(heading);
      }

      const ul = createBulletList(items, false);
      if (ul) parent.appendChild(ul);
    });
  }
}

function contentHeading(section, fallback = "") {
  return section?.heading || section?.subsectionTitle || section?.title || fallback;
}

const GENERIC_NESTED_TITLES = new Set(["text", "paragraph", "content", "body"]);

function nestedSectionHeading(nestedSection) {
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
  if (icon) headingEl.appendChild(icon);
  headingEl.append(document.createTextNode(` ${heading}`));
}

function syncTextBlocks(sectionEl, section, sectionKey = "") {
  renderSectionContent(sectionEl, section, sectionKey);
}

function renderSectionInto(parent, section, sectionKey = "") {
  renderSectionBody(parent, section, sectionKey);
}

function renderTable(parent, section) {
  const columns = Array.isArray(section.columns) ? section.columns : [];
  const rows = Array.isArray(section.rows) ? section.rows : [];
  if (!columns.length && !rows.length) return;

  const wrapper = document.createElement("div");
  wrapper.className = "overflow-x-auto rounded-xl border border-gray-200";
  const table = document.createElement("table");
  table.className = "w-full text-left text-sm";

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
    h.textContent = heading;
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
    renderSectionInto(sectionEl, section);
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
  sectionEl.style.display = "";
  delete sectionEl.dataset.cmsLegacyHidden;

  const container = document.createElement("div");
  container.dataset.cmsSynced = "true";
  container.className = "cms-sync-content cms-rich-text space-y-4";

  const nested = Array.isArray(section.nestedSections) ? section.nestedSections : [];
  const beforeBody = nested.filter((item) => item.placement === "beforeBody");
  const afterBody = nested.filter((item) => item.placement !== "beforeBody");

  beforeBody.forEach((nestedSection, index) => {
    renderNestedInto(container, nestedSection, index, section);
  });
  renderSectionInto(container, section);
  afterBody.forEach((nestedSection, index) => {
    renderNestedInto(container, nestedSection, index, section);
  });

  if (!container.childElementCount) return;

  setHeading(sectionEl, contentHeading(section));
  clearSyncedContent(sectionEl);
  hideLegacySectionChildren(sectionEl, preserveIds);

  const preserveEl = sectionEl.querySelector("[data-cms-preserve='true']");
  if (preserveEl) {
    sectionEl.insertBefore(container, preserveEl);
  } else {
    sectionEl.appendChild(container);
  }
}

function pageContent(page) {
  return page?.content || page?.sections || null;
}

function customSections(page) {
  const content = pageContent(page);
  return {
    ...(content?.customSections || {}),
    ...(page?.customSections || {}),
  };
}

function addQuickLink(id, label) {
  if (!id || !label) return;
  const nav = Array.from(document.querySelectorAll("aside nav")).find((el) => /quick links/i.test(el.closest("aside")?.textContent || ""));
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

function syncFaqs(page) {
  const content = pageContent(page);
  const faqs = content?.faqs?.body;
  if (!Array.isArray(faqs) || !faqs.length) return;
  const faqRoot = document.getElementById("faqs") || document.getElementById("faq-section");
  if (!faqRoot) return;

  const questionEls = Array.from(faqRoot.querySelectorAll("button span, summary, h3")).filter((el) => stripHtml(el.textContent));
  const answerEls = Array.from(faqRoot.querySelectorAll("p")).filter((el) => stripHtml(el.textContent));

  faqs.forEach((faq, index) => {
    if (questionEls[index]) questionEls[index].textContent = faq.question || faq.title || "";
    if (answerEls[index]) answerEls[index].innerHTML = faq.answer || faq.content || "";
  });
}

export default function FactoryCmsDomSync({ page }) {
  useEffect(() => {
    const content = pageContent(page);
    if (!content) return;
    restoreLegacyContent();
    document.querySelectorAll("[data-cms-added='true'], [data-cms-link], [data-cms-synced='true']").forEach((node) => node.remove());

    const hero = content.hero || {};
    const heroTitle = hero.headline || hero.heading || page.mainHeading || page.title;
    const heroSubtitle = hero.subtext || page.seo?.description;
    const firstH1 = document.querySelector("h1");
    if (firstH1 && heroTitle) firstH1.textContent = heroTitle;
    const heroParagraph = firstH1?.parentElement?.querySelector("p");
    if (heroParagraph && heroSubtitle) heroParagraph.innerHTML = heroSubtitle;

    Object.entries(SECTION_IDS).forEach(([key, ids]) => {
      const contentSection = content[key];
      if (!contentSection) return;
      const sectionEl = ids.map((id) => findSectionElement(id)).find(Boolean);
      if (!sectionEl) return;

      setHeading(sectionEl, contentSection.heading);
      syncTextBlocks(sectionEl, contentSection, key);

      const nested = Array.isArray(contentSection.nestedSections) ? contentSection.nestedSections : [];
      if (nested.length) {
        const container = sectionEl.querySelector("[data-cms-synced='true']") || (() => {
          const el = document.createElement("div");
          el.dataset.cmsSynced = "true";
          el.className = "cms-sync-content cms-rich-text space-y-4";
          sectionEl.appendChild(el);
          return el;
        })();
        nested.forEach((nestedSection, index) => {
          renderNestedInto(container, nestedSection, index, contentSection);
        });
      }
    });

    const mainColumn = findMainContentColumn();
    const cmsCustomSections = customSections(page);
    const orderedCustomKeys = [
      ...(Array.isArray(page.sectionOrder) ? page.sectionOrder : []),
      ...Object.keys(cmsCustomSections),
    ].filter((key, index, arr) => key && arr.indexOf(key) === index);

    orderedCustomKeys.forEach((key) => {
      if (SKIP_RENDER_IDS.has(key) || SECTION_IDS[key]) return;
      const section = cmsCustomSections[key] || content[key];
      if (!section) return;

      const existingEl = findSectionElement(key);
      if (existingEl) {
        syncExistingCustomSection(existingEl, section, new Set(orderedCustomKeys));
        return;
      }

      const added = appendCmsSection({ key, section, targetParent: mainColumn });
      if (added) addQuickLink(added.id, contentHeading(section, key));
    });

    syncFaqs(page);
  }, [page]);

  return null;
}
