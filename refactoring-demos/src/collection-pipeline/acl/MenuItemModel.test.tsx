import "@testing-library/jest-dom";

import { describe, it, expect } from "vitest";

import { MenuItemModel } from "./types.ts";

describe("MenuItemModel", () => {
  describe('basic conversion', () => {
    it("returns name from an operation", () => {
      const operation = {
        internal_legacy_field: "assign-issue",
        name: "Assign",
        desc: "Assign this issue to someone",
        url: "/issues/assign",
      };

      const model = new MenuItemModel(operation);
      expect(model.name).toEqual('Assign')
    });

    it("returns field from an operation", () => {
      const operation = {
        internal_legacy_field: "assign-issue",
        name: "Assign",
        desc: "Assign this issue to someone",
        url: "/issues/assign",
      };

      const model = new MenuItemModel(operation);
      expect(model.field).toEqual('assign-issue')
    });

    it("returns url from an operation", () => {
      const operation = {
        internal_legacy_field: "assign-issue",
        name: "Assign",
        desc: "Assign this issue to someone",
        url: "/issues/assign",
      };

      const model = new MenuItemModel(operation);
      expect(model.url).toEqual('/issues/assign')
    });
  })
});
