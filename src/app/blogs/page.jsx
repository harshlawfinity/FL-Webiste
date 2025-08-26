"use client";
export const dynamic = "force-dynamic";


import { useEffect, useState, useMemo } from "react";
import { useRouter } from "next/navigation";
import BlogCard from "@/components/BlogCard";
import Image from "next/image";

// Estimate read time based on word count (avg 200 wpm)
const getReadTime = (htmlOrText) => {
  if (!htmlOrText) return "1 min read";
  // Strip HTML tags and decode basic entities
  const text = String(htmlOrText)
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/\s+/g, " ")
    .trim();
  const words = text ? text.split(/\s+/).filter(Boolean).length : 0;
  const minutes = Math.max(1, Math.ceil(words / 200));
  return `${minutes} min read`;
};

const Page = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true); // ← shimmer control
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("Newest");
  const [filterType, setFilterType] = useState("Most Recent");
  const [searchTerm, setSearchTerm] = useState("");
  const [submittedSearch, setSubmittedSearch] = useState("");
  const [selectedSubCategory, setSelectedSubCategory] = useState("All");
  const [selectedSubSubCategory, setSelectedSubSubCategory] = useState("All");

  const router = useRouter();

  const BLOG_WEBSITE_URL =
    process.env.BLOG_WEBSITE_URL || "https://lawfinity-blogs-webiste-goyd9.ondigitalocean.app";

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setLoading(true); // ← start shimmer
        const res = await fetch(`${BLOG_WEBSITE_URL}/api/published-fl`, {
          cache: "no-store",
        });
        if (!res.ok) {
          console.error("Failed to fetch blogs:", res.status, res.statusText);
          return;
        }
        const data = await res.json();

        console.log("Fetched blogs data:", data);

        if (data?.success) {
          const list = Array.isArray(data?.data)
            ? data.data
            : Array.isArray(data?.blogs)
            ? data.blogs
            : [];

          const formatted = list.map((blog) => ({
            id: blog._id,
            image: blog.image,
            category: blog.category,
            subCategory: blog.subCategory || "",
            subSubCategory: blog.subSubCategory || "",
            date: new Date(blog.createdAt).toLocaleDateString("en-GB", {
              day: "2-digit",
              month: "short",
              year: "numeric",
            }),
            readTime: getReadTime(blog.content || blog.metaDescription || blog.summary || blog.title),
            title: blog.title,
            summary: blog.metaDescription,
            authorName: blog.author || "Team Lawfinity",
            authorImage: "/authors/default.jpg",
            timestamp: new Date(blog.createdAt).getTime(),
            views: blog.views || 0,
            slug: blog.urlSlug,
            publishAt: blog.publishAt,
          }));

          setBlogs(formatted);
        }
      } catch (err) {
        console.error("Failed to fetch blogs", err);
      } finally {
        setLoading(false); // ← stop shimmer
      }
    };

    fetchBlogs();
  }, [BLOG_WEBSITE_URL]);

  const categoryOptions = useMemo(() => {
    const set = new Set(
      blogs.map((b) => (b.category || "").trim()).filter(Boolean)
    );
    return ["All", ...Array.from(set).sort()];
  }, [blogs]);

  const subCategoryOptions = useMemo(() => {
    const set = new Set(
      blogs
        .filter(
          (b) => selectedCategory === "All" || b.category === selectedCategory
        )
        .map((b) => (b.subCategory || "").trim())
        .filter(Boolean)
    );
    return ["All", ...Array.from(set).sort()];
  }, [blogs, selectedCategory]);

  const subSubCategoryOptions = useMemo(() => {
    const set = new Set(
      blogs
        .filter(
          (b) =>
            (selectedCategory === "All" || b.category === selectedCategory) &&
            (selectedSubCategory === "All" ||
              b.subCategory === selectedSubCategory)
        )
        .map((b) => (b.subSubCategory || "").trim())
        .filter(Boolean)
    );
    return ["All", ...Array.from(set).sort()];
  }, [blogs, selectedCategory, selectedSubCategory]);

  const filteredPosts = useMemo(() => {
    let filtered = blogs;

    if (selectedCategory !== "All") {
      filtered = filtered.filter((post) => post.category === selectedCategory);
    }
    if (selectedSubCategory !== "All") {
      filtered = filtered.filter(
        (post) => post.subCategory === selectedSubCategory
      );
    }
    if (selectedSubSubCategory !== "All") {
      filtered = filtered.filter(
        (post) => post.subSubCategory === selectedSubSubCategory
      );
    }

    if (submittedSearch.trim() !== "") {
      const term = submittedSearch.toLowerCase();
      filtered = filtered.filter(
        (post) =>
          post.title.toLowerCase().includes(term) ||
          (post.summary || "").toLowerCase().includes(term) ||
          (post.category || "").toLowerCase().includes(term) ||
          (post.subCategory || "").toLowerCase().includes(term) ||
          (post.subSubCategory || "").toLowerCase().includes(term)
      );
    }

    if (filterType === "Most Viewed") {
      filtered = filtered.sort((a, b) => b.views - a.views);
    } else {
      filtered =
        sortBy === "Newest"
          ? filtered.sort((a, b) => b.timestamp - a.timestamp)
          : filtered.sort((a, b) => a.timestamp - b.timestamp);
    }

    return filtered;
  }, [
    blogs,
    selectedCategory,
    sortBy,
    submittedSearch,
    filterType,
    selectedSubCategory,
    selectedSubSubCategory,
  ]);

  return (
    <div>
      <BlogHero
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        onSearch={() => setSubmittedSearch(searchTerm)}
      />

      <BlogHeader
        selectedCategory={selectedCategory}
        setSelectedCategory={(val) => {
          setSelectedCategory(val);
          setSelectedSubCategory("All");
          setSelectedSubSubCategory("All");
        }}
        selectedSubCategory={selectedSubCategory}
        setSelectedSubCategory={(val) => {
          setSelectedSubCategory(val);
          setSelectedSubSubCategory("All");
        }}
        selectedSubSubCategory={selectedSubSubCategory}
        setSelectedSubSubCategory={setSelectedSubSubCategory}
        categoryOptions={categoryOptions}
        subCategoryOptions={subCategoryOptions}
        subSubCategoryOptions={subSubCategoryOptions}
        sortBy={sortBy}
        setSortBy={setSortBy}
        filterType={filterType}
        setFilterType={setFilterType}
        visibleCount={filteredPosts.length}
        onClearFilters={() => {
          setSelectedCategory("All");
          setSelectedSubCategory("All");
          setSelectedSubSubCategory("All");
          setSubmittedSearch("");
        }}
      />

      {/* Blog Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-16 grid sm:grid-cols-2 lg:grid-cols-3 mt-10 gap-8">
        {loading ? (
          // Shimmer placeholders
          Array.from({ length: 6 }).map((_, i) => <SkeletonCard key={i} />)
        ) : filteredPosts.length > 0 ? (
          filteredPosts.map((post) => (
            <div key={post.id} className="cursor-pointer group mt-4">
              <div onClick={() => router.push(`/blogs/${post.slug}`)}>
                <BlogCard
                  image={post.image}
                  category={post.category}
                  date={post.date}
                  readTime={post.readTime}
                  title={post.title}
                  summary={post.summary}
                  authorName={post.authorName}
                  views={post.views}
                />
              </div>
              {/* Category chips under the card */}
              {/* <div className="flex flex-wrap gap-2 mt-2">
                {post.category ? (
                  <span className="inline-block text-xs px-2 py-1 rounded-full bg-zinc-100 text-zinc-700 border">
                    {post.category}
                  </span>
                ) : null}
                {post.subCategory ? (
                  <span className="inline-block text-xs px-2 py-1 rounded-full bg-zinc-100 text-zinc-700 border">
                    {post.subCategory}
                  </span>
                ) : null}
                {post.subSubCategory ? (
                  <span className="inline-block text-xs px-2 py-1 rounded-full bg-zinc-100 text-zinc-700 border">
                    {post.subSubCategory}
                  </span>
                ) : null}
              </div> */}
            </div>
          ))
        ) : (
          <div className="col-span-full text-center text-gray-500 text-lg py-12">
            No results found.
          </div>
        )}
      </div>
    </div>
  );
};

