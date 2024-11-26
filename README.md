
# Automation Project

This is an automation solution using Node.js, Axios, and Cucumber. </br>

## How to Use

### Prerequisites

- Node.js and npm installed on your machine.

### Installation

1. Clone the repository:
    ```
    git clone https://github.com/Ivo-Sap/NexoAPIAutomationFramework.git
    cd NexoAPIAutomationFramework
    ```

2. Install the dependencies:
    ```
    npm install
    ```

### Running Tests

To execute the tests, select environment using NODE_ENV and run one of the following commands: </br>
Using Windows:</br>
```
set "NODE_ENV=local" && npm test
set "NODE_ENV=staging" && npm test
```
Using Linux/MacOS:</br>
```
NODE_ENV=local npm test
NODE_ENV=staging npm test
```

To generate HTML report after tests execution use:
```
npm run generate-report
```
