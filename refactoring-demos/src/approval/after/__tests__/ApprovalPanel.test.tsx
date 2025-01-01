import "@testing-library/jest-dom";

import { vi, describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import {ReactNode} from "react";
import {ApprovalPanel} from "../ApprovalPanel.tsx";


const mockApprove = vi.fn();
const mockDecline = vi.fn();

type ChildrenType = {
  children: (props: {
    isDone: boolean;
    handleApprove: () => void;
    handleDecline: () => void;
  }) => ReactNode;
}

vi.mock("../ApprovalService", () => {
  return {
    ApprovalService: ({ children }: ChildrenType) => {
      const mockProps = {
        isDone: false,
        handleApprove: mockApprove,
        handleDecline: mockDecline,
      };

      return children(mockProps);
    },
  };
});

describe("ApprovalPanel", () => {
  it("handle approve an approval", async () => {
    render(
      <ApprovalPanel id="approval-id" />
    );

    const approveButton = screen.getByRole('button', {name: 'Approve'});
    await userEvent.click(approveButton);

    expect(mockApprove).toHaveBeenCalled();
  });

  it("handle decline an approval", async () => {
    render(
      <ApprovalPanel id="approval-id" />
    );

    const approveButton = screen.getByRole('button', {name: 'Decline'});
    await userEvent.click(approveButton);

    expect(mockDecline).toHaveBeenCalled();
  });
});
