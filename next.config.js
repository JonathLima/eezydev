/** @type {import('next').NextConfig} */
const runtimeCaching = require('next-pwa/cache')

const withPWA = require('next-pwa')({
  pwa: {
    dest: 'public',
    register: true,
    skipWaitings: true,
    runtimeCaching,
    disabled: process.env.NODE_ENV === 'development',
    sw: 'sw.js'
  }
})

module.exports = withPWA({
  reactStrictMode: true
})

module.exports = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        port: '',
        pathname: '/**'
      }
    ]
  },
  i18n: {
    locales: ['pt', 'en'],
    defaultLocale: 'pt'
  },
  compiler: {
    styledComponents: true
  },
  swcMinify: true
}
