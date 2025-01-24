import { renderHook, act } from "@testing-library/react";
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
});
