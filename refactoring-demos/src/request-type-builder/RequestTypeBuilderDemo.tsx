import {useCurrentUser} from "./common/use-current-user.tsx";
import {RequestTypeBuilder} from "./before";

const CreateNewProjectHeader = () => {
  const { user } = useCurrentUser();

  return (
    <div style={{ paddingBlock: "2rem" }}>
      <h1>Welcome, {user.name}</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium
        commodi dolor ducimus esse exercitationem incidunt modi odio officia
        quod sunt!
      </p>
    </div>
  );
};

export const CreateNewProject = () => {
  return <RequestTypeBuilder header={<CreateNewProjectHeader />} />;
};

const CreateNewRequestTypeHeader = () => {
  return (
    <div style={{ paddingBlock: "2rem" }}>
      <h1>Select a request type</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione,
        similique.
      </p>
    </div>
  );
};

export const CreateNewRequestType = () => {
  return <RequestTypeBuilder header={<CreateNewRequestTypeHeader />} />;
};

export const CreateSomethingElse = () => {
  return <RequestTypeBuilder header={<div>
    <h1 style={{textTransform: 'uppercase', backgroundColor: 'deeppink'}}>This is a header for something lese</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A cum deleniti dignissimos dolorem ea eos est, et eum eveniet, expedita id illo impedit inventore modi nam natus perferendis perspiciatis possimus praesentium quidem quis quo reiciendis repudiandae saepe sint soluta tenetur velit vero vitae voluptatem. Dicta, eaque natus? Accusamus alias, at delectus earum enim facere fugiat laborum molestias perspiciatis quod reiciendis temporibus ullam voluptates? A accusamus atque cum dolores ipsa magnam molestiae nihil non numquam, ratione repellendus, sequi tenetur voluptates! A alias consectetur eaque eius ex explicabo facilis, harum labore laboriosam molestias nisi nulla, numquam optio pariatur, placeat porro repellendus ut!</p>
    <ul>
      <li>Lorem ipsum.</li>
      <li>Saepe, voluptas!</li>
      <li>Provident, reprehenderit.</li>
      <li>Blanditiis, facilis!</li>
    </ul>
  </div>} />;
}

export const RequestTypeBuilderDemo = () => {
  return (
    <>
      <CreateSomethingElse />
    </>
  );
};