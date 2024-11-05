import { TemplateList } from "./TemplateList.tsx";
import { SearchBar } from "./SearchBar.tsx";
import { Category } from "./Category.tsx";
import { Template } from "./type.tsx";

import classes from "./TemplateSelector.module.css";
import { useMemo, useState } from "react";
import { getCategories } from "./utils.ts";
import {Preview} from "./Preview.tsx";

export const TemplateSelector = ({ templates }: { templates: Template[] }) => {
  const [selectedCategory, setSelectedCategory] = useState<
    string | undefined
  >();
  const [filteredTemplates, setFilteredTemplates] =
    useState<Template[]>(templates);
  const [selectedTemplate, setSelectedTemplate] = useState<Template | undefined>();

  const categories = useMemo(() => {
    return getCategories(templates, filteredTemplates);
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

  const selectTemplate = (template: Template | undefined) => {
    setSelectedTemplate(template);
  }

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
          <TemplateList templates={filteredTemplates} onSelectTemplate={selectTemplate} selectedTemplate={selectedTemplate} />
        </div>
        {
          selectedTemplate && (<div className={classes.previewTemplate}>
            <Preview template={selectedTemplate} />
          </div>)
        }
      </div>
    </div>
  );
};
