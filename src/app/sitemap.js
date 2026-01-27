const API_BASE = "https://internal.lawfinity.in";

// Helper function to safely fetch JSON data
async function safeFetchJson(url) {
  try {
    const res = await fetch(url, {
      next: { revalidate: 3600 }, // Cache and revalidate every hour
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

// Function to fetch ALL blogs using parallel requests for better performance
async function fetchAllBlogs() {
  const pageSize = 100; // Increased page size for fewer requests
  const firstUrl = `${API_BASE}/api/public/published-fl?page=1&limit=${pageSize}`;

  try {
    const firstPageData = await safeFetchJson(firstUrl);
    if (!firstPageData) return [];

    const blogs = Array.isArray(firstPageData)
      ? firstPageData
      : Array.isArray(firstPageData?.blogs)
        ? firstPageData.blogs
        : Array.isArray(firstPageData?.data)
          ? firstPageData.data
          : [];

    const total = firstPageData.total || blogs.length;
    const allBlogs = [...blogs];

    if (total > pageSize) {
      const remainingPages = Math.ceil(Math.min(total, 1000) / pageSize);
      const promises = [];

      for (let page = 2; page <= remainingPages; page++) {
        const url = `${API_BASE}/api/public/published-fl?page=${page}&limit=${pageSize}`;
        promises.push(safeFetchJson(url));
      }

      const results = await Promise.all(promises);
      results.forEach((pageData) => {
        if (pageData) {
          const pageBlogs = Array.isArray(pageData)
            ? pageData
            : Array.isArray(pageData?.blogs)
              ? pageData.blogs
              : Array.isArray(pageData?.data)
                ? pageData.data
                : [];
          allBlogs.push(...pageBlogs);
        }
      });
    }

    console.log(`Fetched ${allBlogs.length} blogs for sitemap`);
    return allBlogs;
  } catch (error) {
    console.error("Error fetching all blogs for sitemap:", error);
    return [];
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
