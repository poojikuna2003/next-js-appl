import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["image.tmdb.org"], // ✅ Allow TMDB images
  },
  /* config options here */
};

export default nextConfig;

