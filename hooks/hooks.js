const { BeforeAll, AfterAll, Before, After } = require("@cucumber/cucumber");
const container = require("../di-container");
const Logger = require("../utils/logger");

BeforeAll(async () => {
  await container.initialize();
  Logger.info(`Test execution started at: ${new Date().toString().replace(/\s*\([^)]*\)/g, '')}`);
});

AfterAll(async () => {
  Logger.info(`Test execution finished at: ${new Date().toString().replace(/\s*\([^)]*\)/g, '')}`);
});

Before(async function (scenario) {
  this.testName = scenario.pickle.name.replace(/ /g, "_");
  Logger.info(`Starting scenario: ${this.testName}`);
});

After(async function (scenario) {
  Logger.info(`Finished scenario: ${this.testName}`);

  if (scenario.result.status === "FAILED") {
    Logger.error(`Scenario failed: ${this.testName}`);
  }

  Logger.info(`Scenario status: ${scenario.result.status}`);
});

module.exports = {
  container,
  config: container.get("config"),
};
