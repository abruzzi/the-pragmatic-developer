import { TemplateSelector } from "../common/template-selector.tsx";
import { useTemplates } from "../common/use-templates.tsx";
import { useCurrentUser } from "../common/use-current-user.tsx";
import { RenderedIn } from "../common/type.tsx";

const RequestTypeBuilder = ({ renderedIn }: { renderedIn: RenderedIn }) => {
  const { templates } = useTemplates(); // fetch templates from remote
  const { user } = useCurrentUser();

  const getHeader = () => {
    switch (renderedIn) {
      case RenderedIn.creating_new_project:
        return (
          <div>
            <h1>Welcome, {user.name}</h1>
            <p>Choose the request ...</p>
          </div>
        );
      case RenderedIn.creating_new_request_type:
        return (
          <div>
            <h1>Select a request type</h1>
            <p>Select a template ...</p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div>
      {getHeader()}
      <TemplateSelector templates={templates} />
    </div>
  );
};

export { RequestTypeBuilder };
