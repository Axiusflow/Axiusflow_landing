import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://axiusflow.com";

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/dashboard/", "/admin/"], // Add any non-public paths here
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
