import "./App.css";
import {ApprovalPanel} from "./approval/before/ApprovalPanel.tsx";

const ApprovalPanelDemo = () => {
  return <ApprovalPanel id="123" />
}

function App() {
  return (
    <div className="root">
      <ApprovalPanelDemo />
    </div>
  );
}

export default App;
