import { TemplateSelector } from "../common/template-selector.tsx";
import { useTemplates } from "../common/use-templates.tsx";
import { ReactNode } from "react";

const RequestTypeBuilder = ({ header }: { header: ReactNode }) => {
  const { templates } = useTemplates(); // fetch templates from remote

  return (
    <div>
      {header}
      <TemplateSelector templates={templates} />
    </div>
  );
};

export { RequestTypeBuilder };
