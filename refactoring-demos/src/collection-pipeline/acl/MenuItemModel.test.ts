
import { describe, it, expect } from "vitest";
import {MenuItemModel, MenuItemType} from "./MenuItemModel.ts";


describe('MenuItemModel', () => {
  it('converts operation to menu item model', () => {
    const operation = {
      "internal_legacy_field": "assign-issue",
      "name": "Assign",
      "desc": "Assign this issue to someone",
      "url": "/issues/assign"
    };

    const model = new MenuItemModel(operation);
    expect(model.name).toEqual('Assign');
    expect(model.field).toEqual('assign-issue');
    expect(model.url).toEqual('/issues/assign');
  })

  it('check is an operation is legacy or not', () => {
    const operation =     {
      "internal_legacy_field": "log-work",
      "name": "Log work",
      "desc": "Log work against this issue"
    };

    const model = new MenuItemModel(operation);
    expect(model.isLegacy).toBeTruthy();
  })

  it('check is an operation is legacy or not', () => {
    const operation =     {
      "internal_legacy_field": "assign-issue",
      "name": "Assign",
      "desc": "Assign this issue to someone",
      "url": "/issues/assign"
    };

    const model = new MenuItemModel(operation);
    expect(model.isLegacy).toBeFalsy();
  })

  it('returns Button type when it is a button', () => {
    const operation =     {
      "internal_legacy_field": "assign-issue",
      "name": "Assign",
      "desc": "Assign this issue to someone",
      "url": "/issues/assign"
    };

    const model = new MenuItemModel(operation);
    expect(model.type).toEqual(MenuItemType.ButtonMenuItem);
  })
})
