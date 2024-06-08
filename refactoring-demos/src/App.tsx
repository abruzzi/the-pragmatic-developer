import "./App.css";
import { IssueContextMenu } from "./collection-pipeline/before/ContextMenu.tsx";

import data from "./collection-pipeline/response.json";

function App() {
  return (
    <div className="root">
      <IssueContextMenu data={data} />
    </div>
  );
}

export default App;
