export type Operation = {
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
  "assign-to-me": "/issues/assign-to-me",
};

const SKIP_FIELDS: string[] = ["log-work"];
const DIALOG_FIELDS: string[] = ["assign-issue", "comment-issue"];

class MenuItemModel {
  private _operation: Operation;

  constructor(operation: Operation) {
    this._operation = operation;
  }

  get name(): string {
    return this._operation.name;
  }

  get field(): string {
    return this._operation.internal_legacy_field;
  }

  get url(): string {
    let givenUrl = this._operation.url ?? "";
    if (Object.hasOwn(URL_OVERRIDE_FIELDS, this.field)) {
      givenUrl = URL_OVERRIDE_FIELDS[this.field];
    }

    return givenUrl;
  }

  get isLegacy(): boolean {
    return SKIP_FIELDS.includes(this.field);
  }

  get isButtonMenu(): boolean {
    return DIALOG_FIELDS.includes(this.field);
  }
}

export { MenuItemModel };
