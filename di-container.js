const FinanceActions = require("./core/finance/finance-actions");
const FinanceAsserts = require("./core/finance/finance-asserts");
const BaseActions = require("./core/base-actions");
const BaseAsserts = require("./core/base-asserts");
const ConfigurationManager = require("./configurations/configuration-manager");
const ScenarioContext = require("./contexts/scenario-context");
const GlobalContext = require("./contexts/global-context");

class DIContainer {
  constructor() {
    this.instances = new Map();
  }

  register(name, dependency) {
    if (!this.instances.has(name)) {
      this.instances.set(name, dependency);
    }
  }

  get(name) {
    return this.instances.get(name);
  }

  getInstancesAsObject() {
    const obj = {};
    for (const [key, value] of this.instances.entries()) {
      obj[key] = value;
    }
    return obj;
  }

  async initialize() {
    const config = ConfigurationManager.getConfiguration(process.env.NODE_ENV || "local");

    this.register("config", config);
    this.register("scenarioContext", new ScenarioContext());
    this.register("globalContext", new GlobalContext());
    this.register("baseActions", new BaseActions());
    this.register("baseAsserts", new BaseAsserts());
    this.register("financeActions", new FinanceActions());
    this.register("financeAsserts", new FinanceAsserts());
  }
}

const container = new DIContainer();
module.exports = container;
