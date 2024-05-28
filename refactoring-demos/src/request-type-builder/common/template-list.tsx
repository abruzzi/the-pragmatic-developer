import { Template } from "./type.tsx";

import classes from './TemplateList.module.css';

function TemplateList({ templates }: { templates: Template[] }) {
  return (
    <ol className={classes.templates}>
      {templates.map((t) => (
        <li key={t.id} className={classes.template}>{t.name}</li>
      ))}
    </ol>
  );
}

export { TemplateList };
