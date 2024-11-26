const assert = require("assert");
const BaseAsserts = require("../base-asserts");

class FinanceAsserts extends BaseAsserts {
  async assertAveragePriceDeviation(deviations, expectedDeviation) {
    const averageDeviation = deviations.reduce((a, b) => a + b, 0) / deviations.length;
    assert(Math.abs(averageDeviation) < expectedDeviation, `Expected deviation: ${expectedDeviation}%, but got: ${averageDeviation.toFixed(2)}%`);
  }

  async assertEveryPriceDeviationBelow(deviations, maxDeviation) {
    const allBelowMaxDeviation = deviations.every((dev) => Math.abs(dev) < maxDeviation);
    assert(allBelowMaxDeviation, `Not all deviations are less than ${maxDeviation}%`);
  }
}

module.exports = FinanceAsserts;
