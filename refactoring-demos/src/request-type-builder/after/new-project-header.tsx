import { useCurrentUser } from "../common/use-current-user.tsx";

const NewProjectHeader = () => {
  const { user } = useCurrentUser();

  return (
    <div>
      <h1>Welcome, {user.name}</h1>
      <p>Choose the request ...</p>
    </div>
  );
};

export { NewProjectHeader };
