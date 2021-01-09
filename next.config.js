module.exports = {
    serverRuntimeConfig: {
        // Will only be available on the server side
        MONGO_URL: process.env.MONGO_URL,
      },
      publicRuntimeConfig: {
        // Will be available on both server and client
        // staticFolder: '/static',
      },
  }
  