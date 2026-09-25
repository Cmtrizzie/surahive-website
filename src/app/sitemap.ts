import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

/**
 * XML sitemap — exactly the nine public routes of the initial build.
 */
export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/products",
    "/platform",
    "/developers",
    "/about",
    "/responsible-ai",
    "/contact",
    "/privacy",
    "/terms",
  ];

  return routes.map((route) => ({
    url: `${siteConfig.domain}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
