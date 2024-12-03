import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: 'export',
  assetPrefix: './',
  trailingSlash: true,
};

export default nextConfig;
