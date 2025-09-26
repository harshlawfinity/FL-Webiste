"use client";

import { useEffect, useRef, useState } from "react";
import Head from "next/head";
import { FaPlus, FaMinus } from "react-icons/fa";
// (Optional) Keep the renderer import if you still want it as a fallback.
// import EditorJsRenderer from "./EditorJsRenderer";
import BlogSidebarContactForm from "./BlogSidebarContactForm";
import { AiOutlineLike, AiTwotoneLike } from "react-icons/ai";
import { FaRegCopy, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
import { FaRegShareFromSquare } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";

/* =========================
   Helpers
   ========================= */

// Convert Editor.js data -> HTML (supports common blocks & images)
function editorJsToHtml(data) {
  if (!data || !Array.isArray(data.blocks)) return "";

  const esc = (s) =>
    String(s ?? "")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");

  const listItemsToHtml = (items = []) => {
    // items can be strings OR objects with { content, items }
    return items
      .map((it) => {
        if (typeof it === "string") return `<li>${it}</li>`;
        if (it && typeof it === "object") {
          const inner = it.content ?? "";
          const nested =
            Array.isArray(it.items) && it.items.length
              ? `<ul>${listItemsToHtml(it.items)}</ul>`
              : "";
          return `<li>${inner}${nested}</li>`;
        }
        return "";
      })
      .join("");
  };

  let html = "";
  let h2Counter = 0; // Counter for H2 headings

  for (const block of data.blocks) {
    const t = block?.type;
    const d = block?.data || {};

    switch (t) {
      case "paragraph":
        html += `<p>${d.text ?? ""}</p>`;
        break;
      case "header":
        const level = d.level || 2;
        const text = d.text ?? "";

        // Add ID to H2 headings for navigation
        if (level === 2) {
          h2Counter++;
          const id = `heading-${h2Counter}`;
          html += `<h${level} id="${id}">${text}</h${level}>`;
        } else {
          html += `<h${level}>${text}</h${level}>`;
        }
        break;
      case "list": {
        const tag = d.style === "ordered" ? "ol" : "ul";
        html += `<${tag}>${listItemsToHtml(d.items || [])}</${tag}>`;
        break;
      }
      case "quote":
        html += `<blockquote>${d.text ?? ""}</blockquote>`;
        break;
      case "code":
        html += `<pre><code>${esc(d.code ?? "")}</code></pre>`;
        break;
      case "image": {
        const src = d.file?.url || d.url || "";
        const alt = esc(d.caption || "");
        if (src) html += `<img src="${src}" alt="${alt}" />`;
        break;
      }
      case "table": {
        const rows = Array.isArray(d.content) ? d.content : [];
        const rowsHtml = rows
          .map((row) => {
            const cells = Array.isArray(row) ? row : [];
            return `<tr>${cells.map((c) => `<td>${c}</td>`).join("")}</tr>`;
          })
          .join("");
        html += `<table><tbody>${rowsHtml}</tbody></table>`;
        break;
      }
      case "delimiter":
        html += `<hr />`;
        break;
      default:
        // Fallback: if there's text, keep it
        if (typeof d.text === "string" && d.text.trim()) {
          html += `<p>${d.text}</p>`;
        }
    }
  }

  return html;
}

// Enhanced HTML processing to add IDs to H2 tags
function processHtmlWithIds(html) {
  if (!html) return html;

  let h2Counter = 0;
  return html.replace(/<h2([^>]*)>(.*?)<\/h2>/gi, (match, attrs, content) => {
    h2Counter++;
    const id = `heading-${h2Counter}`;

    // Check if ID already exists in attributes
    if (attrs.includes("id=")) {
      return match;
    }

    return `<h2${attrs} id="${id}">${content}</h2>`;
  });
}

// Extract H2 headings for table of contents
function extractH2Headings(html) {
  if (!html) return [];

  const headings = [];
  const h2Regex = /<h2[^>]*id="([^"]*)"[^>]*>(.*?)<\/h2>/gi;
  let match;

  while ((match = h2Regex.exec(html)) !== null) {
    const id = match[1];
    const text = match[2].replace(/<[^>]*>/g, ""); // Strip HTML tags
    headings.push({ id, text });
  }

  return headings;
}

