import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, products } from '../products';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  template: `
  <h2> Product Details </h2>
  <div *ngIf="product">
   <h3> Product: {{ product.name }} </h3>
   <h4> Price: {{ product.price | currency }} </h4>
   <p> Description: {{ product.description }} </p>
   <button (click)="addToCart(product)"> Add to cart </button>
  </div>
  `,
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  product: Product | undefined;

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) {}

  ngOnInit() {
    // 1. Get the product id from current route
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));
    // 2. find product that corresponds with the id provided in route.
    this.product = products.find(
      (product) => product.id === productIdFromRoute
    );
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
    window.alert('your proudct has beena dded tot he cart!');
  }
}
