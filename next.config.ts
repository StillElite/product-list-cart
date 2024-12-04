import type { NextConfig } from 'next';

const isProduction = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: 'export',
  assetPrefix: '/product-list-cart/',
  basePath: '/product-list-cart',
  trailingSlash: true,
};

export default nextConfig;