// Robustly read Editor.js data from blog.content / blog.blocks
function extractEditorData(blog, cutoffIso = "2025-09-09T11:09:48.673Z") {
  const CUTOFF_DATE = new Date(cutoffIso);

  // 1) Explicit blocks saved after cutoff
  if (blog?.blocks && new Date(blog.createdAt) >= CUTOFF_DATE) {
    return { blocks: blog.blocks };
  }

  // 2) content is already Editor.js object
  if (
    blog?.content &&
    typeof blog.content === "object" &&
    Array.isArray(blog.content.blocks)
  ) {
    return blog.content;
  }

  // 3) content is a JSON string (Editor.js)
  if (typeof blog?.content === "string") {
    try {
      const maybe = JSON.parse(blog.content);
      if (maybe && Array.isArray(maybe.blocks)) return maybe;
    } catch {
      // not JSON -> treat as HTML elsewhere
    }
  }

  return null;
}

// Legacy HTML getter
function extractHtml(blog) {
  return typeof blog?.content === "string" ? blog.content : null;
}

// Normalize to a single HTML string for rendering
function getNormalizedHtml(blog) {
  const ed = extractEditorData(blog);
  if (ed) {
    const html = editorJsToHtml(ed);
    return processHtmlWithIds(html);
  }

  const html = extractHtml(blog);
  if (html) {
    return processHtmlWithIds(html);
  }

  return ""; // nothing
}

// Read-time helpers
function extractTextFromEditorJs(data) {
  try {
    if (!data) return "";
    const blocks = Array.isArray(data?.blocks) ? data.blocks : [];
    const parts = [];
    for (const block of blocks) {
      const t = block?.type;
      const d = block?.data || {};

      if (t === "paragraph" || t === "header" || t === "quote") {
        if (typeof d.text === "string") parts.push(d.text);
      } else if (t === "list" && Array.isArray(d.items)) {
        // items can be strings or objects with { content }
        const flat = d.items
          .map((it) => (typeof it === "string" ? it : it?.content ?? ""))
          .filter(Boolean);
        parts.push(flat.join(" "));
      } else if (t === "table" && Array.isArray(d.content)) {
        for (const row of d.content) {
          if (Array.isArray(row)) parts.push(row.join(" "));
        }
      } else if (t === "code" && typeof d.code === "string") {
        parts.push(d.code);
      } else if (typeof d.text === "string") {
        parts.push(d.text);
      }
    }
    return parts.join(" ");
  } catch {
    return "";
  }
}

function countWords(str) {
  if (!str) return 0;
  const cleaned = String(str)
    .replace(/<[^>]*>/g, " ")
    .replace(/&[^;]+;/g, " ")
    .trim();
  if (!cleaned) return 0;
  return cleaned.split(/\s+/).filter(Boolean).length;
}

/* =========================
   UI Components
   ========================= */

function FaqItem({ faq }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-gray-200 rounded-md">
      <button
        onClick={() => setOpen(!open)}
        className="flex justify-between items-center w-full px-4 py-3  hover:bg-gray-50"
      >
        <span className="font-medium text-gray-800">{faq.question}</span>
        <span className="text-blue-600">{open ? <FaMinus /> : <FaPlus />}</span>
      </button>
      {open && (
        <div className="px-4 pb-4 text-gray-700 text-sm">{faq.answer}</div>
      )}
    </div>
  );
}

