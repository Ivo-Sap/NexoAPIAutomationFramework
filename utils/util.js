const axios = require("axios");
const cheerio = require("cheerio");

class Util {
  static async waitForSeconds(secondsCount) {
    await new Promise((resolve) => setTimeout(resolve, secondsCount * 1000));
  }

  static getDeviationsMap(priceHistory, initialPrice) {
    return priceHistory.map((price) => ((price - initialPrice) / initialPrice) * 100);
  }

  static async getResponseHTML(url) {
    let response;
    try {
      response = await axios.get(url, {
        headers: {
          "User-Agent": "Mozilla/5.0",
        },
      });
    } catch (error) {
      console.error("Error getting HTML content:", error);
    }
    return response.data;
  }

  static async extractPriceFormHTML(html) {
    let price;
    let priceSelector = "div.YMlKec.fxKbKc";

    try {
      const $ = cheerio.load(html);
      price = $(priceSelector).text();
    } catch (error) {
      console.error("Error fetching the price:", error);
    }

    return price;
  }
}

module.exports = Util;
