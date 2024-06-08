import {User} from "../types.ts";
import classes from "./UserDashboard.module.css";

export const FriendList = ({friends}: { friends: User[] }) => {
  return (
    <>
      <h2>Friends</h2>
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
    </>
  );
};