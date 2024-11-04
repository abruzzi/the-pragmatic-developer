import { TemplateList } from "./TemplateList.tsx";
import { SearchBar } from "./SearchBar.tsx";
import { Category, type CategoryType } from "./Category.tsx";
import { Template } from "./type.tsx";

import classes from "./TemplateSelector.module.css";
import { useState } from "react";

const getCategories = (templates: Template[]): CategoryType[] =>
  templates.reduce((acc: CategoryType[], template: Template) => {
    const groupName = template.group.name;

    const category = acc.find((cat) => cat.name === groupName);

    if (category) {
      category.count += 1;
    } else {
      acc.push({ name: groupName, count: 1 });
    }

    return acc;
  }, []);

export const TemplateSelector = ({ templates }: { templates: Template[] }) => {
  const [selectedCategory, setSelectedCategory] = useState<
    string | undefined
  >();
  const [filteredTemplates, setFilteredTemplates] =
    useState<Template[]>(templates);

  const categories = getCategories(templates);

  const handleSearch = (text: string) => {
    const searched = templates.filter((item) =>
      item.name.toLowerCase().includes(text.toLowerCase()),
    );
    setFilteredTemplates(searched);
  };

  const selectCategory = (category: string) => {
    const filtered = templates.filter(
      (item) => item.group.name.toLowerCase() === category.toLowerCase(),
    );
    setSelectedCategory(category);
    setFilteredTemplates(filtered);
  };

  return (
    <div>
      <h1 className={classes.header}>Request type templates</h1>
      <div className={classes.container}>
        <div className={classes.sidebar}>
          <SearchBar onSearch={handleSearch} />
          <Category
            categories={categories}
            onSelectCategory={selectCategory}
            selectedCategory={selectedCategory}
          />
        </div>
        <div className={classes.templatesContainer}>
          <TemplateList templates={filteredTemplates} />
        </div>
      </div>
    </div>
  );
};
