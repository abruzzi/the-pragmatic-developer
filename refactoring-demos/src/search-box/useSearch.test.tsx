import { renderHook, act, waitFor } from "@testing-library/react";
import { useSearch } from "./useSearch";
import { vi, describe, test } from "vitest";

const mockFetch = vi.fn(async (): Promise<Response> => {
  return {
    ok: true,
    status: 200,
    json: async () => ["React Testing Library", "React Hooks"],
  } as unknown as Response;
});

global.fetch = mockFetch;

describe("useSearch", () => {
  test("updates query state when setQuery is called", () => {
    const { result } = renderHook(() => useSearch());

    act(() => {
      result.current.setQuery("React");
    });

    expect(result.current.query).toBe("React");
  });

  test("updates results state after fetch", async () => {
    const { result } = renderHook(() => useSearch());

    act(() => {
      result.current.setQuery("React");
    });

    await waitFor(() => {
      expect(result.current.results).toContain("React Testing Library");
      expect(result.current.results).toContain("React Hooks");
    });
  });
});
