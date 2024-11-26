module.exports = {
  default: `
    --require ./steps/*.js
    --require ./hooks/*.js
    --format json:./reports/cucumber_report.json
  `,
};
