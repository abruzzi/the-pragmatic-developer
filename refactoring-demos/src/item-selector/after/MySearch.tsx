import { useTemplateSelector } from "./TemplateSelectorProvider.tsx";
import { ChangeEvent, useState } from "react";

import classes from "./MySearch.module.css";

export const MySearch = () => {
  const [keyword, setKeyword] = useState<string>("");

  const { onSearch } = useTemplateSelector();

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setKeyword(value);
    onSearch(value);
  };

  return (
    <div className={classes.searchBar}>
      <input
        type="text"
        placeholder="Searching template..."
        value={keyword}
        onChange={handleSearch}
      />
    </div>
  );
};
