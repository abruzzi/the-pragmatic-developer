import { IssueResponse } from "./types.ts";
import "./ContextMenu.css";
import { MenuItemModel, MenuItemType } from "./MenuItemModel.ts";

const DropdownMenu = ({ children }: { children: React.ReactNode }) => {
  return <ul className="dropdown-menu">{children}</ul>;
};
const ButtonMenuItem = ({ name }: { name: string }) => {
  return <li className="menu-item">{name}</li>;
};
const LinkMenuItem = ({ name, url }: { name: string; url: string }) => {
  return (
    <li className="menu-item">
      <a href={url}>{name}</a>
    </li>
  );
};

const IssueContextMenu = ({ data }: { data: IssueResponse }) => {
  return (
    <DropdownMenu>
      {data.operations
        .map((operation) => new MenuItemModel(operation))
        .filter((model) => !model.isLegacy)
        .map((model) =>
          model.type === MenuItemType.ButtonMenuItem ? (
            <ButtonMenuItem key={model.name} name={model.name} />
          ) : (
            <LinkMenuItem name={model.name} url={model.url} />
          ),
        )}
    </DropdownMenu>
  );
};

export { IssueContextMenu };
