"use client";

import React from "react";

// Utility: Clean inline HTML but allow safe tags
function cleanHtml(html = "") {
  if (!html) return "";

  // Remove script/style/iframe blocks
  const withoutScripts = html.replace(
    /<(script|style|iframe)[\s\S]*?>[\s\S]*?<\/\1>/gi,
    ""
  );

  // Allow only a whitelist of safe tags (including <a>)
  const allowedTags = /<\/?(a|b|strong|i|em|u|p|br|ul|ol|li|blockquote|h[1-6]|table|tr|td|th)>/i;

  return withoutScripts
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/<br\s*\/?>/gi, "<br/>")
    // Strip any tag not in whitelist; for allowed tags strip attributes.
    // For <a>, keep only a safe href + add target/rel.
    .replace(/<\/?([a-z][a-z0-9]*)\b[^>]*>/gi, (tag, name) => {
      const lower = String(name || "").toLowerCase();

      // Allow sanitized <a> tags with safe href only
      if (lower === "a") {
        // Closing </a>
        if (/^<\//.test(tag)) return "</a>";

        // Extract href (double or single quoted)
        const hrefMatch = tag.match(/href\s*=\s*("([^"]*)"|'([^']*)')/i);
        const rawHref = hrefMatch ? (hrefMatch[2] || hrefMatch[3] || "") : "";

        // Allow only http, https, mailto, tel
        const safeHref = /^(https?:|mailto:|tel:)/i.test(rawHref) ? rawHref : "#";

        return `<a href="${safeHref}" target="_blank" rel="noopener noreferrer">`;
      }

      // For other allowed tags, strip attributes and keep the tag
      if (allowedTags.test(`<${lower}>`)) {
        return /^<\//.test(tag) ? `</${lower}>` : `<${lower}>`;
      }

      // Strip any disallowed tag
      return "";
    })
    .trim();
}

// Utility: Clean raw text (for headings/quotes, keep plain)
function cleanText(input = "") {
  return String(input || "")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/<br\s*\/?>/gi, " ")
    .replace(/<[^>]+>/g, "") // strip all tags
    .replace(/\s+/g, " ")
    .trim();
}

// ✅ Main Read-Only Renderer Component
export default function EditorJsRenderer({ content }) {
  if (!content || !content.blocks) return null;

  function decodeHtmlEntities(str) {
    if (typeof window !== "undefined") {
      const txt = document.createElement("textarea");
      txt.innerHTML = str;
      return txt.value;
    }
    return str;
  }

  return (
    <div className="max-w-6xl mx-auto space-y-6 text-gray-800 [&_a]:text-blue-600 [&_a]:underline">
      {content.blocks.map((block) => {
        const { type, data, id } = block;

        switch (type) {
          case "header": {
            const Tag = `h${data.level || 2}`;
            const sizes = {
              1: "text-4xl",
              2: "text-3xl",
              3: "text-2xl",
              4: "text-xl",
              5: "text-lg",
              6: "text-base",
            };
            const text = decodeHtmlEntities(cleanText(data.text));
            if (!text) return null;
            return (
              <Tag
                key={id}
                className={`${sizes[data.level] || "text-xl"} font-medium mt-6`}
              >
                {text}
              </Tag>
            );
          }

          case "paragraph": {
            const cleaned = cleanHtml(data.text);
            if (!cleaned) return null;
            return (
              <div
                key={id}
                className="text-base leading-relaxed"
                dangerouslySetInnerHTML={{ __html: cleaned }}
              />
            );
          }

          case "list": {
            if (!Array.isArray(data.items)) return null;

            const items = data.items
              .map((item) => {
                if (typeof item === "string") return cleanText(item);
                if (typeof item === "object" && item.content)
                  return cleanText(item.content);
                if (typeof item === "object" && item.text)
                  return cleanText(item.text);
                return "";
              })
              .filter(Boolean);

            if (!items.length) return null;

            const Tag = data.style === "ordered" ? "ol" : "ul";
            const listClass =
              data.style === "ordered"
                ? "list-decimal ml-6 text-base"
                : "list-disc ml-6 text-base";

            return (
              <Tag key={id} className={listClass}>
                {items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </Tag>
            );
          }

          case "image": {
            const url = data?.file?.url || data?.url;
            if (!url) return null;
            return (
              <div key={id} className="my-6">
                <img
                  src={url}
                  alt={data.caption || ""}
                  className="w-full max-h-[500px] object-contain rounded-lg shadow-md"
                />
                {data.caption && (
                  <p className="text-sm text-center text-gray-500 mt-2">
                    {cleanText(data.caption)}
                  </p>
                )}
              </div>
            );
          }

          case "table": {
            if (!Array.isArray(data.content)) return null;
            return (
              <div key={id} className="overflow-x-auto my-6">
                <table className="table-auto w-full border-collapse border border-gray-300 text-sm">
                  <tbody>
                    {data.content.map((row, i) => (
                      <tr key={i} className="even:bg-gray-50">
                        {row.map((cell, j) => (
                          <td key={j} className="border px-4 py-2">
                            {cleanText(cell)}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );
          }

          case "quote": {
            const text = cleanText(data.text);
            if (!text) return null;
            return (
              <blockquote
                key={id}
                className="border-l-4 border-blue-500 pl-4 italic text-gray-700 text-lg bg-blue-50 p-4 rounded"
              >
                {text}
                {data.caption && (
                  <footer className="mt-2 text-sm text-blue-700 font-medium">
                    — {cleanText(data.caption)}
                  </footer>
                )}
              </blockquote>
            );
          }

          default:
            return null;
        }
      })}
    </div>
  );
}