import { TemplateSelector } from "./TemplateSelector.tsx";
import { useTemplates } from "./useTemplates.tsx";

import "./index.css";

const ItemSelectorExample = () => {
  const { templates } = useTemplates();

  return <TemplateSelector templates={templates} />;
};

export { ItemSelectorExample };
