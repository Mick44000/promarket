import { guides } from "@/lib/guides";
import { indexableRoutes, site } from "@/lib/site";

export default function sitemap() {
  const staticRoutes = indexableRoutes.map((route) => ({
    url: route.path === "/" ? site.url : `${site.url}${route.path}`,
    lastModified: new Date("2026-10-06"),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
  const articles = guides.map((g) => ({
    url: `${site.url}/guide/${g.slug}`,
    lastModified: new Date(g.date),
    changeFrequency: "monthly",
    priority: 0.8,
  }));
  return [...staticRoutes, ...articles];
}
