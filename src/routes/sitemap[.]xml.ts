import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { insights } from "@/data/insights-articles";

const BASE_URL = "https://paadvocatesllp.com";

interface SitemapEntry {
  path: string;
  lastmod?: string;
  changefreq?: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority?: string;
}

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const today = new Date().toISOString().slice(0, 10);
        const entries: SitemapEntry[] = [
          { path: "/", lastmod: today, changefreq: "weekly", priority: "1.0" },
          { path: "/about", lastmod: today, changefreq: "monthly", priority: "0.8" },
          { path: "/practice-areas", lastmod: today, changefreq: "monthly", priority: "0.9" },
          { path: "/team", lastmod: today, changefreq: "monthly", priority: "0.8" },
          { path: "/insights", lastmod: today, changefreq: "weekly", priority: "0.8" },
          { path: "/contact", lastmod: today, changefreq: "monthly", priority: "0.8" },
          { path: "/book-consultation", lastmod: today, changefreq: "monthly", priority: "0.7" },
          ...insights.map((a) => ({
            path: `/insights/${a.slug}`,
            lastmod: a.date,
            changefreq: "monthly" as const,
            priority: "0.7",
          })),
        ];

        const urls = entries.map((e) =>
          [
            `  <url>`,
            `    <loc>${BASE_URL}${e.path}</loc>`,
            e.lastmod ? `    <lastmod>${e.lastmod}</lastmod>` : null,
            e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
            e.priority ? `    <priority>${e.priority}</priority>` : null,
            `  </url>`,
          ]
            .filter(Boolean)
            .join("\n"),
        );

        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
          ...urls,
          `</urlset>`,
        ].join("\n");

        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
