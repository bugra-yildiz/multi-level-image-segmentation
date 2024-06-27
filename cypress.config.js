const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "aj6sxq",
  e2e: {
    viewportHeight: 1200,
    viewportWidth: 1700,
    experimentalStudio: true,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});