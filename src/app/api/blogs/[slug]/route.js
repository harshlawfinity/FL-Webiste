const API_BASE = "https://internal.lawfinity.in";

export async function GET(request, { params }) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;

  try {
    // Try to fetch from the external API
    const res = await fetch(`${API_BASE}/api/public/published-fl`, {
      cache: 'no-store',
    });

    if (!res.ok) {
      return new Response(JSON.stringify({ error: 'Failed to fetch blogs' }), {
        status: 404,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const data = await res.json();
    const blogs = Array.isArray(data?.blogs) ? data.blogs : [];

    // Find the blog with matching slug
    const blog = blogs.find(b => b && b.urlSlug === slug);

    if (!blog) {
      return new Response(JSON.stringify({ error: 'Blog not found' }), {
        status: 404,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    return new Response(JSON.stringify(blog), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('[API] Error fetching blog:', error);
    return new Response(JSON.stringify({ error: 'Internal server error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
