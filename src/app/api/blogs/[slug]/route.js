const API_BASE = "https://internal.lawfinity.in";

export async function GET(request, { params }) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;

  try {
    // Fetch all blogs with a large limit to ensure we get all published blogs
    const res = await fetch(`${API_BASE}/api/public/published-fl?limit=1000`, {
      cache: "no-store",
    });

    if (!res.ok) {
      console.error(`[API] Failed to fetch blogs: ${res.status}`);
      return new Response(JSON.stringify({ error: "Failed to fetch blogs" }), {
        status: 500,
        headers: { "Content-Type": "application/json" },
      });
    }

    const data = await res.json();
    const blogs = Array.isArray(data?.blogs) ? data.blogs : [];

    console.log(`[API] Total blogs fetched: ${blogs.length}`);
    console.log(`[API] Looking for slug: ${slug}`);

    // Find the blog with matching slug
    const blog = blogs.find((b) => b && b.urlSlug === slug);

    if (!blog) {
      console.log(`[API] Blog not found with slug: ${slug}`);
      console.log(
        `[API] Available slugs:`,
        blogs.map((b) => b.urlSlug).join(", "),
      );
      return new Response(JSON.stringify({ error: "Blog not found" }), {
        status: 404,
        headers: { "Content-Type": "application/json" },
      });
    }

    console.log(`[API] Blog found: ${blog.title}`);
    return new Response(JSON.stringify(blog), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("[API] Error fetching blog:", error);
    return new Response(
      JSON.stringify({
        error: "Internal server error",
        message: error.message,
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      },
    );
  }
}
