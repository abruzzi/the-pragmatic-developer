import { TemplateList } from "./template-list.tsx";
import { SearchBar } from "./search-bar.tsx";
import { Category } from "./category.tsx";
import { Template } from "./type.tsx";

export const TemplateSelector = ({ templates }: { templates: Template[] }) => {
  return (
    <div>
      <SearchBar />
      <Category />
      <TemplateList templates={templates} />
    </div>
  );
};
