import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-shipping',
  template: `
  <h3> Shipping Prices </h3>
  <div 
  class="shipping-item" 
  *ngFor="let shipping of shippingCosts | async"
  >
    <span> {{shipping.type}} </span>
    <span> {{shipping.price}} </span>
  </div>
  <a routerLink="/cart"> Back
  </a>
  `,
  styleUrls: ['./shipping.component.css'],
})
export class ShippingComponent implements OnInit {
  shippingCosts!: Observable<{ type: string; price: number }[]>;
  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.shippingCosts = this.cartService.getShippingPrices();
  }
}
