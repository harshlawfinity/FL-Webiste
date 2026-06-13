const API_BASE = "https://internal.lawfinity.in";

export async function fetchPublishedBlogs() {
  const res = await fetch(`${API_BASE}/api/public/published-fl?limit=1000`, {
    cache: "no-store",
  });

  if (!res.ok) return null;

  const data = await res.json();
  return Array.isArray(data?.blogs) ? data.blogs : [];
}

export async function getBlogBySlug(slug) {
  const blogs = await fetchPublishedBlogs();
  if (!blogs) return null;
  return blogs.find((blog) => blog?.urlSlug === slug) || null;
}
