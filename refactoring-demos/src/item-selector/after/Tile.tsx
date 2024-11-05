import classes from "./Tile.module.css";
import { Template } from "./type.tsx";

export const Tile = ({
  template,
  onSelectTemplate,
  onTemplateClick,
  isSelected = false,
}: {
  template: Template;
  onSelectTemplate: (template: Template | undefined) => void;
  onTemplateClick: (template: Template) => void;
  isSelected: boolean;
}) => {
  const handleClick = () => {
    onTemplateClick(template);
    onSelectTemplate(template);
  };

  return (
    <li
      className={`${classes.template} ${isSelected ? classes.isSelected : ""}`}
      tabIndex={0}
      onClick={handleClick}
      onBlur={() => onSelectTemplate(undefined)}
    >
      {template.name}
      <div className={classes.buttons}>
        <button>Select</button>
      </div>
    </li>
  );
};
