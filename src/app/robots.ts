import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://somethingg.co/sitemap.xml",
    host: "https://somethingg.co",
  };
}