// --------------------- Components ---------------------

const BlogHero = ({ searchTerm, setSearchTerm, onSearch }) => (
  <section className="relative w-full overflow-hidden pt-24 sm:pt-28 text-white bg-gradient-to-br from-[#4C1D95] via-[#6D28D9] to-[#8B5CF6]">
    {/* Decorative blobs (hide on small screens) */}
    <div className="pointer-events-none hidden sm:block absolute -top-24 -right-20 h-80 w-80 rounded-full bg-white/10 blur-3xl" />
    <div className="pointer-events-none hidden sm:block absolute -bottom-24 -left-20 h-96 w-96 rounded-full bg-fuchsia-300/20 blur-3xl" />

    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-14 sm:py-20 flex flex-col md:flex-row items-start md:items-center gap-8 sm:gap-12">
      {/* Copy */}
      <div className="w-full md:max-w-2xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur border border-white/20 text-xs md:text-sm">
          <span className="h-2 w-2 rounded-full bg-fuchsia-300 inline-block" />
          Factory licensing & compliance insights
        </div>

        <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight tracking-tight">
          Get your <span className="underline decoration-fuchsia-300/60 decoration-4 underline-offset-8">Factory Licence</span> right
        </h1>
        <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-white/80 max-w-xl">
          Step‑by‑step guides on Factory Licence registration, Consent to Establish/Operate, safety norms, returns & audits—built for manufacturers and facility owners.
        </p>

        {/* Search */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            onSearch();
          }}
          className="mt-6 sm:mt-8 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-2  grid-cols-1  flex gap-2 shadow-[0_10px_30px_rgba(0,0,0,0.25)] w-full"
        >
          <div className="flex items-center gap-2 p x-3">
            
          </div>
          <input
            type="text"
            placeholder="Search topics: Factory Licence, CTE/CTO, Pollution NOC, safety returns…"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="text-white placeholder-white/60 bg-transparent px-0 sm:px-1 py-3 text-sm md:text-base outline-none w-full"
            aria-label="Search blog"
          />
          <button
            type="submit"
            className="w-full sm:w-auto md:px-4 px-0 py-3 text-sm md:text-base font-medium rounded-xl bg-white text-violet-800 hover:bg-fuchsia-50 active:scale-[0.99] transition"
          >
            Search
          </button>
        </form>
      </div>

      {/* Right side card (optional content area) */}
      <div className="hidden md:block w-full md:w-[40%]" />
    </div>
  </section>
);

