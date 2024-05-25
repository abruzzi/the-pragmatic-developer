import { useState } from "react";
import "./ApprovalPanel.css";

type ButtonProps = {
  onClick: () => void;
  appearance?: "Primary" | "Default";
  children: React.ReactNode;
};

const Button = ({ onClick, appearance = "Default", children }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={
        appearance === "Primary" ? "primaryButtonClass" : "defaultButtonClass"
      }
    >
      {children}
    </button>
  );
};

const ApprovalPanel = ({ id }: { id: string }) => {
  const [isDone, setDone] = useState(false);

  const handleApprove = () => {
    fetch(`/rest/approval/${id}/approve`, { method: "POST" })
      .then((r) => r.json())
      .then((data) => setDone(data.isDone));
  };

  // handleDecline...
  const handleDecline = () => {
    fetch(`/rest/approval/${id}/decline`, { method: "POST" })
      .then((r) => r.json())
      .then((data) => setDone(data.isDone));
  };

  // we only show the component when the approval isn't completed
  if (isDone) {
    return <div>The request has been resolved</div>;
  }

  return (
    <div className="container">
      <h2>This request requires your approval</h2>
      <div className="buttonsContainer">
        <Button onClick={handleApprove} appearance="Primary">
          Approve
        </Button>
        <Button onClick={handleDecline}>Decline</Button>
      </div>
    </div>
  );
};

export { ApprovalPanel };
