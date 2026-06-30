import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: [], // add image domains if needed
    unoptimized: true,
  },
};

export default nextConfig;