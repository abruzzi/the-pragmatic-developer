import { Browser, chromium } from "playwright";
import { toMatchImageSnapshot } from "jest-image-snapshot";

expect.extend({ toMatchImageSnapshot });

describe("Visual Regression Tests", () => {
  let browser: Browser;

  beforeAll(async () => {
    browser = await chromium.launch({headless: false});
  });

  afterAll(async () => {
    await browser.close();
  });

  test("Gallery renders correctly on desktop", async () => {
    const page = await browser.newPage();
    await page.setViewportSize({ width: 1000, height: 900 });
    await page.goto("http://localhost:5173");


    await page.waitForFunction(() => {
      const images = document.querySelectorAll('img');
      return Array.from(images).every((img) => img.complete && img.naturalHeight !== 0);
    });


    const screenshot = await page.screenshot();
    expect(screenshot).toMatchImageSnapshot({
      failureThresholdType: "pixel",
      failureThreshold: 100,
    });
  });

  test("Gallery renders correctly on mobile", async () => {
    const page = await browser.newPage();
    await page.setViewportSize({ width: 375, height: 800 });
    await page.goto("http://localhost:5173");

    await page.waitForFunction(() => {
      const images = document.querySelectorAll('img');
      return Array.from(images).every((img) => img.complete && img.naturalHeight !== 0);
    });

    const screenshot = await page.screenshot();
    expect(screenshot).toMatchImageSnapshot({
      failureThresholdType: "pixel",
      failureThreshold: 100,
    });
  });
});
