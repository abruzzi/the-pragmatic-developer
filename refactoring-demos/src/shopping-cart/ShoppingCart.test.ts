import {ShoppingCart} from "./ShoppingCart.ts";

describe('ShoppingCart', () => {
  it('should calculate total price', () => {
    const shoppingCart = new ShoppingCart();

    shoppingCart.addItemToCart({id: "1", price: 2.0, quantity: 3});

    const total = shoppingCart.calculateTotal();
    expect(total).toEqual(6.0);
  });

  it('should calculate total price with multiple items', () => {
    const shoppingCart = new ShoppingCart();

    shoppingCart.addItemToCart({id: "1", price: 2.0, quantity: 3});
    shoppingCart.addItemToCart({id: "2", price: 5.0, quantity: 2});

    const total = shoppingCart.calculateTotal();
    expect(total).toEqual(16.0);
  });

  it('should remove item from cart', () => {
    const shoppingCart = new ShoppingCart();

    shoppingCart.addItemToCart({id: "1", price: 2.0, quantity: 3});
    shoppingCart.addItemToCart({id: "2", price: 5.0, quantity: 2});

    shoppingCart.removeItemFromCart("1");
    const total = shoppingCart.calculateTotal();
    expect(total).toEqual(10.0);
  });

  it('should discount when eligible', () => {
    const shoppingCart = new ShoppingCart();

    shoppingCart.addItemToCart({id: "1", price: 2.0, quantity: 11});

    const total = shoppingCart.calculateTotal();
    expect(total).toEqual(19.8);
  });
});