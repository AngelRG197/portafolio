/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/Curriculum_duo',
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

