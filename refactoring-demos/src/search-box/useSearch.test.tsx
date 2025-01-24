import { renderHook, act, waitFor } from "@testing-library/react";
import { useSearch } from "./useSearch";
import { describe, test } from "vitest";

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
