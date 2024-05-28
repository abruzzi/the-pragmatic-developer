import { TemplateList } from "./template-list.tsx";
import { SearchBar } from "./search-bar.tsx";
import { Category } from "./category.tsx";
import { Template } from "./type.tsx";

import classes from './TemplateSelector.module.css';

export const TemplateSelector = ({ templates }: { templates: Template[] }) => {
  return (
    <div className={classes.container}>
      <div className={classes.sidebar}>
        <SearchBar />
        <Category />
      </div>
      <div className={classes.templatesContainer}>
        <TemplateList templates={templates} />
      </div>
    </div>
  );
};
