# AbleSpace Playwright Automation

## Overview

This project contains a Playwright end-to-end test for the AbleSpace application. The test uses an existing manually created account to verify login and navigation to the **Caseload** page.

---

## Technologies

* **JavaScript**
* **Playwright**
* **Node.js**
* **dotenv**

---

## Prerequisites

* Node.js and npm installed
* Access to the AbleSpace staging application
* A manually created test account

---

## Installation

Install project dependencies:

```bash
npm install
npx playwright install chromium

```

---

## Configure Credentials

Create a `.env` file in the project root:

```env
BASE_URL=https://staging.ablespace.io
TEST_EMAIL=your_test_account_email
TEST_PASSWORD=your_test_account_password

```

> **Important:** Replace the placeholders with your test account credentials. Do not commit the `.env` file to version control.

---

## Run the Test

Run the test suite in headless mode:

```bash
npx playwright test tests/ablespace-login.spec.js

```

To run with a visible browser:

```bash
npx playwright test tests/ablespace-login.spec.js --headed

```

---

## Test Scenario

1. Open the AbleSpace staging application.
2. Log in using the existing test account.
3. Navigate to **Caseload**.
4. Verify that the **Caseload** page is displayed.

---

## Notes

* Account registration is not automated; the test uses an existing test account.
* Login credentials are loaded from environment variables using dotenv.
* The .env file is excluded from version control via .gitignore to protect credentials.
* Use .env.example as a template to create your local .env file, then provide valid test account credentials before running the test.