// Table of Contents Component
function TableOfContents({ headings, activeId }) {
  const scrollToHeading = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -100; // Offset for fixed header
      const y =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  if (!headings || headings.length === 0) {
    return null;
  }

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-4  top-32 ">
      <h3 className="font-semibold text-gray-900 mb-3 text-sm">
        Table of Contents
      </h3>
      <nav>
        <ul className="space-y-2">
          {headings.map((heading) => (
            <li key={heading.id}>
              <button
                onClick={() => scrollToHeading(heading.id)}
                className={`text-left text-sm hover:text-blue-600 transition-colors duration-200 block w-full p-1 rounded ${
                  activeId === heading.id
                    ? "text-blue-600 bg-blue-50 font-medium"
                    : "text-gray-700"
                }`}
              >
                {heading.text}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default function BlogsClientUI({ blog }) {
  const [currentUrl, setCurrentUrl] = useState("");
  const hasTrackedRef = useRef(false);
  const [mounted, setMounted] = useState(false);
  const [likes, setLikes] = useState(blog.likes || 0);
  const [hasLiked, setHasLiked] = useState(false);
  const [isCommenting, setIsCommenting] = useState(false);
  const [comments, setComments] = useState([]);
  const [copied, setCopied] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [readTime, setReadTime] = useState(null);
  const [activeHeadingId, setActiveHeadingId] = useState("");

  console.log(blog);

  const BLOG_WEBSITE_URL =
    process.env.BLOG_WEBSITE_URL ||
    "https://internal-panel-3e873.ondigitalocean.app";

  useEffect(() => {
    setMounted(true);

    if (typeof window !== "undefined") {
      setCurrentUrl(window.location.href);
    }

    if (!hasTrackedRef.current) {
      fetch(
        `${BLOG_WEBSITE_URL}/api/public/blog/by-slug/${blog.urlSlug}/views`,
        {
          method: "POST",
        }
      );
      hasTrackedRef.current = true;
    }

    const liked = localStorage.getItem(`liked-${blog.urlSlug}`);
    if (liked) {
      setHasLiked(true);
    }
  }, [blog.urlSlug]);

  useEffect(() => {
    const fetchComments = async () => {
      const res = await fetch(
        `${BLOG_WEBSITE_URL}/api/public/blog/by-slug/${blog.urlSlug}/comments?approved=1`
      );
      const data = await res.json();
      if (Array.isArray(data)) {
        setComments(data);
      }
    };
    fetchComments();
  }, [blog.urlSlug]);

  // Read time that works for both Editor.js & HTML
  useEffect(() => {
    try {
      const html = extractHtml(blog);
      if (html) {
        const extra = [blog.title, blog.metaDescription]
          .filter(Boolean)
          .join(" ");
        const totalWords = countWords(`${extra} ${html}`);
        const minutes = Math.max(1, Math.ceil(totalWords / 200));
        setReadTime(minutes);
      } else {
        const editorData = extractEditorData(blog);
        if (editorData) {
          const bodyText = extractTextFromEditorJs(editorData);
          const extra = [blog.title, blog.metaDescription]
            .filter(Boolean)
            .join(" ");
          const totalWords = countWords(`${extra} ${bodyText}`);
          const minutes = Math.max(1, Math.ceil(totalWords / 200));
          setReadTime(minutes);
        } else {
          setReadTime(null);
        }
      }
    } catch {
      setReadTime(null);
    }
  }, [blog]);

  // Intersection Observer for active heading tracking
  useEffect(() => {
    if (!mounted) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveHeadingId(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-120px 0px -70% 0px", // top offset for fixed navbar
        threshold: 0.3, // more reliable than 0.1
      }
    );

    // Observe all H2 elements
    const h2Elements = document.querySelectorAll("h2[id]");
    h2Elements.forEach((el) => observer.observe(el));

    return () => {
      h2Elements.forEach((el) => observer.unobserve(el));
    };
  }, [mounted]);

  const handleLike = async () => {
    try {
      const res = await fetch(
        `${BLOG_WEBSITE_URL}/api/public/blog/by-slug/${blog.urlSlug}/like`,
        { method: "POST" }
      );

      if (!res.ok) throw new Error("Like request failed");

      const data = await res.json();
      setLikes(data.likes);
      localStorage.setItem(`liked-${blog.urlSlug}`, "true");
      setHasLiked(true);
    } catch (err) {
      console.error(err);
      alert("Failed to like the blog.");
    }
  };

  const handleCommentSubmit = async (e) => {
    setIsSubmitting(true);
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get("user");
    const email = "";
    const content = formData.get("content");

    const res = await fetch(
      `${BLOG_WEBSITE_URL}/api/public/blog/by-slug/${blog.urlSlug}/comments`,
      {
        method: "POST",
        body: JSON.stringify({ name, email, content }),
        headers: { "Content-Type": "application/json" },
      }
    );
    if (res.ok) {
      setShowPopup(true);
      e.target.reset();
      setIsSubmitting(false);
    } else {
      alert("Failed to submit comment.");
      setIsSubmitting(false);
    }
  };

  if (!mounted) return null;

  function optimizeCloudinary(url, width = 800) {
    if (!url || !url.includes("res.cloudinary.com")) return url;
    return url.replace("/upload/", `/upload/f_auto,q_auto,w_${width}/`);
  }

  // 🔥 One normalized HTML for everything (shows images inline)
  const htmlToRender = getNormalizedHtml(blog);
  const headings = extractH2Headings(htmlToRender);

  function optimizeInlineImages(html) {
    if (!html) return html;
    return html.replace(
      /<img([^>]*)src="([^"]+)"([^>]*)>/gi,
      (match, before, url, after) => {
        const optimized = optimizeCloudinary(url, 900);
        return `<img${before}src="${optimized}"${after} loading="lazy" style="max-width:100%;height:auto;border-radius:6px" />`;
      }
    );
  }

  return (
    <div className="min-h-screen text-justify md:mt-20 mt-20">
      <Head>
        <title>{blog.metaTitle}</title>
        <meta name="description" content={blog.metaDescription} />
        <meta property="og:title" content={blog.metaTitle} />
        <meta property="og:description" content={blog.metaDescription} />
        <meta property="og:image" content={blog.image} />
        <meta
          property="og:url"
          content={`https://internal-panel-3e873.ondigitalocean.app/blog/${blog.urlSlug}`}
        />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="Lawfinity" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={blog.metaTitle} />
        <meta name="twitter:description" content={blog.metaDescription} />
        <meta name="twitter:image" content={blog.image} />
      </Head>

      {/* Hero Section */}
      <section className="relative w-full max-w-7xl mx-auto overflow-hidden">
        {/* 16:9 box */}
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 md:mt-10 mt-0 flex flex-col relative lg:flex-row gap-8">
        <div className="w-full lg:w-3/4">
          <div className="my-4">
            {(blog.category || blog.subCategory || blog.subSubCategory) && (
              <nav
                aria-label="Breadcrumb"
                className="flex flex-wrap items-center gap-2 mb-3"
              >
                {[
                  { label: "Home", href: "/" },
                  { label: "Blogs", href: "/blogs" },
                  blog.category && { label: blog.category },
                  blog.subCategory && { label: blog.subCategory },
                  blog.subSubCategory && { label: blog.subSubCategory },
                ]
                  .filter(Boolean)
                  .map((item, idx) => (
                    <div key={idx} className="flex items-center">
                      {idx > 0 && <span className="px-2 text-gray-400">›</span>}
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-blue-600 hover:underline"
                        >
                          {item.label}
                        </a>
                      ) : (
                        <span>{item.label}</span>
                      )}
                    </div>
                  ))}
              </nav>
            )}

            <p className="md:text-sm text-xs text-gray-700 mb-4">
              ✍️ {blog.author || "Team Factory Licence"} •{" "}
              {new Date(blog.createdAt).toLocaleDateString("en-GB", {
                day: "2-digit",
                month: "short",
                year: "numeric",
              })}
              {typeof readTime === "number" && <> • {readTime} min read</>}
            </p>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold mb-4">{blog.title}</h1>

          <aside className="w-full lg:w-1/4 block lg:hidden  top-20">
            {/* Desktop Table of Contents & Contact Form: only show on lg and up */}
            <div className="">
              <TableOfContents headings={headings} activeId={activeHeadingId} />
            </div>
          </aside>

          {/* Cover image */}
          {/* Cover image */}
          {blog.image && (
            <div className="w-full my-6">
              <img
                src={optimizeCloudinary(blog.image, 1200)}
                alt={blog.title}
                loading="lazy"
                className="w-full h-auto object-cover rounded-md"
              />
            </div>
          )}

          {/* 👇 Always render normalized HTML (shows inline images too) */}
          {htmlToRender ? (
            <div
              className="prose max-w-none"
              dangerouslySetInnerHTML={{
                __html: optimizeInlineImages(htmlToRender),
              }}
            />
          ) : null}
        </div>

  <aside className="w-full lg:w-1/4 hidden lg:block right-0 lg:mt-6 lg:sticky lg:top-32">
    {/* Desktop Table of Contents & Contact Form: only show on lg and up */}
    <div className="z-10 sticky top-32">
      <TableOfContents headings={headings} activeId={activeHeadingId} />
      <BlogSidebarContactForm />
    </div>
     
  </aside>
      </div>

      {/* Connected Services */}
      {blog.connectedServices?.length > 0 && (
        <section className="max-w-7xl mx-auto py-10 px-4">
          <h2 className="text-2xl font-medium mb-4">Connected Services</h2>
          <ul className="list-disc list-inside">
            {blog.connectedServices.map((service, index) => (
              <li key={index}>
                <a
                  href={service.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline"
                >
                  {service.name}
                </a>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Mobile Table of Contents & Contact Form: show above FAQs, only on mobile (lg:hidden) */}
      <div className="lg:hidden max-w-7xl mx-auto px-4">
        <div className="mb-6">
          <BlogSidebarContactForm />
        </div>
        <div className="mb-8"></div>
      </div>

      {/* FAQs */}
      {blog.faqs?.length > 0 && (
        <section className="max-w-7xl mx-auto py-10 px-4">
          <h2 className="text-2xl font-medium mb-4">FAQs</h2>
          <div className="space-y-4">
            {blog.faqs.map((faq) => (
              <FaqItem key={faq._id} faq={faq} />
            ))}
          </div>
        </section>
      )}

      {/* Related Blogs */}
      {blog.relatedBlog?.length > 0 && (
        <section className="max-w-7xl mx-auto py-10 px-4">
          <h2 className="text-2xl font-medium mb-4">Related Blogs</h2>
          <ul className="list-disc list-inside">
            {blog.relatedBlog.map((slug, index) => (
              <li key={index}>
                <a href={`/blog/${slug}`} className="text-blue-600 underline">
                  {slug.replace(/-/g, " ")}
                </a>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Like Button */}
      <div className="max-w-7xl mx-auto py-6 px-4">
        <div className="mt-4">
          {hasLiked ? (
            <p className="text-blue-700 font-medium flex gap-3 items-center">
              Liked <AiTwotoneLike />
            </p>
          ) : (
            <button
              onClick={handleLike}
              className="bg-blue-600 hover:bg-blue-700 px-4 py-1 rounded text-white flex gap-3 items-center"
            >
              <AiOutlineLike /> Like ({likes})
            </button>
          )}
        </div>
      </div>

      {/* Share Section */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        <h2 className="text-lg font-medium mb-2">Share this blog</h2>
        <div className="flex gap4 flex-wrap">
          <button
            onClick={() => {
              navigator.clipboard.writeText(currentUrl);
              setCopied(true);
              setTimeout(() => setCopied(false), 2000);
            }}
            className="text-gray-600 text-3xl px-4 py-2 rounded hover:scale-110 flex items-center gap-2"
          >
            <FaRegCopy />
            {copied && (
              <span className="text-green-500 text-xs mt-1 absolute -bottom-4 left-0">
                Copied!
              </span>
            )}
          </button>

          {typeof navigator !== "undefined" && navigator.share && (
            <button
              onClick={() => {
                navigator
                  .share({
                    title: blog.title,
                    text: "Check out this blog!",
                    url: currentUrl,
                  })
                  .catch((err) => console.error("Sharing failed", err));
              }}
              className="text-blue-600 text-3xl px-4 py-2 rounded"
            >
              <FaRegShareFromSquare />
            </button>
          )}

          <a
            href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
              currentUrl
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-800 text-3xl px-4 py-2 rounded"
          >
            <FaFacebook />
          </a>

          <a
            href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
              currentUrl
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 text-3xl px-4 py-2 rounded"
          >
            <FaLinkedin />
          </a>

          <a
            href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
              currentUrl
            )}&text=${encodeURIComponent(blog.title)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 px-4 py-2 rounded text-3xl"
          >
            <FaTwitter />
          </a>
        </div>
      </div>

      {/* Comments */}
      <section className="max-w-7xl mx-auto py-10 px-4">
        <h2 className="text-2xl font-medium mb-4">Comments</h2>

        <div className="space-y-4 mb-8">
          {comments.length > 0 ? (
            comments.map((comment) => (
              <div
                key={comment._id}
                className="border rounded p-4 bg-gray-50 shadow-sm"
              >
                <p className="font-semibold text-gray-800">{comment.name}</p>
                <p className="text-gray-700 mt-1 whitespace-pre-line">
                  {comment.content}
                </p>
              </div>
            ))
          ) : (
            <p className="text-gray-500">No comments yet.</p>
          )}
        </div>

        <form onSubmit={handleCommentSubmit} className="space-y-4">
          <input
            name="user"
            placeholder="Your Name"
            required
            className="w-full px-3 py-2 border rounded"
          />
          <textarea
            name="content"
            placeholder="Your Comment"
            required
            className="w-full px-3 py-2 border rounded"
          />
          <button
            type="submit"
            disabled={isSubmitting}
            className={`px-4 py-2 rounded text-white ${
              isSubmitting
                ? "bg-blue-300 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            {isSubmitting ? "Submitting..." : "Submit Comment"}
          </button>
        </form>
      </section>

      {showPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
          <div className="relative">
            <p
              onClick={() => setShowPopup(false)}
              className="absolute text-red-500 top-0 right-0 p-4 text-2xl cursor-pointer"
            >
              <IoClose />
            </p>
            <div className="bg-white rounded-lg shadow-lg p-6 max-w-sm w-full text-center animate-fadeIn">
              <h3 className="text-lg font-semibold mb-2">Thank you!</h3>
              <p className="text-gray-700">
                Your comment has been submitted and will appear shortly.
              </p>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        :global(.prose) {
          color: #0f172a; /* slate-900 */
          line-height: 1.6;
          word-break: break-word;
          font-size: 1rem; /* slightly smaller base font */
        }

        /* Headings */
        :global(.prose h1) {
          font-size: 1.75rem; /* 28px (smaller) */
          line-height: 2.25rem; /* 36px */
          margin: 1.25rem 0 0.75rem;
          font-weight: 800;
          letter-spacing: -0.01em;
        }
        :global(.prose h2) {
          font-size: 1.5rem; /* 24px (smaller) */
          line-height: 2rem; /* 32px */
          margin: 1rem 0 0.5rem;
          font-weight: 700;
          scroll-margin-top: 100px; /* Account for fixed header */
        }
        :global(.prose h3) {
          font-size: 1.25rem; /* 20px (smaller) */
          line-height: 1.75rem; /* 28px */
          margin: 0.75rem 0 0.5rem;
          font-weight: 600;
        }

        /* Paragraphs */
        :global(.prose p) {
          margin: 0.6rem 0;
          color: #0f172a; /* slate-900 */
        }

        /* Links */
        :global(.prose a) {
          color: #2563eb; /* blue-600 */
          text-decoration: underline;
          text-underline-offset: 2px;
        }
        :global(.prose a:hover) {
          opacity: 0.9;
        }

        /* Emphasis & strong */
        :global(.prose em),
        :global(.prose i) {
          font-style: italic;
        }
        :global(.prose strong),
        :global(.prose b) {
          font-weight: 700;
        }

        /* Your existing responsive images */
        :global(.prose img) {
          max-width: 100%;
          height: auto;
          display: block;
          margin: 0.6rem auto;
          border-radius: 0.25rem;
        }

        /* Lists */
        :global(.prose ul) {
          list-style-type: disc !important;
          list-style-position: inside !important;
          padding-left: 1.5rem;
          margin: 0.75rem 0;
        }

        // :global(.prose ol) {
        //   list-style-type: decimal !important;
        //   list-style-position: inside !important;
        //   padding-left: 1.5rem;
        //   margin: 0.75rem 0;
        //   counter-reset: list-counter;
        // }

        // :global(.prose ol li) {
        //   display: list-item !important;
        // }

        :global(.prose li) {
          margin: 0.25rem 0;
        }
      `}</style>
    </div>
  );
}
