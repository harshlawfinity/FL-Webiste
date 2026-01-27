import { notFound } from 'next/navigation';
import Script from 'next/script';
import BlogsClientUI from '@/components/BlogsClientUI';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

const API_BASE = "https://internal.lawfinity.in"

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
    console.log(`[getBlog] Fetching blog with slug: ${slug}`);
    
    // Use local API route instead of external API
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/api/blogs/${slug}`, {
      cache: 'no-store'
    });
    
    if (!res.ok) {
      console.log(`[getBlog] API returned ${res.status}`);
      return null;
    }

    const blog = await res.json();
    console.log(`[getBlog] Fetched blog:`, blog?.title);
    
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

  return {
    title: rewrittenBlog.metaTitle || rewrittenBlog.title || 'Blog',
    description: rewrittenBlog.metaDescription || '',
    alternates: rewrittenBlog.canonicalUrl ? { canonical: rewrittenBlog.canonicalUrl } : undefined,
    openGraph: {
      title: rewrittenBlog.metaTitle || rewrittenBlog.title || 'Blog',
      description: rewrittenBlog.metaDescription || '',
      url: rewrittenBlog.canonicalUrl || undefined,
      images: rewrittenBlog.image ? [{ url: rewrittenBlog.image }] : undefined,
    },
    robots: {
      index: true,
      follow: true,
    },
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