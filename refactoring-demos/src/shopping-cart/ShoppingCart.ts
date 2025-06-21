import { Item } from "./types.ts";
import { applyDiscountIfEligible } from "./utils.ts";

class ShoppingCart {
  private items: Item[] = [];

  addItemToCart({ id, price, quantity }: Item) {
    this.items.push({ id, price, quantity });
  }

  removeItemFromCart(id: string) {
    this.items = this.items.filter((item) => item.id !== id);
  }

  calculateTotal() {
    return this.items.reduce((acc, item) => {
      const subTotal = item.price * item.quantity;
      return acc + applyDiscountIfEligible(item, subTotal);
    }, 0);
  }
}

export { ShoppingCart };