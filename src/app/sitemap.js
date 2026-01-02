const API_BASE = "https://internal.lawfinity.in";

// Helper function to safely fetch JSON data
async function safeFetchJson(url) {
  try {
    const res = await fetch(url, {
      cache: "no-store",
      next: { revalidate: 3600 }, // Revalidate every hour
    });
    if (!res.ok) return null;

    const ct = res.headers.get("content-type") || "";
    if (!ct.includes("application/json")) {
      return null;
    }
    return await res.json();
  } catch (error) {
    console.error("Error fetching sitemap data:", error);
    return null;
  }
}

// Function to fetch ALL blogs using pagination
async function fetchAllBlogs() {
  const allBlogs = [];
  let page = 1;
  let hasMore = true;
  const pageSize = 50; // Fetch 50 blogs per request

  try {
    while (hasMore) {
      const url = `${API_BASE}/api/public/published-lf?page=${page}&limit=${pageSize}`;
      const blogData = await safeFetchJson(url);

      if (!blogData) {
        break;
      }

      // Handle different response structures
      const blogs = Array.isArray(blogData)
        ? blogData
        : Array.isArray(blogData?.blogs)
        ? blogData.blogs
        : Array.isArray(blogData?.data)
        ? blogData.data
        : [];

      if (blogs.length === 0) {
        hasMore = false;
      } else {
        allBlogs.push(...blogs);

        // Check if we've fetched all blogs
        const total = blogData.total || 0;
        if (allBlogs.length >= total) {
          hasMore = false;
        } else {
          page++;
        }
      }

      // Safety limit to prevent infinite loops (max 1000 blogs)
      if (allBlogs.length >= 1000) {
        console.warn("Reached maximum blog limit for sitemap (1000)");
        hasMore = false;
      }
    }

    console.log(`Fetched ${allBlogs.length} blogs for sitemap`);
    return allBlogs;
  } catch (error) {
    console.error("Error fetching all blogs for sitemap:", error);
    return allBlogs; // Return whatever we've fetched so far
  }
}

// Main sitemap generation function
export default async function sitemap() {
  const baseUrl = "https://factorylicence.in"; // Replace with your actual domain

  // Static routes - these are your fixed pages
  const staticRoutes = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blogs`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms-conditions`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/refund-cancellation`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/payments`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
  ];

  // Service pages - Factory Licence
  const factoryLicenceRoutes = [
    {
      url: `${baseUrl}/factory-licence-in-delhi`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/factory-licence-in-haryana`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/factory-licence-in-uttar-pradesh`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
  ];

  // Service pages - Fire NOC
  const fireNocRoutes = [
    {
      url: `${baseUrl}/fire-noc-in-delhi`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/fire-noc-in-haryana`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/fire-noc-in-uttar-pradesh`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
  ];

  // Service pages - Pollution NOC
  const pollutionNocRoutes = [
    {
      url: `${baseUrl}/pollution-noc-in-delhi`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/pollution-noc-in-haryana`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/pollution-noc-in-uttar-pradesh`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
  ];

  // Fetch dynamic blog routes - now fetches ALL blogs using pagination
  let blogRoutes = [];
  try {
    const blogs = await fetchAllBlogs();

    blogRoutes = blogs
      .filter((blog) => blog && blog.urlSlug)
      .map((blog) => ({
        url: `${baseUrl}/blogs/${blog.urlSlug}`,
        lastModified: blog.updatedAt
          ? new Date(blog.updatedAt)
          : new Date(blog.createdAt || Date.now()),
        changeFrequency: "weekly",
        priority: 0.7,
      }));
  } catch (error) {
    console.error("Error fetching blog routes for sitemap:", error);
  }

  // Combine all routes
  return [
    ...staticRoutes,
    ...factoryLicenceRoutes,
    ...fireNocRoutes,
    ...pollutionNocRoutes,
    ...blogRoutes,
  ];
}
