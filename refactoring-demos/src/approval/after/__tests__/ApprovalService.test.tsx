import "@testing-library/jest-dom";

import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ApprovalService } from "../ApprovalService.tsx";

const MockApprovalPanel = ({
  isDone,
  handleApprove,
  handleDecline,
}: {
  isDone: boolean;
  handleApprove: () => void;
  handleDecline: () => void;
}) => {
  if (isDone) {
    return <div>Approval is resolved</div>;
  }

  return (
    <div>
      <button onClick={handleApprove}>Approve</button>
      <button onClick={handleDecline}>Decline</button>
    </div>
  );
};

describe("ApprovalService", () => {
  it("renders resolved message when done", async () => {
    render(
      <ApprovalService id="completed-approval">
        {({ isDone, handleApprove, handleDecline }) => (
          <MockApprovalPanel
            isDone={isDone}
            handleApprove={handleApprove}
            handleDecline={handleDecline}
          />
        )}
      </ApprovalService>
    );

    expect(await screen.findByText("Approval is resolved")).toBeVisible();
  });

  it('accepts the approval', async () => {
    render(
      <ApprovalService id="incompleted-approval">
        {({ isDone, handleApprove, handleDecline }) => (
          <MockApprovalPanel
            isDone={isDone}
            handleApprove={handleApprove}
            handleDecline={handleDecline}
          />
        )}
      </ApprovalService>
    );

    const approveButton = screen.getByRole('button', {name: 'Approve'});
    await userEvent.click(approveButton);

    expect(await screen.findByText("Approval is resolved")).toBeVisible();
  })

  it('accepts the approval', async () => {
    render(
      <ApprovalService id="incompleted-approval">
        {({ isDone, handleApprove, handleDecline }) => (
          <MockApprovalPanel
            isDone={isDone}
            handleApprove={handleApprove}
            handleDecline={handleDecline}
          />
        )}
      </ApprovalService>
    );

    const approveButton = screen.getByRole('button', {name: 'Decline'});
    await userEvent.click(approveButton);

    expect(await screen.findByText("Approval is resolved")).toBeVisible();
  })
});
