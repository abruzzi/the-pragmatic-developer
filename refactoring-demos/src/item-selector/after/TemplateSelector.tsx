import { Category } from "../common/Category.tsx";
import { Template } from "./type.tsx";

import classes from "./TemplateSelector.module.css";
import { Preview } from "../common/Preview.tsx";

import {
  TemplateSelectorProvider,
  useTemplateSelector,
} from "./TemplateSelectorProvider.tsx";
import { MySearch } from "./MySearch.tsx";
import {TemplateList} from "./TemplateList.tsx";

const CustomisedCategory = () => {
  const { categories, selectedCategory, onCategorySelected } =
    useTemplateSelector();

  return (
    <Category
      categories={categories}
      onSelectCategory={onCategorySelected}
      selectedCategory={selectedCategory}
    />
  );
};

const CustomisedTemplateList = () => {
  const { templatesToShow, selectedTemplate, onTemplateSelected } =
    useTemplateSelector();

  return (
    <TemplateList
      templates={templatesToShow}
      onSelectTemplate={onTemplateSelected}
      selectedTemplate={selectedTemplate}
      onTemplateClick={onTemplateSelected}
    />
  );
};

const PreviewContainer = () => {
  const { shouldShowPreview, selectedTemplate } = useTemplateSelector();

  if (!shouldShowPreview) {
    return null;
  }

  return (
    <div className={classes.previewTemplate}>
      <Preview template={selectedTemplate!} />
    </div>
  );
};

export const TemplateSelector = ({ templates }: { templates: Template[] }) => {
  return (
    <TemplateSelectorProvider templates={templates}>
      <h1 className={classes.header}>Request type templates</h1>
      <div className={classes.stack}>
        <MySearch />
        <div className={classes.inline}>
          <div className={classes.sidebar}>
            <CustomisedCategory />
          </div>
          <div className={classes.templatesContainer}>
            <CustomisedTemplateList />
          </div>
          <PreviewContainer />
        </div>
      </div>
    </TemplateSelectorProvider>
  );
};
