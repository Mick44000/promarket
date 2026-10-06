import { guides } from "@/lib/guides";
import { site } from "@/lib/site";

export default function sitemap() {
  const staticRoutes = ["", "/services", "/methode", "/guide", "/audit", "/instituts"].map((path) => ({
    url: `${site.url}${path || "/"}`,
    lastModified: new Date("2026-10-06"),
    changeFrequency: "weekly",
    priority: path === "" ? 1 : 0.7,
  }));
  const articles = guides.map((g) => ({
    url: `${site.url}/guide/${g.slug}`,
    lastModified: new Date(g.date),
    changeFrequency: "monthly",
    priority: 0.8,
  }));
  return [...staticRoutes, ...articles];
}
