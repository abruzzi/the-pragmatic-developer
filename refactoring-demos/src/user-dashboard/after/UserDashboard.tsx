import classes from "./UserDashboard.module.css";
import { UserBrief } from "./UserBrief.tsx";
import { PostList } from "./PostList.tsx";
import {useEffect, useState} from "react";
import {Post, User} from "./types.ts";


function UserDashboard() {
  const id = "u1";
  const [user, setUser] = useState<User>();
  const [posts, setPosts] = useState<Post[] | undefined>(undefined);

  useEffect(() => {
    Promise.all([
      fetch(`/api/users/v2/${id}`)
        .then((res) => res.json()),
      fetch("/api/posts")
        .then((res) => res.json()),
    ]).then(([user, posts]) => {
      setUser(user);
      setPosts(posts);
    }).catch((e) => console.error(e));
  }, [id]);

  return (
    <div className={classes.dashboardContainer}>
      <h1 className="text-3xl font-bold">Profile</h1>
      <UserBrief user={user} />
      <PostList posts={posts} />
    </div>
  );
}

export default UserDashboard;
