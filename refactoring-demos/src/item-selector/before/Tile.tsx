import classes from "./Tile.module.css";
import { Template } from "./type.tsx";

export const Tile = ({ template }: { template: Template }) => {
  return (
    <li className={classes.template} tabIndex={0}>
      {template.name}
      <div className={classes.buttons}>
        <button>Select</button>
      </div>
    </li>
  );
};
