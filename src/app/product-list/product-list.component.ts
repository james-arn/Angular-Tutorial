import { Component } from '@angular/core';

import { products } from '../products';

@Component({
  selector: 'app-product-list',
  template: `
  <h2>Products</h2>
<div *ngFor="let product of products">
  <h3>
    <a 
      [title]="product.name + ' details'"
      [routerLink]="['/products', product.id]"
    >
      {{ product.name }}
    </a>
  </h3>
  <p *ngIf="product.description">Description: {{ product.description }}</p>
  <button type="button" (click)="share()">Share</button>

  <app-product-alerts [product]="product" (notify)="onNotify()">
  </app-product-alerts>
</div>
`,
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  products = [...products];

  onNotify() {
    window.alert('You will be notified when product is on sale');
  }

  share() {
    window.alert('The product has been shared!');
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
