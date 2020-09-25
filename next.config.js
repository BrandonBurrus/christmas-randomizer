const withOffline = require('next-offline');

module.exports = withOffline({
  distDir: 'build',
  compress: true,
  devIndicators: {
    autoPrerender: false,
  },
  reactStrictMode: true,
})
