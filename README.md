Playwright Automation & AI Agent Demo

A Playwright and TypeScript-based test automation project demonstrating UI automation, CI execution, and exploration of AI-assisted test automation.

Tech Stack

- Playwright
- TypeScript
- Node.js
- GitHub Actions
- AI-assisted test automation

Automation Coverage

The project currently includes automated scenarios for:

- Login
- Forgot Password

The tests are implemented using Playwright with TypeScript.

AI Agent Exploration

This repository also contains a small AI-agent proof of concept exploring how AI can support the QA automation workflow.

Current Concept

The agent takes a test scenario written in natural language and is designed to:

1. Read the test scenario
2. Generate a Playwright test
3. Save the generated test script
4. Execute the generated test
5. Produce a Playwright HTML report

Workflow

Test Scenario
      ↓
   AI Agent
      ↓
Generate Playwright Test
      ↓
   Execute Test
      ↓
 Playwright HTML Report

The AI-agent implementation is currently a POC and is being developed incrementally as part of my exploration of AI-assisted QA automation.

Project Structure

Automation_agent_playwright_demo/
│
├── ai-agent/
│   ├── agent.ts
│   ├── generate-test.ts
│   └── scenarios/
│       └── login.txt
│
├── tests/
│   ├── login.spec.ts
│   └── forgot-password.spec.ts
│
├── .github/
│   └── workflows/
│
├── playwright.config.ts
├── package.json
└── README.md

CI/CD

GitHub Actions is used to run the Playwright automation as part of the CI workflow.

Purpose

The goal of this project is to explore how traditional test automation can be extended with AI-agent capabilities to reduce repetitive QA work and improve test creation and execution workflows.
