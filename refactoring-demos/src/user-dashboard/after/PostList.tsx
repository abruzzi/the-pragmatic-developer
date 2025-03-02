import { Post } from "../types.ts";
import classes from "./UserDashboard.module.css";
import {Loading} from "../common/Loading.tsx";

export const PostList = ({posts}: {posts: Post[] | undefined}) => {
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
