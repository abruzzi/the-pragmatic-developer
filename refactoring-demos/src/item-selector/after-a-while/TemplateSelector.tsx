import { TemplateList } from "./TemplateList.tsx";
import { SearchBar } from "./SearchBar.tsx";
import { Category } from "./Category.tsx";
import { Template } from "./type.tsx";

import classes from "./TemplateSelector.module.css";
import { ReactNode, useMemo, useState } from "react";
import { getCategories } from "./utils.ts";
import { Preview } from "./Preview.tsx";
import noop from "lodash/noop";

type TemplateSelectorProps = {
  isLoading?: boolean;
  hasError?: boolean;
  errorState: ReactNode;
  templates: Template[];
  onTemplateSelected?: (template: Template | undefined) => void;
  onTemplateClick?: (template: Template) => void;
  customPreview: ReactNode;
  customHeader: ReactNode;
  onCategorySelected: (category: string) => void;
  onSearch: (keyword: string) => void;
};

export const TemplateSelector = ({
  isLoading,
  hasError,
  errorState,
  templates,
  onTemplateSelected = noop,
  onTemplateClick = noop,
}: TemplateSelectorProps) => {
  const [selectedCategory, setSelectedCategory] = useState<
    string | undefined
  >();
  const [filteredTemplates, setFilteredTemplates] =
    useState<Template[]>(templates);
  const [selectedTemplate, setSelectedTemplate] = useState<
    Template | undefined
  >();

  const categories = useMemo(() => {
    return getCategories(templates, filteredTemplates);
  }, [filteredTemplates, templates]);

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
    onTemplateSelected(template);
    setSelectedTemplate(template);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (hasError) {
    return errorState;
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
          <TemplateList
            templates={filteredTemplates}
            onSelectTemplate={selectTemplate}
            selectedTemplate={selectedTemplate}
            onTemplateClick={onTemplateClick}
          />
        </div>
        {selectedTemplate && (
          <div className={classes.previewTemplate}>
            <Preview template={selectedTemplate} />
          </div>
        )}
      </div>
    </div>
  );
};
