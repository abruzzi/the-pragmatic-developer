import classes from "./ApprovalPanel.module.css";
import { useApproval } from "./useApproval.ts";

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
        appearance === "Primary"
          ? classes.primaryButtonClass
          : classes.defaultButtonClass
      }
    >
      {children}
    </button>
  );
};

const ApprovalPanelWithHook = ({ id }: { id: string }) => {
  const { isDone, handleApprove, handleDecline } = useApproval(id);

  if (isDone) {
    return <div>The request has been resolved</div>;
  }

  return (
    <div className={classes.container}>
      <h2>This request requires your approval</h2>
      <div className={classes.buttonsContainer}>
        <Button onClick={handleApprove} appearance="Primary">
          Approve
        </Button>
        <Button onClick={handleDecline}>Decline</Button>
      </div>
    </div>
  );
};

export { ApprovalPanelWithHook };
