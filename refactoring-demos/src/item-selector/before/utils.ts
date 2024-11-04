import { CategoryType, Template } from "./type.tsx";

export const getCategories = (templates: Template[]): CategoryType[] => {
  const categoryTypes = templates.reduce(
    (acc: CategoryType[], template: Template) => {
      const groupName = template.group.name;

      const category = acc.find((cat) => cat.name === groupName);

      if (category) {
        category.count += 1;
      } else {
        acc.push({ name: groupName, count: 1 });
      }

      return acc;
    },
    [],
  );

  return [{ name: "All", count: templates.length }, ...categoryTypes];
};