const BlogHeader = ({
  selectedCategory,
  setSelectedCategory,
  selectedSubCategory,
  setSelectedSubCategory,
  selectedSubSubCategory,
  setSelectedSubSubCategory,
  categoryOptions,
  subCategoryOptions,
  subSubCategoryOptions,
  sortBy,
  setSortBy,
  filterType,
  setFilterType,
  visibleCount,
  onClearFilters,
}) => {
  const hasActiveFilters =
    selectedCategory !== "All" ||
    selectedSubCategory !== "All" ||
    selectedSubSubCategory !== "All";

  return (
  <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-8">
    {/* Filter Card */}
    <div className="rounded-2xl border border-violet-200/60 bg-gradient-to-br from-white to-violet-50/60 shadow-[0_10px_30px_rgba(139,92,246,0.15)]">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 p-4 md:p-6">
        <div>
          <h2 className="text-xl md:text-2xl font-semibold tracking-tight text-violet-900">
            Filter Guides
          </h2>
          <p className="text-xs md:text-sm text-violet-700/70 mt-1">Narrow by category, sort, and more.</p>
        </div>

        {/* Meta actions */}
        <div className="flex items-center flex-wrap md:flex-nowrap gap-3">
          <span className="text-sm text-violet-800/80 bg-violet-100/70 px-3 py-1 rounded-full">
            Showing <span className="font-semibold text-violet-900">{visibleCount}</span> result{visibleCount === 1 ? "" : "s"}
          </span>
          <div className="hidden md:block h-5 w-px bg-violet-200" />

          {/* Sort controls (mobile: select, desktop: segmented) */}
          <div className="flex items-center gap-2">
            <span className="text-sm text-violet-800/80">Sort</span>

            {/* Mobile select */}
            <div className="md:hidden relative">
              <select
                className="appearance-none rounded-lg border border-violet-200 bg-white px-3 py-2 pr-9 text-sm focus:outline-none focus:ring-4 focus:ring-violet-100 focus:border-violet-300"
                value={filterType}
                onChange={(e) => setFilterType(e.target.value)}
                aria-label="Sort posts"
              >
                <option value="Most Recent">Most Recent</option>
                <option value="Most Viewed">Most Viewed</option>
              </select>
              <span className="pointer-events-none absolute inset-y-0 right-2 flex items-center pr-1 text-violet-500">▾</span>
            </div>

            {/* Desktop segmented control */}
            <div className="hidden md:flex items-center">
              <div className="inline-flex rounded-lg overflow-hidden border border-violet-200 bg-white" role="tablist" aria-label="Sort posts">
                <button
                  onClick={() => setFilterType("Most Recent")}
                  className={`px-3 py-1.5 text-sm transition focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-300 ${
                    filterType === "Most Recent"
                      ? "bg-violet-600 text-white"
                      : "hover:bg-violet-50 text-violet-800"
                  }`}
                  aria-pressed={filterType === "Most Recent"}
                  role="tab"
                  aria-selected={filterType === "Most Recent"}
                >
                  Most Recent
                </button>
                <button
                  onClick={() => setFilterType("Most Viewed")}
                  className={`px-3 py-1.5 text-sm transition border-l border-violet-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-300 ${
                    filterType === "Most Viewed"
                      ? "bg-violet-600 text-white"
                      : "hover:bg-violet-50 text-violet-800"
                  }`}
                  aria-pressed={filterType === "Most Viewed"}
                  role="tab"
                  aria-selected={filterType === "Most Viewed"}
                >
                  Most Viewed
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Controls Grid */}
      <div className="px-4 md:px-6 pb-4 md:pb-6">
        <div className="mt-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Category */}
          <label className="block">
            <span className="block text-xs font-medium text-violet-800 mb-1">Category</span>
            <div className="relative">
              <select
                className="w-full appearance-none rounded-xl border border-violet-200 bg-white px-3 py-2 pr-9 text-sm focus:outline-none focus:ring-4 focus:ring-violet-100 focus:border-violet-300"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                aria-label="Category filter"
              >
                {categoryOptions.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
              <span className="pointer-events-none absolute inset-y-0 right-2 flex items-center pr-1 text-violet-500">▾</span>
            </div>
          </label>

          {/* Sub Category */}
          <label className="block">
            <span className="block text-xs font-medium text-violet-800 mb-1">Subcategory</span>
            <div className="relative">
              <select
                className="w-full appearance-none rounded-xl border border-violet-200 bg-white px-3 py-2 pr-9 text-sm focus:outline-none focus:ring-4 focus:ring-violet-100 focus:border-violet-300 disabled:bg-violet-50 disabled:text-violet-400"
                value={selectedSubCategory}
                onChange={(e) => setSelectedSubCategory(e.target.value)}
                disabled={subCategoryOptions.length <= 1}
                aria-label="Subcategory filter"
              >
                {subCategoryOptions.map((opt) => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
              <span className="pointer-events-none absolute inset-y-0 right-2 flex items-center pr-1 text-violet-500">▾</span>
            </div>
          </label>

          {/* Sub-Sub Category (kept hidden in code above; keeping grid spacing consistent) */}
          <div className="hidden lg:block" />
        </div>
      </div>

      {/* Active filters + Clear */}
      <div className="px-4 md:px-6 pb-5">
        <div className="mt-2 flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap gap-2">
            {selectedCategory !== "All" && (
              <button
                onClick={() => setSelectedCategory("All")}
                className="inline-flex items-center gap-1 rounded-full border border-violet-200 bg-violet-50 px-3 py-1 text-xs text-violet-800 hover:bg-violet-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-300"
              >
                <span className="font-medium">Category:</span> {selectedCategory}
                <span aria-hidden>×</span>
              </button>
            )}
            {selectedSubCategory !== "All" && (
              <button
                onClick={() => setSelectedSubCategory("All")}
                className="inline-flex items-center gap-1 rounded-full border border-violet-200 bg-violet-50 px-3 py-1 text-xs text-violet-800 hover:bg-violet-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-300"
              >
                <span className="font-medium">Sub:</span> {selectedSubCategory}
                <span aria-hidden>×</span>
              </button>
            )}
            {selectedSubSubCategory !== "All" && (
              <button
                onClick={() => setSelectedSubSubCategory("All")}
                className="inline-flex items-center gap-1 rounded-full border border-violet-200 bg-violet-50 px-3 py-1 text-xs text-violet-800 hover:bg-violet-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-300"
              >
                <span className="font-medium">Sub‑sub:</span> {selectedSubSubCategory}
                <span aria-hidden>×</span>
              </button>
            )}
          </div>

          <div className="flex items-center gap-2">
            {hasActiveFilters && (
              <button
                onClick={onClearFilters}
                className="text-sm font-medium text-violet-800 hover:text-violet-900 underline underline-offset-4"
              >
                Clear filters
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

/** Skeleton shimmer that matches BlogCard's layout */
const SkeletonCard = () => (
  <div className="rounded-xl overflow-hidden bg-white shadow-sm animate-pulse">
    {/* image area */}
    <div className="h-52 w-full bg-gray-200" />

    <div className="p-4 space-y-3">
      {/* meta line */}
      <div className="h-3 w-3/4 bg-gray-200 rounded" />
      {/* title */}
      <div className="h-4 w-full bg-gray-200 rounded" />
      <div className="h-4 w-5/6 bg-gray-200 rounded" />
      {/* author row */}
      <div className="h-3 w-1/3 bg-gray-200 rounded mt-3" />
    </div>
  </div>
);

export default Page;
