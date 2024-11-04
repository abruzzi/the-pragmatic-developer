import classes from "./Tile.module.css";
import { Template } from "./type.tsx";

export const Tile = ({
  template,
  onSelectTemplate,
}: {
  template: Template;
  onSelectTemplate: (template: Template | undefined) => void;
}) => {
  return (
    <li
      className={classes.template}
      tabIndex={0}
      onClick={() => onSelectTemplate(template)}
      onBlur={() => onSelectTemplate(undefined)}
    >
      {template.name}
      <div className={classes.buttons}>
        <button>Select</button>
      </div>
    </li>
  );
};
