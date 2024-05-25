import classes from "./ApprovalPanel.module.css";
import { ApprovalService } from "./ApprovalService.tsx";

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

const ApprovalPanel = ({ id }: { id: string }) => {
  return (
    <ApprovalService id={id}>
      {({ isDone, handleApprove, handleDecline }) => {
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
      }}
    </ApprovalService>
  );
};

export { ApprovalPanel };
