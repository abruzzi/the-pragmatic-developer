import { Template } from "./type.tsx";

function TemplateList({ templates }: { templates: Template[] }) {
  return (
    <div>
      <h2>Templates</h2>
      <ol>
        {templates.map((t) => (
          <li key={t.id}>{t.name}</li>
        ))}
      </ol>
    </div>
  );
}

export { TemplateList };
