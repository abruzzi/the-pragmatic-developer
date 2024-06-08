import {User} from "../types.ts";
import classes from "./UserDashboard.module.css";

export function UserBrief({bio, name, avatar}: User) {
  return (
    <div className={classes.brief}>
      <img
        src={avatar}
        alt={`avatar image for user ${name}`}
        className={classes.avatar}
      />
      <div>
        <span className={classes.name}>{name}</span>
        <p className={classes.bio}>{bio}</p>
      </div>
    </div>
  );
}