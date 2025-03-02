import { User } from "../types.ts";
import classes from "./UserDashboard.module.css";
import {Loading} from "../common/Loading.tsx";

export const FriendList = ({ friends }: { friends: User[] }) => {
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
