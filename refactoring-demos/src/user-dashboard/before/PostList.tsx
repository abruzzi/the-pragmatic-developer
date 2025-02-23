import { Post } from "../types.ts";
import classes from "./UserDashboard.module.css";
import { useEffect, useState } from "react";
import {Loading} from "./Loading.tsx";

export const PostList = () => {
  const [posts, setPosts] = useState<Post[] | null>();

  useEffect(() => {
    fetch("/api/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .catch((e) => console.error(e));
  }, []);

  if (!posts) {
    return <Loading>Loading posts</Loading>;
  }

  return (
    <div className="py-4">
      <h2 className="text-2xl">Latest Posts</h2>
      {posts.map((post) => (
        <div key={post.author} className={classes.post}>
          <h3>{post.author}</h3>
          <p className={classes.summary}>{post.summary}</p>
        </div>
      ))}
    </div>
  );
};
