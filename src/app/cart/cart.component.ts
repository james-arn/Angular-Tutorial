import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  template: `
  <h3> Cart </h3>
  <div 
  class="cart-item"
  *ngFor="let item of items">
    <span>{{ item.name }}</span>
    <span>{{ item.price | currency }}</span>
  </div>
  <a routerLink="/shipping">
  Shipping prices
  </a>
  `,
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  items = this.cartService.getCartItems();

  constructor(private cartService: CartService) {}
}
