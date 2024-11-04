import { Template } from "./type.tsx";

import classes from "./TemplateList.module.css";
import { Tile } from "./Tile.tsx";

function TemplateList({
  templates,
  onSelectTemplate,
  selectedTemplate,
}: {
  templates: Template[];
  onSelectTemplate: (template: Template | undefined) => void;
  selectedTemplate: Template | undefined;
}) {
  return (
    <ol className={classes.templates}>
      {templates.map((template) => (
        <Tile
          key={template.id}
          template={template}
          onSelectTemplate={onSelectTemplate}
          isSelected={selectedTemplate?.id === template.id}
        />
      ))}
    </ol>
  );
}

export { TemplateList };
