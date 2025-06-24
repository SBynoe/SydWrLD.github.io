import type { NextConfig } from "next";
import next from "next";

const nextConfig: NextConfig = {
  output: 'export',
  reactStrictMode: true,
  distDir: 'dist',
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
