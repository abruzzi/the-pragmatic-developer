import { Template } from "./type.tsx";

import classes from "./TemplateList.module.css";
import { Tile } from "./Tile.tsx";

function TemplateList({
  templates,
  onSelectTemplate,
}: {
  templates: Template[];
  onSelectTemplate: (template: Template | undefined) => void;
}) {
  return (
    <ol className={classes.templates}>
      {templates.map((t) => (
        <Tile key={t.id} template={t} onSelectTemplate={onSelectTemplate} />
      ))}
    </ol>
  );
}

export { TemplateList };
