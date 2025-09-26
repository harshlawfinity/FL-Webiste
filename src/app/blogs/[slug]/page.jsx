import { notFound } from 'next/navigation';
import Script from 'next/script';
import BlogsClientUI from '@/components/BlogsClientUI';

const API_BASE = "https://internal-panel-3e873.ondigitalocean.app"  
 
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

async function safeFetchJson(url, init) {
  try {
    const res = await fetch(url, { cache: 'no-store', ...init });
    if (!res.ok) return null;

    const ct = res.headers.get('content-type') || '';
    if (!ct.includes('application/json')) {
      return null;
    }
    const json = await res.json();

    if (json && typeof json === 'object') {
      if ('data' in json) return json.data;
      if ('blog' in json) return json.blog;
    }
    return json;
  } catch {
    return null;
  }
}

async function getBlog(slug) {
  const data = await safeFetchJson(`${API_BASE}/api/public/published-lf/${slug}`);
  const blog = data || null;
  // URLs ko rewrite karna
  return rewriteImageUrls(blog);
}

export async function generateMetadata({ params }) {
  const blog = await safeFetchJson(`${API_BASE}/api/public/published-lf/${params.slug}`);
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
  };
}

export async function generateStaticParams() {
  const list = await safeFetchJson(`${API_BASE}/api/public/published-lf`);

  const blogs = Array.isArray(list)
    ? list
    : Array.isArray(list?.blogs)
    ? list.blogs
    : Array.isArray(list?.data)
    ? list.data
    : [];

  return blogs
    .filter((b) => b && b.urlSlug)
    .map((b) => ({ slug: b.urlSlug }));
}

export default async function BlogDetails({ params }) {
  const blog = await getBlog(params.slug);
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
      <BlogsClientUI key={blog._id || blog.id || params.slug} blog={blog} />
    </div>
  );
}