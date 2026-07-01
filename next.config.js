/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/portafolio',
  assetPrefix: '/portafolio',
  env: {
    NEXT_PUBLIC_BASE_PATH: '/portafolio',
  },
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
  compress: true,
  poweredByHeader: false,
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
}

module.exports = nextConfig

