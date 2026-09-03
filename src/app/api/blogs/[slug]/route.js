const API_BASE = "https://internal.lawfinity.in";import { getBlogBySlug } from "@/lib/blogs";

export async function GET(request, { params }) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;

  try {
    const blog = await getBlogBySlug(slug);

    if (!blog) {
      console.log(`[API] Blog not found with slug: ${slug}`);
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
