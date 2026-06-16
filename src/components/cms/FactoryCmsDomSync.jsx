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

const CMS_RICH_TEXT_CLASS =
  "cms-rich-text text-gray-800 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:space-y-2 [&_li]:leading-relaxed [&_li_p]:inline [&_p]:text-justify [&_p]:mb-3 [&_strong]:font-semibold";

function hasBlockHtml(html = "") {
  return /<(ul|ol|table|div|h[1-6]|blockquote)\b/i.test(String(html));
}

function createContentElement(html) {
  const value = String(html || "").trim();
  if (!value) return null;

  if (hasBlockHtml(value)) {
    const div = document.createElement("div");
    div.className = CMS_RICH_TEXT_CLASS;
    div.innerHTML = value;
    return div;
  }

  const p = document.createElement("p");
  p.className = "text-justify text-gray-800";
  p.innerHTML = value;
  return p;
}

function isLegacyContentNode(el) {
  if (!el) return false;
  if (el.closest("nav, aside, form, table, h1, h2, h3, h4")) return false;
  if (el.closest("[data-cms-added='true'], [data-cms-synced='true']")) return false;
  return true;
}

function hideLegacyContent(sectionEl) {
  Array.from(sectionEl.querySelectorAll("p, li, ul, ol")).forEach((el) => {
    if (!isLegacyContentNode(el)) return;
    el.style.display = "none";
  });
}

function clearSyncedContent(sectionEl) {
  sectionEl?.querySelectorAll("[data-cms-synced='true']").forEach((node) => node.remove());
}

function renderSectionContent(sectionEl, htmlItems) {
  if (!sectionEl || !htmlItems.length) return;

  clearSyncedContent(sectionEl);
  hideLegacyContent(sectionEl);

  const container = document.createElement("div");
  container.dataset.cmsSynced = "true";
  container.className = "cms-sync-content space-y-3";

  htmlItems.forEach((html) => {
    const el = createContentElement(html);
    if (el) container.appendChild(el);
  });

  sectionEl.appendChild(container);
}

function stripHtml(value = "") {
  return String(value).replace(/<[^>]*>/g, "").trim();
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
  return item.description || item.content || item.text || item.answer || item.title || item.step || "";
}

function bodyList(section) {
  if (!section) return [];
  const body = Array.isArray(section.body)
    ? section.body
    : section.body
      ? [section.body]
      : [];
  const categoryItems = Array.isArray(section.categories)
    ? section.categories.flatMap((category) => (
      category.documents ||
      category.criteria ||
      category.items ||
      category.points ||
      []
    ))
    : [];
  const rows = [
    section.introParagraph,
    ...body.map(normalizeBodyItem),
    ...categoryItems.map(normalizeBodyItem),
  ].filter((item) => stripHtml(item));

  const seen = new Set();
  return rows.filter((item) => {
    const key = stripHtml(item).replace(/\s+/g, " ").toLowerCase();
    if (!key || seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

function contentHeading(section, fallback = "") {
  return section?.heading || section?.subsectionTitle || section?.title || fallback;
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

function setHeading(sectionEl, heading) {
  if (!heading || !sectionEl) return;
  const headingEl = sectionEl.querySelector("h1, h2, h3");
  if (!headingEl) return;

  const textNodes = [];
  const walker = document.createTreeWalker(headingEl, NodeFilter.SHOW_TEXT);
  while (walker.nextNode()) {
    if (stripHtml(walker.currentNode.nodeValue)) textNodes.push(walker.currentNode);
  }

  if (textNodes.length) {
    textNodes[textNodes.length - 1].nodeValue = ` ${heading}`;
  } else {
    headingEl.append(document.createTextNode(heading));
  }
}

function syncTextBlocks(sectionEl, htmlItems) {
  renderSectionContent(sectionEl, htmlItems);
}

function renderTextItems(parent, items) {
  items.forEach((html) => {
    const el = createContentElement(html);
    if (el) parent.appendChild(el);
  });
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
      renderTextItems(sectionEl, bodyList(section));
    }
  } else if (section.type === "image") {
    renderImage(sectionEl, section);
  } else {
    renderTextItems(sectionEl, bodyList(section));
  }

  targetParent.appendChild(sectionEl);
  return sectionEl;
}

function appendNestedSections(parentEl, section) {
  const nested = Array.isArray(section?.nestedSections) ? section.nestedSections : [];
  nested.forEach((nestedSection, index) => {
    appendCmsSection({
      key: nestedSection.id || `${sectionIdFor("", section)}-nested-${index}`,
      section: nestedSection,
      targetParent: parentEl,
      nested: true,
    });
  });
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
      const sectionEl = ids.map((id) => document.getElementById(id)).find(Boolean);
      if (!sectionEl) return;

      setHeading(sectionEl, contentSection.heading);
      syncTextBlocks(sectionEl, bodyList(contentSection));
      appendNestedSections(sectionEl, contentSection);
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

      const existingEl = document.getElementById(key);
      if (existingEl) {
        setHeading(existingEl, contentHeading(section));
        renderSectionContent(existingEl, bodyList(section));
        appendNestedSections(existingEl, section);
        return;
      }

      const added = appendCmsSection({ key, section, targetParent: mainColumn });
      if (added) addQuickLink(added.id, contentHeading(section, key));
    });

    syncFaqs(page);
  }, [page]);

  return null;
}
