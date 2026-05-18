import type { MetadataRoute } from "next";

const SITE_URL = "https://artaaicommerce.com";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        // Don't index the apply form or the raw video assets
        disallow: ["/apply", "/video-pilot/"],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
