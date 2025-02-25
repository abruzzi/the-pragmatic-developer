import { Template } from "./type.tsx";

import classes from "./Preview.module.css";

const images = import.meta.glob<{ default: string }>("./images/*.webp", {
  eager: true,
});

const imageMap: Record<string, string> = {
  IT: images["./images/it.webp"].default,
  HR: images["./images/hr.webp"].default,
  Business: images["./images/business.webp"].default,
  Analysis: images["./images/analysis.webp"].default,
};

export const Preview = ({ template }: { template: Template }) => {
  return (
    <div className={classes.container}>
      <h2>{template.name}</h2>
      <div>
        <img
          className={classes.image}
          src={imageMap[template.group.name]}
          alt={`${template.group.name} preview`}
        />
      </div>
    </div>
  );
};
