type Operation = {
  internal_legacy_field: string;
  name: string;
  desc?: string;
  url?: string;
};

export type IssueResponse = {
  operations: Operation[];
};

const URL_OVERRIDE_FIELDS: Record<string, string> = {
  "comment-issue": "/issues/comment",
};

const SKIP_FIELDS: string[] = ["log-work"]; // there are more in the real product
const DIALOG_FIELDS: string[] = ["assign-issue", "comment-issue"]; // there are more in the real product

const DropdownMenu = ({ children }: { children: React.ReactNode }) => {
  return <ul>{children}</ul>;
};

const ButtonMenuItem = ({ name }: { name: string }) => {
  return <li>{name}</li>;
};

const LinkMenuItem = ({ name, url }: { name: string; url: string }) => {
  return (
    <li>
      <a href={url}>{name}</a>
    </li>
  );
};

const convertOperations = ({
  name,
  url: givenUrl,
  internal_legacy_field: field,
}: Operation) => {
  const url = Object.hasOwn(URL_OVERRIDE_FIELDS, field)
    ? URL_OVERRIDE_FIELDS[field]
    : givenUrl ?? "";

  return { name, url, field };
};

const skipFields = ({ field }: { field: string }) =>
  !SKIP_FIELDS.includes(field);

const IssueContextMenu = ({ data }: { data: IssueResponse }) => {
  return (
    <DropdownMenu>
      {data.operations
        .map(convertOperations)
        .filter(skipFields)
        .map(({ name, url, field }) =>
          DIALOG_FIELDS.includes(field) ? (
            <ButtonMenuItem key={name} name={name} />
          ) : (
            <LinkMenuItem key={name} name={name} url={url} />
          )
        )}
    </DropdownMenu>
  );
};

export { IssueContextMenu };
