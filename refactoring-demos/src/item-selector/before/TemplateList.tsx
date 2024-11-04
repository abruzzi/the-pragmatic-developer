import { Template } from "./type.tsx";

import classes from './TemplateList.module.css';
import {Tile} from "./tile.tsx";

function TemplateList({ templates }: { templates: Template[] }) {
  return (
    <ol className={classes.templates}>
      {templates.map((t) => (
        <Tile key={t.id} template={t} />
      ))}
    </ol>
  );
}

export { TemplateList };
