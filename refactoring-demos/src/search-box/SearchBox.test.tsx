import { vi, test, expect } from "vitest";
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { SearchBox } from "./SearchBox.tsx";

const mockFetch = vi.fn(async (): Promise<Response> => {
  return {
    ok: true,
    status: 200,
    json: async () => ["React Testing Library", "React Hooks"],
  } as unknown as Response;
});

global.fetch = mockFetch;

test('shows suggestions as the user types', async () => {
  render(<SearchBox />);

  // Simulate user typing
  await userEvent.type(screen.getByRole('textbox', { name: /search/i }), 'React');

  // Check suggestions appear in the UI
  expect(screen.getByText('React Testing Library')).toBeInTheDocument();
  expect(screen.getByText('React Hooks')).toBeInTheDocument();
  expect(screen.queryByText('React Anti-patterns')).not.toBeInTheDocument();
});
