import {Item} from "./types.ts";

export function applyDiscountIfEligible(item: Item, subTotal: number) {
  if (item.quantity > 10) {
    subTotal *= 0.9;
  }
  return subTotal;
}