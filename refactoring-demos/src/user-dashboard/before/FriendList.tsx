import { User } from "../types.ts";
import { useEffect, useState } from "react";
import classes from "./UserDashboard.module.css";
import {Loading} from "./Loading.tsx";

export const FriendList = ({ friendOf }: { friendOf: string }) => {
  const [friends, setFriends] = useState<User[] | null>();

  useEffect(() => {
    fetch(`/api/users/${friendOf}/friends`)
      .then((res) => res.json())
      .then((data) => setFriends(data))
      .catch((e) => console.error(e));
  }, [friendOf]);

  if (!friends) {
    return <Loading>Loading friends...</Loading>;
  }

  return (
    <div className="py-4">
      <h2 className="text-2xl">Friends</h2>
      <ul>
        {friends.map((friend) => (
          <li key={friend.name}>
            <div className={`${classes.friendBrief}`}>
              <div>
                <span className={classes.name}>{friend.name}</span>
                <p className={classes.bio}>{friend.bio}</p>
              </div>
              <img
                src={friend.avatar}
                alt={`avatar image for user ${friend.name}`}
                className={`${classes.small} ${classes.avatar}`}
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
