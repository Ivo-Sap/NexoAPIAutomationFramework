const fs = require('fs');
const path = require('path');

class Logger {
    constructor() {
        this.logFile = path.join(path.join(__dirname, '..'), 'logs', 'test.log');
        if (!fs.existsSync(path.dirname(this.logFile))) {
            fs.mkdirSync(path.dirname(this.logFile), { recursive: true });
        }
    }

    log(message) {
        const timestamp = new Date().toISOString();
        fs.appendFileSync(this.logFile, `[${timestamp}] ${message}\n`);
    }

    info(message) {
        this.log(`INFO: ${message}`);
    }

    error(message) {
        this.log(`ERROR: ${message}`);
    }
}

module.exports = new Logger();

