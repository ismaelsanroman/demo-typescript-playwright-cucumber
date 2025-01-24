import { defineConfig } from "@playwright/test";

export default defineConfig({
  use: {
    headless: false,
    viewport: { width: 1280, height: 720 },
    actionTimeout: 10000,
    ignoreHTTPSErrors: true,
    screenshot: "only-on-failure",
    video: "on-first-retry"
  },
  reporter: [["list"], ["json", { outputFile: "reports/playwright-report.json" }]],
});
