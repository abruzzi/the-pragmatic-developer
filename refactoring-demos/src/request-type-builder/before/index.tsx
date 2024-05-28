import { TemplateSelector } from "../common/template-selector.tsx";
import { useTemplates } from "../common/use-templates.tsx";

import "./index.css";

// const CreateSomethingElseHeader = () => <div>something else</div>;

const RequestTypeBuilder = ({ header }: { header: React.ReactNode }) => {
  const { templates } = useTemplates(); // fetch templates from remote

  return (
    <div>
      {header}
      <TemplateSelector templates={templates} />
    </div>
  );
};

export { RequestTypeBuilder };
