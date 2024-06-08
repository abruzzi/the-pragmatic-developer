import {Post} from "../types.ts";
import classes from "./UserDashboard.module.css";

export const PostList = ({posts}: { posts: Post[] }) => {
  return (
    <>
      <h2>Latest Posts</h2>
      {posts.map((post) => (
        <div key={post.author} className={classes.post}>
          <h3>{post.author}</h3>
          <p className={classes.summary}>{post.summary}</p>
        </div>
      ))}
    </>
  );
};