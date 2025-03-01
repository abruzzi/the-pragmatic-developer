import { User } from "../types.ts";
import classes from "./UserDashboard.module.css";
import { useEffect, useState } from "react";
import { FriendList } from "./FriendList.tsx";
import { Loading } from "../common/Loading.tsx";

export function UserBrief({ id }: { id: string }) {
  const [user, setUser] = useState<User>();

  useEffect(() => {
    fetch(`/api/users/${id}`)
      .then((res) => res.json())
      .then((data) => setUser(data))
      .catch((e) => console.error(e));
  }, [id]);

  if (!user) {
    return <Loading>Loading user brief...</Loading>;
  }

  return (
    <div className="py-4">
      <div className={classes.brief}>
        <img
          src={user.avatar}
          alt={`avatar image for user ${user.name}`}
          className={classes.avatar}
        />
        <div>
          <span className={classes.name}>{user.name}</span>
          <p className={classes.bio}>{user.bio}</p>
        </div>
      </div>

      <FriendList friendOf={user.id} />
    </div>
  );
}
