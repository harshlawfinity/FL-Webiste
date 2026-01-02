export default function robots() {
  const baseUrl = "https://factorylicence.in"; // Replace with your actual domain

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/admin/", "/thankyou"],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
