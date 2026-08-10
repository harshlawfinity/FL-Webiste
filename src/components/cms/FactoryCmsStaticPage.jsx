import Link from "next/link";

function pageContent(page) {
  return page?.content || page?.sections || null;
}

function normalizeTextList(value) {
  if (Array.isArray(value)) return value.filter(Boolean);
  if (typeof value === "string" && value.trim()) return [value];
  return [];
}

function normalizeFields(fields) {
  if (Array.isArray(fields)) {
    return fields
      .map((field) => ({
        label: field?.label || "",
        value: field?.value || "",
      }))
      .filter((field) => field.label || field.value);
  }

  return Object.entries(fields || {}).map(([label, value]) => ({
    label,
    value,
  }));
}

function hasHtml(value = "") {
  return /<[a-z][\s\S]*>/i.test(String(value));
}

const CMS_RICH_TEXT_CLASS =
  "cms-rich-text text-left md:text-justify text-base leading-relaxed space-y-4 [&_h2]:text-2xl [&_h2]:md:text-4xl [&_h2]:font-bold [&_h2]:leading-tight [&_h2]:text-[#7A3EF2] [&_h2]:mt-10 [&_h2]:mb-5 [&_h2]:text-left [&_h3]:text-xl [&_h3]:md:text-2xl [&_h3]:font-bold [&_h3]:text-[#7A3EF2] [&_h3]:mt-8 [&_h3]:mb-3 [&_h3]:border-l-4 [&_h3]:border-[#7A3EF2] [&_h3]:pl-4 [&_h4]:text-lg [&_h4]:font-semibold [&_h4]:text-gray-900 [&_h4]:mt-6 [&_h4]:mb-2 [&_p]:mb-4 [&_p:last-child]:mb-0 [&_a]:text-blue-600 [&_a]:font-semibold [&_a]:underline [&_strong]:font-bold [&_b]:font-bold [&_em]:italic [&_i]:italic [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:space-y-2 [&_li]:leading-relaxed [&_table]:w-full [&_table]:border-collapse [&_table]:my-6 [&_th]:bg-[#7A3EF2] [&_th]:text-white [&_th_*]:text-white [&_th]:font-semibold [&_th]:border [&_th]:border-[#7A3EF2] [&_th]:p-3 [&_td]:border [&_td]:border-gray-200 [&_td]:p-3";

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

function CmsRichBlock({ html, className = "" }) {
  const value = String(html || "").trim();
  if (!value) return null;

  if (hasHtml(value)) {
    return (
      <div
        className={`${CMS_RICH_TEXT_CLASS} ${className}`.trim()}
        dangerouslySetInnerHTML={{ __html: normalizeCmsBodyHtml(value) }}
      />
    );
  }

  return <p className={`text-left md:text-justify text-base leading-relaxed ${className}`.trim()}>{value}</p>;
}

function normalizeBreadcrumbs(page, content) {
  const items = content?.breadcrumbs || page?.breadcrumbs;
  if (!Array.isArray(items) || !items.length) return null;

  return items
    .map((item) => ({
      label: item?.text || item?.label || "",
      href: item?.link || item?.href || item?.url || "",
    }))
    .filter((item) => item.label);
}

export default function FactoryCmsStaticPage({ page, fallbackTitle }) {
  const content = pageContent(page);
  if (!content) return null;

  const hero = content.hero || {};
  const introduction = content.introduction || {};
  const sections = Array.isArray(content.sections) ? content.sections : [];
  const contentBody = typeof content.contentBody === "string" ? content.contentBody.trim() : "";
  const breadcrumbs = normalizeBreadcrumbs(page, content);
  const title = hero.title || hero.heading || hero.headline || page?.title || fallbackTitle;
  const subtitle =
    hero.subtitle ||
    hero.subheading ||
    hero.subtext ||
    hero.subheadline ||
    introduction.content ||
    introduction.text ||
    page?.seo?.description ||
    "";

  return (
    <main className="mt-20 bg-white">
      <section className="bg-gradient-to-br from-[#7A3EF2] to-[#a674f7] text-white md:py-32 py-20 md:px-0 px-4">
        <div className="max-w-7xl mx-auto">
          <nav className="mb-4 text-sm text-purple-100 font-medium">
            {breadcrumbs?.length ? (
              breadcrumbs.map((item, index) => {
                const isLast = index === breadcrumbs.length - 1;
                return (
                  <span key={`${item.label}-${index}`}>
                    {index > 0 ? " >> " : null}
                    {isLast || !item.href ? (
                      <span className="text-white">{item.label}</span>
                    ) : (
                      <Link href={item.href} className="hover:text-white cursor-pointer">
                        {item.label}
                      </Link>
                    )}
                  </span>
                );
              })
            ) : (
              <>
                <Link href="/" className="hover:text-white cursor-pointer">
                  Home
                </Link>
                {" >> "}
                <span className="text-white">{title}</span>
              </>
            )}
          </nav>
          <h1 className="text-4xl md:text-5xl font-semibold leading-tight mb-5">
            {title}
          </h1>
          {subtitle && !hasHtml(subtitle) ? (
            <p className="max-w-4xl text-base md:text-lg leading-relaxed text-purple-50">
              {subtitle}
            </p>
          ) : subtitle ? (
            <div
              className="max-w-4xl text-base md:text-lg leading-relaxed text-purple-50 cms-rich-text [&_p]:mb-0"
              dangerouslySetInnerHTML={{ __html: subtitle }}
            />
          ) : null}
        </div>
      </section>

      <section className="max-w-7xl mx-auto text-gray-800 py-10 md:px-0 px-4">
        {contentBody ? (
          <div
            id="cms-unified-body"
            className={CMS_RICH_TEXT_CLASS}
            dangerouslySetInnerHTML={{ __html: normalizeCmsBodyHtml(contentBody) }}
          />
        ) : (
          <>
        {introduction.heading ? (
          <h2 className="text-2xl capitalize font-semibold text-[#7A3EF2] mb-6">
            {introduction.heading}
          </h2>
        ) : null}

        {normalizeTextList(introduction.content || introduction.text).map((paragraph, index) => (
          <CmsRichBlock key={index} html={paragraph} className="mb-6" />
        ))}

        <div className="space-y-10 text-base leading-relaxed">
          {sections.map((section, index) => {
            const fields = normalizeFields(section.fields);
            const paragraphs = normalizeTextList(section.content);

            return (
              <section key={index} className="space-y-4">
                {section.heading ? (
                  <h2 className="text-2xl font-semibold text-[#7A3EF2]">
                    {section.heading}
                  </h2>
                ) : null}

                {paragraphs.map((paragraph, paragraphIndex) => (
                  <CmsRichBlock key={paragraphIndex} html={paragraph} />
                ))}

                {Array.isArray(section.items) && section.items.length ? (
                  <ul className="list-disc pl-6 space-y-2">
                    {section.items.map((item, itemIndex) => (
                      <li key={itemIndex}>{item}</li>
                    ))}
                  </ul>
                ) : null}

                {fields.length ? (
                  <div className="max-w-3xl overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
                    {fields.map((field, fieldIndex) => (
                      <div
                        key={`${field.label}-${fieldIndex}`}
                        className="grid grid-cols-1 gap-1 border-b border-gray-100 px-5 py-4 last:border-b-0 md:grid-cols-2 md:gap-6"
                      >
                        <span className="font-medium text-gray-500">{field.label}</span>
                        <span className="font-semibold text-gray-900">{field.value}</span>
                      </div>
                    ))}
                  </div>
                ) : null}
              </section>
            );
          })}
        </div>
          </>
        )}
      </section>
    </main>
  );
}
