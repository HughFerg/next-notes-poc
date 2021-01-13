module.exports = {
  webpack: (config, { isServer }) => {
    // Fixes npm packages that depend on `fs` module
    if (!isServer) {
      config.node = {
        fs: 'empty'
      }
    }
    return config
  },
  serverRuntimeConfig: {
    // Will only be available on the server side
    MONGO_URL: process.env.MONGO_URL,
  },
  publicRuntimeConfig: {
    // Will be available on both server and client
    // staticFolder: '/static',
  },
}
