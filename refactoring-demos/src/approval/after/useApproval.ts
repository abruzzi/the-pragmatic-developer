import { useState } from "react";

const useApproval = (id: string) => {
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

  return {
    isDone,
    handleApprove,
    handleDecline,
  };
};

export { useApproval };
