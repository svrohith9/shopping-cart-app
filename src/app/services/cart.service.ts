import { Injectable } from '@angular/core';
import { CartItem } from '../models/cart-item.model';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartItems: CartItem[] = [];

  addToCart(product: Product): void {
    // Check if the product already exists in the cart
    const existingItem = this.cartItems.find((item) => item.product.id === product.id);

    if (existingItem) {
      // If the product already exists, increase the quantity
      existingItem.quantity++;
    } else {
      // If the product is not in the cart, add it as a new item
      const newItem: CartItem = {
        product: product,
        quantity: 1,
      };
      this.cartItems.push(newItem);
    }
  }

  getCartItems(): CartItem[] {
    return this.cartItems;
  }

  removeFromCart(item: CartItem): void {
    const itemIndex = this.cartItems.findIndex((cartItem) => cartItem === item);

    if (itemIndex !== -1) {
      // Remove the item from the cart
      this.cartItems.splice(itemIndex, 1);
    }
  }

  calculateTotalPrice(): number {
    // Calculate the total price of items in the cart
    let totalPrice = 0;

    for (const cartItem of this.cartItems) {
      totalPrice += cartItem.product.price * cartItem.quantity;
    }

    return totalPrice;
  }
}
