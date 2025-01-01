import {ReactNode, useEffect, useState} from "react";

type ApprovalServiceProps = {
  id: string;
  children: (props: {
    isDone: boolean;
    handleApprove: () => void;
    handleDecline: () => void;
  }) => ReactNode;
};

const ApprovalService = ({ id, children }: ApprovalServiceProps) => {
  const [isDone, setDone] = useState(false);

  useEffect(() => {
    const checkApprovalInitStatus = async () => {
      fetch(`/rest/approval/${id}`, )
        .then((r) => r.json())
        .then((data) => setDone(data.isDone));
    }

    checkApprovalInitStatus();
  }, [id]);

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

  return <>{children({ isDone, handleApprove, handleDecline })}</>;
};

export { ApprovalService };
