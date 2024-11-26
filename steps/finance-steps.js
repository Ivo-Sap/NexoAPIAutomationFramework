const { Given, When, Then, setDefaultTimeout } = require("@cucumber/cucumber");
const { container } = require("../hooks/hooks");
const Util = require("../utils/util");

setDefaultTimeout(600000);

let priceHistory = [];
let durationInSeconds;

When("user records initial price for {string}", async function (pair) {
  priceHistory = [];
  const url = `${container.get("config").baseUrl}/${pair}`;
  const initialPrice = await container.get("financeActions").getPrice(url);
  container.get("scenarioContext").set("initialPrice", initialPrice);
});

When("time interval is {int} minutes", async function (interval) {
  durationInSeconds = interval * 60;
});

When("data for {string} is get every {int} seconds", async function (pair, frequency) {
  const url = `${container.get("config").baseUrl}/${pair}`;
  await container.get("financeActions").collectPriceData(url, durationInSeconds, frequency, priceHistory);
});

Then("the average price deviation from the initial value is less than {float} percent", async function (expectedDeviation) {
  const initialPrice = container.get("scenarioContext").get("initialPrice");
  const deviations = Util.getDeviationsMap(priceHistory, initialPrice);
  await container.get("financeAsserts").assertAveragePriceDeviation(deviations, expectedDeviation);
});

Then("every price deviation from the initial value is less than {float} percent", async function (maxDeviation) {
  const initialPrice = container.get("scenarioContext").get("initialPrice");
  const deviations = Util.getDeviationsMap(priceHistory, initialPrice);
  await container.get("financeAsserts").assertEveryPriceDeviationBelow(deviations, maxDeviation);
});
