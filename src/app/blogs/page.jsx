// PAGINATED BLOGS PAGE (rewritten for robust pagination and filter/search handling)
"use client";
export const dynamic = "force-dynamic";

import { useEffect, useState, useMemo, useRef } from "react";
import { useRouter } from "next/navigation";
import BlogCard from "@/components/BlogCard";
 import Image from "next/image";

const API_BASE = "https://internal-panel-3e873.ondigitalocean.app";

const PAGE_SIZE = 9;

function Page() {
  const router = useRouter();
  // Filters and search
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedSubCategory, setSelectedSubCategory] = useState("All");
  const [selectedSubSubCategory, setSelectedSubSubCategory] = useState("All");
  const [sortBy, setSortBy] = useState("Newest");
  const [filterType, setFilterType] = useState("Most Recent");
  const [searchTerm, setSearchTerm] = useState("");
  const [submittedSearch, setSubmittedSearch] = useState("");

  // Blog data and pagination (new style)
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [totalPages, setTotalPages] = useState(1);

  // Categories
  const [allCategories, setAllCategories] = useState([]);
  const [allSubCategories, setAllSubCategories] = useState([]);

  // For tracking filter/search change to reset page
  const prevFiltersRef = useRef({});

  // --- Cloudinary URL rewrite utility
  function rewriteUrl(url) {
    const CLOUDINARY_OLD_BASE = "https://res.cloudinary.com/dsiifag5u/image/upload/";
    const NEW_URL_BASE = "https://res.cloudinary.com/dsiifag5u/image/upload/";
    if (url && url.startsWith(CLOUDINARY_OLD_BASE)) {
      return url.replace(CLOUDINARY_OLD_BASE, NEW_URL_BASE);
    }
    return url || "/images/default-blog.png";
  }

  // --- Build API URL for pagination and filters
  function buildApiUrl(page) {
    const params = new URLSearchParams({
      page: page.toString(),
      limit: PAGE_SIZE.toString(),
    });
    if (selectedCategory !== "All") params.append("category", selectedCategory);
    if (selectedSubCategory !== "All") params.append("subCategory", selectedSubCategory);
    if (selectedSubSubCategory !== "All") params.append("subSubCategory", selectedSubSubCategory);
    if (submittedSearch.trim()) params.append("searchTerm", submittedSearch.trim());
    if (filterType === "Most Viewed") params.append("filterType", "Most Viewed");
    return `${API_BASE}/api/public/published-fl?${params.toString()}`;
  }

  // --- Fetch blogs based on current page and filters
  async function fetchBlogs(pageNum) {
    setLoading(true);
    try {
      const url = buildApiUrl(pageNum);
      const res = await fetch(url, { cache: "no-store", mode: "cors" });
      if (!res.ok) {
        setBlogs([]);
        setTotal(0);
        setTotalPages(1);
        return;
      }
      const data = await res.json();
      const list = Array.isArray(data?.blogs) ? data.blogs : [];
      console.log(data);
      setTotal(typeof data.total === "number" ? data.total : 0);
      setTotalPages(data.total ? Math.max(1, Math.ceil(data.total / PAGE_SIZE)) : 1);
      setBlogs(
        list.map((blog) => ({
          id: blog._id,
          image: rewriteUrl(blog.image),
          category: blog.category,
          subCategory: blog.subCategory || "",
          subSubCategory: blog.subSubCategory || "",
          date: new Date(blog.createdAt).toLocaleDateString("en-GB", {
            day: "2-digit",
            month: "short",
            year: "numeric",
          }),
          readTime: blog.readTime || undefined,
          title: blog.title,
          summary: blog.metaDescription,
          authorName: blog.author || "Team Factory Licence",
          authorImage: "/authors/default.jpg",
          timestamp: new Date(blog.createdAt).getTime(),
          views: blog.views || 0,
          slug: blog.urlSlug,
          publishAt: blog.publishAt,
        }))
      );
    } catch (e) {
      setBlogs([]);
      setTotal(0);
      setTotalPages(1);
    } finally {
      setLoading(false);
    }
  }

  // --- Fetch categories and subcategories on mount
  useEffect(() => {
    async function fetchCategories() {
      try {
        const res = await fetch(
          `${API_BASE}/api/public/published-fl/all-publshed-blogs-category`,
          { cache: "no-store", mode: "cors" }
        );
        const data = await res.json();
        if (data.success) {
          setAllCategories(
            data.categories.filter(Boolean).length
              ? ["All", ...data.categories.filter(Boolean)]
              : ["All"]
          );
          setAllSubCategories(
            data.subCategories.filter(Boolean).length
              ? ["All", ...data.subCategories.filter(Boolean)]
              : ["All"]
          );
        }
      } catch (err) {
        // ignore error
      }
    }
    fetchCategories();
  }, []);

  // --- Reset page to 1 on any filter/search change and fetch blogs for page 1
  useEffect(() => {
    const prev = prevFiltersRef.current;
    const curr = {
      selectedCategory,
      selectedSubCategory,
      selectedSubSubCategory,
      submittedSearch,
      filterType,
    };
    // If any filter/search changed, reset page to 1 and fetch first page
    if (
      prev.selectedCategory !== undefined &&
      (
        prev.selectedCategory !== curr.selectedCategory ||
        prev.selectedSubCategory !== curr.selectedSubCategory ||
        prev.selectedSubSubCategory !== curr.selectedSubSubCategory ||
        prev.submittedSearch !== curr.submittedSearch ||
        prev.filterType !== curr.filterType
      )
    ) {
      setPage(1);
      fetchBlogs(1);
    }
    prevFiltersRef.current = curr;
    // eslint-disable-next-line
  }, [
    selectedCategory,
    selectedSubCategory,
    selectedSubSubCategory,
    submittedSearch,
    filterType,
  ]);

  // --- Fetch blogs when page changes
  useEffect(() => {
    fetchBlogs(page);
    // eslint-disable-next-line
  }, [page]);

  // --- Sub-subcategory options (from blogs of current page)
  const subSubCategoryOptions = useMemo(() => {
    const set = new Set(
      blogs
        .filter(
          (b) =>
            (selectedCategory === "All" || b.category === selectedCategory) &&
            (selectedSubCategory === "All" || b.subCategory === selectedSubCategory)
        )
        .map((b) => (b.subSubCategory || "").trim())
        .filter(Boolean)
    );
    return ["All", ...Array.from(set).sort()];
  }, [blogs, selectedCategory, selectedSubCategory]);

  // --- Pagination controls helpers (new style)
  function getPageNumbers() {
    const maxVisible = 5;
    let start = Math.max(1, page - 2);
    let end = Math.min(totalPages, start + maxVisible - 1);
    if (end - start < maxVisible - 1) start = Math.max(1, end - maxVisible + 1);
    let pages = [];
    for (let i = start; i <= end; i++) pages.push(i);
    return pages;
  }

  // --- Category/subcategory options
  const categoryOptions = allCategories.length ? allCategories : ["All"];
  const subCategoryOptions = allSubCategories.length ? allSubCategories : ["All"];

  // --- Blog list rendering
  const renderBlogCards = () => {
    if (loading) {
      return Array.from({ length: 6 }).map((_, i) => <SkeletonCard key={i} />);
    }
    if (!blogs.length) {
      return (
        <div className="col-span-full text-center text-gray-500 text-lg py-12">
          No results found.
        </div>
      );
    }
    return blogs.map((post) => (
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
      </div>
    ));
  };

  // Pagination handlers (new style)
  const handlePrevPage = () => {
    if (page > 1) setPage(page - 1);
  };
  const handleNextPage = () => {
    if (page < totalPages) setPage(page + 1);
  };
  const handlePageChange = (num) => {
    if (num !== page) setPage(num);
  };
  const [jumpInput, setJumpInput] = useState("");
  const handleJumpSubmit = (e) => {
    e.preventDefault();
    let val = parseInt(jumpInput, 10);
    if (!isNaN(val)) {
      if (val < 1) val = 1;
      if (val > totalPages) val = totalPages;
      setPage(val);
      setJumpInput("");
    }
  };

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
        visibleCount={blogs.length}
        onClearFilters={() => {
          setSelectedCategory("All");
          setSelectedSubCategory("All");
          setSelectedSubSubCategory("All");
          setSubmittedSearch("");
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-8 grid sm:grid-cols-2 lg:grid-cols-3 mt-10 gap-8">
        {renderBlogCards()}
      </div>

      {/* Pagination Controls (new style) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-16 flex flex-col items-center">
        {totalPages > 1 && (
          <div className="flex flex-col items-center gap-3 w-full">
            <div className="flex items-center gap-2 flex-wrap">
              <button
                className="px-3 py-1 rounded border bg-white text-gray-700 disabled:opacity-50"
                onClick={() => setPage(1)}
                disabled={page === 1}
                aria-label="First page"
              >
                {"<<"}
              </button>
              <button
                className="px-3 py-1 rounded border bg-white text-gray-700 disabled:opacity-50"
                onClick={handlePrevPage}
                disabled={page === 1}
                aria-label="Previous page"
              >
                {"<"}
              </button>
              {getPageNumbers().map((num) => (
                <button
                  key={num}
                  className={`px-3 py-1 rounded border ${
                    num === page
                      ? "bg-purple-500 text-white border-purple-500"
                      : "bg-white text-gray-700"
                  }`}
                  onClick={() => handlePageChange(num)}
                  disabled={num === page}
                  aria-current={num === page ? "page" : undefined}
                >
                  {num}
                </button>
              ))}
              <button
                className="px-3 py-1 rounded border bg-white text-gray-700 disabled:opacity-50"
                onClick={handleNextPage}
                disabled={page === totalPages}
                aria-label="Next page"
              >
                {">"}
              </button>
              <button
                className="px-3 py-1 rounded border bg-white text-gray-700 disabled:opacity-50"
                onClick={() => setPage(totalPages)}
                disabled={page === totalPages}
                aria-label="Last page"
              >
                {">>"}
              </button>
            </div>
            <form className="flex items-center gap-2" onSubmit={handleJumpSubmit}>
              <span className="text-gray-500 text-sm">
                Page {page} of {totalPages}
              </span>
              <input
                type="number"
                min={1}
                max={totalPages}
                value={jumpInput}
                onChange={(e) => setJumpInput(e.target.value)}
                className="w-16 px-2 py-1 border rounded text-sm"
                placeholder="Go to"
              />
              <button
                type="submit"
                className="px-2 py-1 text-sm bg-purple-500 text-white rounded"
                disabled={
                  !jumpInput ||
                  isNaN(parseInt(jumpInput, 10)) ||
                  parseInt(jumpInput, 10) < 1 ||
                  parseInt(jumpInput, 10) > totalPages
                }
              >
                Go
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

// --- Supporting components ---
const BlogHero = ({ searchTerm, setSearchTerm, onSearch }) => (
  <section className="relative flex mt-10 flex-col items-center  justify- center text-  w-full bg-gradient-to-r from-purple-700 to-purple-600 text-white pt-28 pb-20 px-6">
    <div className="max-w-3xl mx-auto relative z-10">
      {/* <span className="inline-block bg-purple-700/60 text-white text-sm px-4 py-1 rounded-full mb-6">
        • Factory licensing &amp; compliance insights
      </span> */}
      <h1 className="text-2xl sm:text-4xl md:text-5xl font-semibold leading-tight mb-4">
        Get your <span className="underline decoration-2">Factory Licence</span> right
      </h1>
      <p className="text-sm sm:text-lg md:text-lg text-purple-100 mb-10">
        Step-by-step guides on Factory Licence registration, Consent to Establish/Operate,
        safety norms, returns &amp; audits—built for manufacturers and facility owners.
      </p>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSearch();
        }}
        className="flex w-full max-w-xl mx-auto bg-white rounded-xl overflow-hidden shadow-lg"
      >
        <input
          type="text"
          placeholder="Search topics: Factory Licence, CTE/CTO, Pollution NOC, safety return"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="flex-1 px-4 py-3 text-sm text-black outline-none"
        />
        <button
          type="submit"
          className="px-6 py-3 text-sm font-medium bg-white text-purple-700 hover:bg-purple-50"
        >
          Search
        </button>
      </form>
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
      <div className="bg-white/90 backdrop-blur">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h2 className="text-xl md:text-2xl font-semibold tracking-tight">
              Browse Articles
            </h2>
          </div>
          <div className="flex items-center flex-wrap md:flex-nowrap gap-3">
            <div className="flex items-center gap-2">
              <span className="text-sm text-zinc-600">Sort</span>
              <div className="flex gap-2">
                <button
                  onClick={() => setFilterType("Most Recent")}
                  className={`px-3 py-1.5 text-sm rounded ${
                    filterType === "Most Recent"
                      ? "bg-purple-600 text-white"
                      : "bg-white text-gray-700 hover:bg-zinc-50"
                  }`}
                >
                  Most Recent
                </button>
                <button
                  onClick={() => setFilterType("Most Viewed")}
                  className={`px-3 py-1.5 text-sm rounded ${
                    filterType === "Most Viewed"
                      ? "bg-purple-600 text-white"
                      : "bg-white text-gray-700 hover:bg-zinc-50"
                  }`}
                >
                  Most Viewed
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Category filters */}
        <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <label className="block">
            <span className="block text-xs font-medium text-zinc-600 mb-1">
              Category
            </span>
            <div className="relative">
              <select
                className="w-full rounded-xl border border-zinc-200 bg-white px-3 py-2 pr-9 text-sm"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                {categoryOptions.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
              <span className="pointer-events-none absolute inset-y-0 right-2 flex items-center pr-1 text-zinc-500">
                ▾
              </span>
            </div>
          </label>
          <label className="block">
            <span className="block text-xs font-medium text-zinc-600 mb-1">
              Subcategory
            </span>
            <div className="relative">
              <select
                className="w-full rounded-xl border border-zinc-200 bg-white px-3 py-2 pr-9 text-sm"
                value={selectedSubCategory}
                onChange={(e) => setSelectedSubCategory(e.target.value)}
                disabled={subCategoryOptions.length <= 1}
              >
                {subCategoryOptions.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
              <span className="pointer-events-none absolute inset-y-0 right-2 flex items-center pr-1 text-zinc-500">
                ▾
              </span>
            </div>
          </label>
        </div>

        {/* Clear filters */}
        <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap gap-2">
            {hasActiveFilters && (
              <button
                onClick={onClearFilters}
                className="text-sm font-medium text-zinc-700 underline underline-offset-4"
              >
                Clear filters
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const SkeletonCard = () => (
  <div className="rounded-xl overflow-hidden bg-white shadow-sm animate-pulse">
    <div className="h-52 w-full bg-gray-200" />
    <div className="p-4 space-y-3">
      <div className="h-3 w-3/4 bg-gray-200 rounded" />
      <div className="h-4 w-full bg-gray-200 rounded" />
      <div className="h-4 w-5/6 bg-gray-200 rounded" />
      <div className="h-3 w-1/3 bg-gray-200 rounded mt-3" />
    </div>
  </div>
);

export default Page;