import "./App.css";
import { TemplateSelector } from "./item-selector/after/TemplateSelector.tsx";
import { useTemplates } from "./item-selector/common/useTemplates.tsx";
//
// import { useTemplates } from "./item-selector/before/useTemplates.tsx";
// import { TemplateSelector } from "./item-selector/before/TemplateSelector.tsx";

// const Error = () => {
//   return <div style={{fontWeight: 'bold', color: '#e23e57', fontSize: '2rem'}}>Something went wrong</div>;
// };

function App() {
  const { templates } = useTemplates();

  return (
    <div className="root">
      <TemplateSelector templates={templates} />
    </div>
  );
}

export default App;
