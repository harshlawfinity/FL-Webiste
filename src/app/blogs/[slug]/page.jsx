import { notFound } from 'next/navigation';
import Script from 'next/script';
import BlogsClientUI from '@/components/BlogsClientUI';
import { getBlogBySlug, getBlogRobots } from '@/lib/blogs';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

// Naya function jo saare URLs ko rewrite karega
const rewriteImageUrls = (blog) => {
  if (!blog) return null;

  const CLOUDINARY_OLD_BASE = 'https://res.cloudinary.com/dsiifag5u/image/upload/';
  const NEW_URL_BASE = 'https://res.cloudinary.com/dsiifag5u/image/upload/';

  const rewriteUrl = (url) => {
    if (url && url.startsWith(CLOUDINARY_OLD_BASE)) {
      return url.replace(CLOUDINARY_OLD_BASE, NEW_URL_BASE);
    }
    return url;
  };

  // Rewrite cover image URL
  blog.image = rewriteUrl(blog.image);

  // Rewrite URLs inside the blocks array
  if (blog.blocks && blog.blocks.blocks) {
    blog.blocks.blocks.forEach(block => {
      if (block.type === 'image' && block.data && block.data.file && block.data.file.url) {
        block.data.file.url = rewriteUrl(block.data.file.url);
      }
    });
  }

  return blog;
};

async function getBlog(slug) {
  try {
    const blog = await getBlogBySlug(slug);
    if (!blog) return null;
    return rewriteImageUrls(blog);
  } catch (e) {
    console.error(`[getBlog] Error fetching blog:`, e);
    return null;
  }
}

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const blog = await getBlog(resolvedParams.slug);
  
  if (!blog) return {};

  // URLs ko rewrite karna metadata ke liye
  const rewrittenBlog = rewriteImageUrls(blog);
  // Self-referencing canonical when CRM hasn't set one — every page should emit
  // a canonical tag (resolved to an absolute URL via the root layout's metadataBase).
  const canonical = rewrittenBlog.canonicalUrl || `/blogs/${resolvedParams.slug}`;

  return {
    title: rewrittenBlog.metaTitle || rewrittenBlog.title || 'Blog',
    description: rewrittenBlog.metaDescription || '',
    alternates: { canonical },
    openGraph: {
      title: rewrittenBlog.metaTitle || rewrittenBlog.title || 'Blog',
      description: rewrittenBlog.metaDescription || '',
      url: canonical,
      images: rewrittenBlog.image ? [{ url: rewrittenBlog.image }] : undefined,
    },
    // CRM's noIndex/noFollow must reach the live <meta name="robots"> tag —
    // previously hardcoded to index/follow regardless of what CRM set.
    robots: getBlogRobots(rewrittenBlog),
  };
}

// Static params generation disabled - route is force-dynamic
// export async function generateStaticParams() {
//   const list = await safeFetchJson(`${API_BASE}/api/public/published-fl`);
//
//   const blogs = Array.isArray(list)
//     ? list
//     : Array.isArray(list?.blogs)
//       ? list.blogs
//       : Array.isArray(list?.data)
//         ? list.data
//         : [];
//
//   return blogs
//     .filter((b) => b && b.urlSlug)
//     .map((b) => ({ slug: b.urlSlug }));
// }

export default async function BlogDetails({ params }) {
  const resolvedParams = await params;
  const blog = await getBlog(resolvedParams.slug);
  if (!blog) return notFound();

  return (
    <div>
      <Script async src="https://www.googletagmanager.com/gtag/js?id=AW-17199345901" />
      <Script id="gtag-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-17199345901');
        `}
      </Script>
      <BlogsClientUI key={blog._id || blog.id || resolvedParams.slug} blog={blog} />
    </div>
  );
}