import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: 'export',
  assetPrefix: './',
  trailingSlash: true,
  basePath: '/product-list-cart', // Add your repo name here
};

export default nextConfig;
