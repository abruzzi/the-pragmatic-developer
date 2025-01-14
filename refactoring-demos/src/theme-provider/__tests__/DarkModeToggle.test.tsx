import { test } from "vitest";
import { render, screen } from "@testing-library/react";
import { DarkModeToggle } from "../DarkModeToggle.tsx";
import userEvent from "@testing-library/user-event";

test("renders toggle button", async () => {
  render(<DarkModeToggle />);

  const button = screen.getByRole("button", { name: "Light mode" });

  expect(button).toBeVisible();
});

test("toggles dark mode", async () => {
  // Given
  render(<DarkModeToggle />);

  const button =
    screen.getByRole("button", { name: "Light mode" });
  expect(button).toBeVisible();

  // When
  await userEvent.click(button);

  // Then
  expect(screen.getByRole("button", {name: 'Dark mode'}))
    .toBeVisible();
});