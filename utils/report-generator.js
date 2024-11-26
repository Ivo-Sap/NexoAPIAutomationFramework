const fs = require('fs');
const path = require('path');
const cucumberHtmlReporter = require('cucumber-html-reporter');

const reportFile = path.join(__dirname, "..", 'reports', 'report.html');
const jsonReportFilePath = path.join(__dirname, "..", 'reports', 'cucumber_report.json');

if (!fs.existsSync(path.dirname(reportFile))) {
    fs.mkdirSync(path.dirname(reportFile), { recursive: true });
}

const options = {
    theme: 'bootstrap',
    jsonFile: jsonReportFilePath,
    output: reportFile,
    reportSuiteAsScenarios: true,
    launchReport: true,
    metadata: {
        'App Version': '1.0.0',
        'Test Environment': 'STAGING',
        'Browser': 'Chrome',
        'Platform': 'Windows 10'
    }
};

cucumberHtmlReporter.generate(options);
console.log(`Report generated at: ${reportFile}`);
