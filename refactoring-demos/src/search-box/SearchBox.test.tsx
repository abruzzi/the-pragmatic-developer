import { test, expect } from "vitest";
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { SearchBox } from "./SearchBox.tsx";

test('shows suggestions as the user types', async () => {
  render(<SearchBox />);

  const input = screen.getByRole('textbox', { name: /search/i });
  await userEvent.type(input, 'React');

  expect(screen.getByText('React Testing Library')).toBeInTheDocument();
  expect(screen.getByText('React Hooks')).toBeInTheDocument();
  expect(screen.queryByText('React Anti-patterns')).not.toBeInTheDocument();
});
