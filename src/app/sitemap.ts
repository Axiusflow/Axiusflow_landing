import { MetadataRoute } from "next";
import { ogImageUrl, siteUrl } from "@/lib/seo";

const integrationSlugs = [
  "interactive-brokers",
  "ninjatrader",
  "tradestation",
  "webull",
  "coinbase",
];

const personaSlugs = [
  "day-traders",
  "futures-traders",
  "prop-firm-traders",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const core: MetadataRoute.Sitemap = [
    {
      url: siteUrl,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1.0,
      images: [ogImageUrl],
    },
    {
      url: `${siteUrl}/pricing`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${siteUrl}/vs/tradezella`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${siteUrl}/security`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${siteUrl}/changelog`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${siteUrl}/story`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${siteUrl}/contact`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    },
  ];

  const integrations: MetadataRoute.Sitemap = integrationSlugs.map((slug) => ({
    url: `${siteUrl}/integrations/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const personas: MetadataRoute.Sitemap = personaSlugs.map((slug) => ({
    url: `${siteUrl}/for/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const legal: MetadataRoute.Sitemap = [
    { url: `${siteUrl}/terms`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${siteUrl}/privacy`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${siteUrl}/disclaimer`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${siteUrl}/cookies`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
  ];

  return [...core, ...integrations, ...personas, ...legal];
}
