# Playwright Automation Project

This project contains automated end-to-end tests created using Playwright and TypeScript.

## Tests

The current automation covers the Facebook login and password recovery flow.

### Test 1 - Facebook Login Page

- Opens the Facebook login page
- Verifies the page title
- Verifies the Log In button is visible
- Verifies the Forgot Password option is visible

### Test 2 - Forgot Password Page

- Opens the Facebook login page
- Clicks the Forgot Password option
- Verifies that the password recovery page opens

## Technology

- Playwright
- TypeScript
- Node.js
- GitHub Actions

## How to Run

Install dependencies:

```bash
npm install