import { IssueResponse, Operation } from "./types.ts";
import "./ContextMenu.css";

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

type MenuItemData = { name: string; url: string; field: string };

const URL_OVERRIDE_FIELDS: Record<string, string> = {
  "comment-issue": "/issues/comment",
  "assign-to-me": "/issues/assign-to-me",
};

const convertOperationsToMenuItemData = ({
  name,
  url: givenUrl,
  internal_legacy_field: field,
}: Operation) => {
  let url = givenUrl;
  if (Object.hasOwn(URL_OVERRIDE_FIELDS, field)) {
    url = URL_OVERRIDE_FIELDS[field];
  }

  return {
    name,
    url: url ?? "",
    field,
  };
};

// there are more in the real product
const DIALOG_FIELDS: string[] = ["assign-issue", "comment-issue"];

const convertMenuItemDataToUI = ({ name, url, field }: MenuItemData) => {
  return DIALOG_FIELDS.includes(field) ? (
    <ButtonMenuItem key={name} name={name} />
  ) : (
    <LinkMenuItem key={name} name={name} url={url} />
  );
};

// there are more in the real product
const SKIP_FIELDS: string[] = ["log-work"];

const filterLegacyFields = ({ field }: { field: string }) =>
  !SKIP_FIELDS.includes(field);

const IssueContextMenu = ({ data }: { data: IssueResponse }) => {
  return (
    <DropdownMenu>
      {data.operations
        .map(convertOperationsToMenuItemData)
        .filter(filterLegacyFields)
        .map(convertMenuItemDataToUI)}
    </DropdownMenu>
  );
};

export { IssueContextMenu };
