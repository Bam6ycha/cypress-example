const { defineConfig } = require('cypress');
const registerReportPortalPlugin = require('@reportportal/agent-js-cypress/lib/plugin');
const rpConfig = require('./rpConfig');

module.exports = defineConfig({
  reporter: '@reportportal/agent-js-cypress',
  reporterOptions: rpConfig,
  e2e: {
    projectId: 'cypressCloudProjectId',
    setupNodeEvents(on, config) {
      return registerReportPortalPlugin(on, config);
    },
  },
});
