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
              )
            );
          }

          return result;
        },
        [] as React.ReactNode[]
      )}
    </DropdownMenu>
  );
};

export { IssueContextMenu };
