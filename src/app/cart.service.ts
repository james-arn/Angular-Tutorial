import { Injectable } from '@angular/core';
import { Product } from './products';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  items: Product[] = [];

  constructor() {}

  addToCart(product: Product) {
    this.items.push(product);
  }

  // Collects the items users add to the cart and returns each item with its associated quantity.
  getCartItems() {
    return this.items;
  }

  clearCartItems() {
    this.items = [];
    return this.items;
  }
}
