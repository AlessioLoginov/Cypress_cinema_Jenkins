const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    projectId: "gik7a8",
    baseUrl: 'https://qamid.tmweb.ru',
    retries: {
      runMode: 0,
      openMode: 0,
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
