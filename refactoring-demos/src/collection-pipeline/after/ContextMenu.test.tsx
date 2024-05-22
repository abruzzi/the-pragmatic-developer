import "@testing-library/jest-dom";

import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { IssueContextMenu, IssueResponse } from "./ContextMenu.tsx";

import response from "../response.json";

describe("ContextMenu", () => {
  it("renders normal menu item", () => {
    const data = {
      operations: [
        {
          internal_legacy_field: "assign-issue",
          name: "Assign",
          desc: "Assign this issue to someone",
          url: "/issues/assign",
        },
      ],
    };

    render(<IssueContextMenu data={data} />);

    expect(screen.getByText("Assign")).toBeInTheDocument();
  });

  it("renders link for link menu", () => {
    const data = {
      operations: [
        {
          internal_legacy_field: "assign-to-me",
          name: "Assign to me",
          desc: "Assign this issue to me",
          url: "/issues/assign-to-me",
        },
      ],
    };

    render(<IssueContextMenu data={data} />);

    const link = screen.getByRole("link", { name: "Assign to me" });

    expect(link).toBeInTheDocument();
    expect(link.getAttribute("href")).toEqual("/issues/assign-to-me");
  });

  it("skip these should not be rendered", () => {
    const data = {
      operations: [
        {
          internal_legacy_field: "assign-issue",
          name: "Assign",
          desc: "Assign this issue to someone",
          url: "/issues/assign",
        },
        {
          internal_legacy_field: "log-work",
          name: "Log work",
          desc: "Log work against this issue",
        },
      ],
    };

    render(<IssueContextMenu data={data} />);

    expect(screen.getByText("Assign")).toBeInTheDocument();
    expect(screen.queryByText("Log work")).not.toBeInTheDocument();
  });

  it("renders the whole list correctly", () => {
    render(<IssueContextMenu data={response as unknown as IssueResponse} />);
    const items = screen.getAllByRole('listitem');
    expect(items).toHaveLength(3);

    expect(items[0]).toHaveTextContent('Assign');
    expect(items[1]).toHaveTextContent('Assign to me');
    expect(items[2]).toHaveTextContent('Comment');
  });
});
