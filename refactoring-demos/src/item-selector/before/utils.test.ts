import { describe } from "vitest";
import { getCategories } from "./utils.ts";

describe("get category", () => {
  it("shows All + HR category initially", () => {
    const templates = [
      {
        id: "HR1",
        name: "Onboarding Process Document",
        group: { name: "HR" },
      },
      {
        id: "HR2",
        name: "Employee Evaluation Form",
        group: { name: "HR" },
      },
    ];

    const categories = getCategories(templates, templates);
    expect(categories.length).toEqual(2);
    expect(categories[0]).toEqual({ name: "All", count: 2 });
    expect(categories[1]).toEqual({ name: "HR", count: 2 });
  });

  it("shows All + HR category when searching", () => {
    const all = [
      {
        id: "HR1",
        name: "Onboarding Process Document",
        group: { name: "HR" },
      },
      {
        id: "HR2",
        name: "Employee Evaluation Form",
        group: { name: "HR" },
      },
    ];

    const categories = getCategories(all, []);
    console.log(categories);

    expect(categories.length).toEqual(2);
    expect(categories[0]).toEqual({ name: "All", count: 0 });
    expect(categories[1]).toEqual({ name: "HR", count: 0 });
  });
});