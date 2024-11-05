import { Template } from "./type.tsx";

import classes from "./TemplateList.module.css";
import { Tile } from "./Tile.tsx";

function TemplateList({
  templates,
  onSelectTemplate,
  onTemplateClick,
  selectedTemplate,
}: {
  templates: Template[];
  onSelectTemplate: (template: Template | undefined) => void;
  onTemplateClick: (template: Template) => void;
  selectedTemplate: Template | undefined;
}) {
  return (
    <ol className={classes.templates}>
      {templates.map((template) => (
        <Tile
          key={template.id}
          template={template}
          onSelectTemplate={onSelectTemplate}
          onTemplateClick={onTemplateClick}
          isSelected={selectedTemplate?.id === template.id}
        />
      ))}
    </ol>
  );
}

export { TemplateList };
