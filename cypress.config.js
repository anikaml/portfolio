const { defineConfig } = require('cypress')

module.exports = defineConfig({
  projectId: 'm8rxd3',
  component: {
    devServer: {
      framework: 'next',
      bundler: 'webpack',
    },
  },
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
  },
})
