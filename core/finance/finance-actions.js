const BaseActions = require("../base-actions");
const Util = require("../../utils/util");

class FinanceActions extends BaseActions {
  async getPrice(url) {
    const priceHTML = await Util.getResponseHTML(url);
    const priceText = await Util.extractPriceFormHTML(priceHTML);
    const price = parseFloat(priceText.replace(/[^0-9.-]+/g, ""));
    return price;
  }

  async collectPriceData(url, durationInSeconds, frequencyInSeconds, priceHistory) {
    const iterationsCount = durationInSeconds / frequencyInSeconds;
    for (let i = 0; i < iterationsCount; i++) {
      await Util.waitForSeconds(frequencyInSeconds);
      priceHistory.push(await this.getPrice(url));
    }
  }
}

module.exports = FinanceActions;
