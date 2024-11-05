import uniqBy from "lodash/uniqBy";

import { CategoryType, Template } from "./type.tsx";

export const getCategories = (
  allTemplates: Template[],
  templates: Template[],
): CategoryType[] => {
  const base = uniqBy(
    allTemplates.map((t) => ({ name: t.group.name, count: 0 })),
    (x) => x.name,
  );

  const searchedCategoryTypes = templates.reduce(
    (acc: CategoryType[], template: Template) => {
      const groupName = template.group.name;

      const category = acc.find((cat) => cat.name === groupName);

      if (category) {
        category.count += 1;
      } else {
        acc.push({ name: groupName, count: 0 });
      }

      return acc;
    },
    base,
  );

  return [{ name: "All", count: templates.length }, ...searchedCategoryTypes];
};
