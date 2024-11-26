const localConfig = require("./local-configuration");
const stagingConfig = require("./staging-configuration");

class ConfigurationManager {
  static getConfiguration(env) {
    const configurations = {
      local: localConfig,
      staging: stagingConfig,
    };
    return configurations[env] || configurations.local;
  }
}

module.exports = ConfigurationManager;
