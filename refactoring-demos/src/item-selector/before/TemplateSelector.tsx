import { TemplateList } from "./TemplateList.tsx";
import { SearchBar } from "./SearchBar.tsx";
import { Category } from "./Category.tsx";
import { Template } from "./type.tsx";

import classes from "./TemplateSelector.module.css";
import { useMemo, useState } from "react";
import { getCategories } from "./utils.ts";

export const TemplateSelector = ({ templates }: { templates: Template[] }) => {
  const [selectedCategory, setSelectedCategory] = useState<
    string | undefined
  >();
  const [filteredTemplates, setFilteredTemplates] =
    useState<Template[]>(templates);

  const categories = useMemo(() => {
    return getCategories(filteredTemplates);
  }, [filteredTemplates]);

  const handleSearch = (text: string) => {
    const searched = templates.filter((item) =>
      item.name.toLowerCase().includes(text.toLowerCase()),
    );
    setFilteredTemplates(searched);
  };

  const selectCategory = (category: string) => {
    setSelectedCategory(category);
    if (category === "All") {
      setFilteredTemplates(templates);
    } else {
      const filtered = templates.filter(
        (item) => item.group.name.toLowerCase() === category.toLowerCase(),
      );
      setFilteredTemplates(filtered);
    }
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
