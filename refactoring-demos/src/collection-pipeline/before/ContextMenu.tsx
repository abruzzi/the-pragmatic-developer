import { IssueResponse } from "./types.ts";
import "./ContextMenu.css";

const URL_OVERRIDE_FIELDS: Record<string, string> = {
  "comment-issue": "/issues/comment",
};

// there are more in the real product
const SKIP_FIELDS: string[] = ["log-work"];

// there are more in the real product
const DIALOG_FIELDS: string[] = ["assign-issue", "comment-issue"];

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
      {data.operations.reduce(
        (result, { name, url: givenUrl, internal_legacy_field }) => {
          let url = givenUrl;
          if (Object.hasOwn(URL_OVERRIDE_FIELDS, internal_legacy_field)) {
            url = URL_OVERRIDE_FIELDS[internal_legacy_field];
          }

          if (!SKIP_FIELDS.includes(internal_legacy_field)) {
            result.push(
              DIALOG_FIELDS.includes(internal_legacy_field) ? (
                <ButtonMenuItem key={name} name={name} />
              ) : (
                <LinkMenuItem key={name} name={name} url={url ?? ""} />
              ),
            );
          }

          return result;
        },
        [] as React.ReactNode[],
      )}
    </DropdownMenu>
  );
};

export { IssueContextMenu };
