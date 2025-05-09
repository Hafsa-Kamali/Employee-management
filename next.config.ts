import { NextConfig } from "next";

const nextConfig = {
  output: "standalone",
  experimental: {
    turbopack: true,
  },
} as any as NextConfig;

export default nextConfig;
