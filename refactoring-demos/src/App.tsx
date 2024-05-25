import "./App.css";
import { RequestTypeBuilder as RequestTypeBuilderBefore } from "./request-type-builder/before";
import { RequestTypeBuilder as RequestTypeBuilderAfter } from "./request-type-builder/after";

import { RenderedIn } from "./request-type-builder/common/type.tsx";
import { NewRequestTypeHeader } from "./request-type-builder/after/new-request-type-header.tsx";
import { NewProjectHeader } from "./request-type-builder/after/new-project-header.tsx";
import {IssueContextMenu} from "./collection-pipeline/before/ContextMenu.tsx";

import data from "./collection-pipeline/response.json";
import {IssueResponse} from "./collection-pipeline/before/types.ts";
import {ApprovalPanel} from "./approval/before/ApprovalPanel.tsx";

const RequestTypeBuilderDemo = () => {
  return (
    <>
      <RequestTypeBuilderBefore renderedIn={RenderedIn.creating_new_project} />
      <RequestTypeBuilderBefore
        renderedIn={RenderedIn.creating_new_request_type}
      />

      <RequestTypeBuilderAfter header={<NewRequestTypeHeader />} />
      <RequestTypeBuilderAfter header={<NewProjectHeader />} />

      <RequestTypeBuilderAfter
        header={
          <div>
            <h1 style={{ background: "deeppink", color: "wheat" }}>
              I'm a much fancy header, 🎩
            </h1>
          </div>
        }
      />
    </>
  );
};

const CollectionPipelineDemo = () => {
  return <IssueContextMenu data={data as unknown as IssueResponse} />;
};

function App() {
  return (
    <div className="root">
      <ApprovalPanel id="123" />
    </div>
  );
}

export default App;
