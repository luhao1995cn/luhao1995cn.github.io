import type { MetadataRoute } from "next";
import { insights } from "@/data/insights";
import { researchCases } from "@/data/research-cases";
import { siteConfig } from "@/data/site";

export const dynamic = "force-static";

const staticRoutes = ["", "/about", "/research", "/publications", "/experience", "/insights", "/cv", "/contact"];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = staticRoutes.map((route, index) => ({
    url: new URL(`${route || ""}/`, `${siteConfig.url}/`).toString(),
    lastModified: new Date(siteConfig.lastUpdated),
    changeFrequency: (index === 0 ? "monthly" : "yearly") as "monthly" | "yearly",
    priority: index === 0 ? 1 : route === "/research" || route === "/publications" ? 0.9 : 0.7
  }));

  const articlePages = insights.map((insight) => ({
    url: `${siteConfig.url}/insights/${insight.slug}/`,
    lastModified: new Date(insight.date),
    changeFrequency: "yearly" as const,
    priority: 0.65
  }));

  const researchPages = researchCases.map((study) => ({
    url: `${siteConfig.url}/research/${study.slug}/`,
    lastModified: new Date(siteConfig.lastUpdated),
    changeFrequency: "yearly" as const,
    priority: 0.85
  }));

  return [...staticPages, ...researchPages, ...articlePages];
}
