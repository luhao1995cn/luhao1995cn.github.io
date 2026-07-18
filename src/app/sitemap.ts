import type { MetadataRoute } from "next";
import { insights } from "@/data/insights";
import { siteConfig } from "@/data/site";

export const dynamic = "force-static";

const staticRoutes = ["", "/about", "/research", "/publications", "/experience", "/insights", "/cv", "/contact"];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = staticRoutes.map((route, index) => ({
    url: `${siteConfig.url}${route}/`.replace(`${siteConfig.url}//`, `${siteConfig.url}/`),
    lastModified: new Date("2026-07-18"),
    changeFrequency: (index === 0 ? "monthly" : "yearly") as "monthly" | "yearly",
    priority: index === 0 ? 1 : route === "/research" || route === "/publications" ? 0.9 : 0.7
  }));

  const articlePages = insights.map((insight) => ({
    url: `${siteConfig.url}/insights/${insight.slug}/`,
    lastModified: new Date(insight.date),
    changeFrequency: "yearly" as const,
    priority: 0.65
  }));

  return [...staticPages, ...articlePages];
}
