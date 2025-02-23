import classes from "./UserDashboard.module.css";
import { UserBrief } from "./UserBrief.tsx";
import { PostList } from "./PostList.tsx";


function UserDashboard() {
  return (
    <div className={classes.dashboardContainer}>
      <h1 className="text-3xl font-bold">Profile</h1>
      <UserBrief id="u1" />
      <PostList />
    </div>
  );
}

export default UserDashboard;
