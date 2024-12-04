import type { NextConfig } from 'next';

const isProduction = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: 'export',
  assetPrefix: isProduction ? '/product-list-cart/' : undefined, // Adjust for GitHub Pages
  basePath: isProduction ? '/product-list-cart' : '', // Adjust for GitHub Pages
  trailingSlash: true,
};

export default nextConfig;
