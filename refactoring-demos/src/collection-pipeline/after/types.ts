export type Operation = {
  internal_legacy_field: string;
  name: string;
  desc?: string;
  url?: string;
};

export type IssueResponse = {
  operations: Operation[];
};