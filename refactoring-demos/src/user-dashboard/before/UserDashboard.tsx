import classes from "./UserDashboard.module.css";
import { Post, User } from "../types.ts";
import { FriendList } from "./FriendList.tsx";
import { UserBrief } from "./UserBrief.tsx";
import { PostList } from "./PostList.tsx";

type UserDashboardProps = {
  user: User;
  posts: Post[];
};

function UserDashboard({ user, posts }: UserDashboardProps) {
  return (
    <div className={classes.dashboardContainer}>
      <h1>Profile</h1>
      <UserBrief {...user} />
      <FriendList friends={user.friends} />
      <PostList posts={posts} />
    </div>
  );
}

export default UserDashboard;
