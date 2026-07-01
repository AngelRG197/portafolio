/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  output: 'export',
  basePath: isProd ? '/portafolio' : '',
  assetPrefix: isProd ? '/portafolio' : '',
  env: {
    NEXT_PUBLIC_BASE_PATH: isProd ? '/portafolio' : '',
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

