import { createContext, ReactNode, useContext, useMemo, useState } from "react";
import { CategoryType, Template } from "./type.tsx";
import { getCategories } from "./utils.ts";

type TemplateSelectorContextType = {
  selectedTemplate: Template | undefined;
  templatesToShow: Template[];
  onTemplateSelected: (template: Template | undefined) => void;

  selectedCategory: string | undefined;
  categories: CategoryType[];
  onCategorySelected: (category: string) => void;

  shouldShowPreview: boolean;

  onSearch: (text: string) => void;
};

const defaultContext: TemplateSelectorContextType = {
  selectedTemplate: undefined,
  templatesToShow: [],
  onTemplateSelected: () => {},
  selectedCategory: "All",
  categories: [],
  onCategorySelected: () => {},
  shouldShowPreview: true,
  onSearch: () => {},
};

const TemplateSelectorContext =
  createContext<TemplateSelectorContextType>(defaultContext);

export const TemplateSelectorProvider = ({
  templates,
  children,
}: {
  templates: Template[];
  children: ReactNode;
}) => {
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
    setSelectedTemplate(template);
  };

  return (
    <TemplateSelectorContext.Provider
      value={{
        selectedTemplate,
        templatesToShow: filteredTemplates,
        onTemplateSelected: selectTemplate,
        onCategorySelected: selectCategory,
        selectedCategory,
        categories,
        shouldShowPreview: Boolean(selectedTemplate),
        onSearch: handleSearch,
      }}
    >
      {children}
    </TemplateSelectorContext.Provider>
  );
};

export const useTemplateSelector = () =>
  useContext<TemplateSelectorContextType>(TemplateSelectorContext);
