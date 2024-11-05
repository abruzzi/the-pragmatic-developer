import { CategoryType } from "./type.tsx";

import classes from "./Category.module.css";

export const Category = ({
  categories,
  onSelectCategory,
  selectedCategory,
}: {
  categories: CategoryType[];
  selectedCategory: string | undefined;
  onSelectCategory: (category: string) => void;
}) => {
  return (
    <div>
      <h2>Category</h2>
      <ol>
        {categories.map((category) => (
          <li
            key={category.name}
            className={`${classes.category} ${
              selectedCategory === category.name ? classes.selected : ""
            }`}
            tabIndex={0}
            onClick={() => onSelectCategory(category.name)}
          >
            <span>{category.name}</span>
            <span className={classes.badge}>{category.count}</span>
          </li>
        ))}
      </ol>
    </div>
  );
};
