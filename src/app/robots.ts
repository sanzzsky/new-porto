import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  // Null when production has no configured site URL: then the sitemap line is
  // omitted rather than pointing at localhost or a guessed domain.
  const sitemap = absoluteUrl("/sitemap.xml");

  return {
    rules: { userAgent: "*", allow: "/" },
    ...(sitemap && { sitemap }),
  };
}
