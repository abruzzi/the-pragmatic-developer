import { devices } from "playwright/test";

export default {
  testDir: "./vrtests",
  projects: [
    {
      name: "Desktop Chrome",
      use: { ...devices["Desktop Chrome"] },
    },
  ],
};
