import {useTemplates} from "./common/useTemplates.tsx";
import {TemplateSelector} from "./after/TemplateSelector.tsx";

export const ItemSelectorApp = () => {
  const { templates } = useTemplates();

  return (
    <div className="root">
      <TemplateSelector templates={templates} />
    </div>
  );
}