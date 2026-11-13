import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  experimental: {
    // The root layout lives in the [lang] segment, so unmatched URLs (/id/foo)
    // need a global 404 that does not depend on a root app/not-found file.
    globalNotFound: true,
  },
};

export default nextConfig;
