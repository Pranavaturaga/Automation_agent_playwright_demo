
import { readFileSync, writeFileSync } from "fs";
import { generatePlaywrightTest } from "./agent";

async function main() {
  const scenario = readFileSync(
    "ai-agent/scenarios/login.txt",
    "utf-8"
  );

  const test = await generatePlaywrightTest(scenario);

  writeFileSync(
    "tests/generated-login.spec.ts",
    test
  );

  console.log("Playwright test generated successfully.");
}

main();
