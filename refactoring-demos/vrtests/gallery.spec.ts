
import { test, expect } from '@playwright/test';

test("Gallery renders correctly on desktop",
  async ({ page }) => {
  await page.setViewportSize({ width: 1000, height: 900 });

  await page.goto("http://localhost:5173");

  await page.waitForFunction(() => {
    const images = document.querySelectorAll('img');
    return Array.from(images)
      .every((img) => img.complete && img.naturalHeight !== 0);
  });

  await expect(page).toHaveScreenshot("gallery-desktop.png", {
    maxDiffPixels: 100,
  });
});
