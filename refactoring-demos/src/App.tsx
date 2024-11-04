import "./App.css";

import { useTemplates } from "./item-selector/before/useTemplates.tsx";
import { TemplateSelector } from "./item-selector/before/TemplateSelector.tsx";

function App() {
  const { templates } = useTemplates();

  return (
    <div className="root">
      <TemplateSelector templates={templates} />
    </div>
  );
}

export default App;
