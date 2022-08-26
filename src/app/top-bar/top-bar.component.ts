import { Component } from '@angular/core';

@Component({
  selector: 'app-top-bar',
  template: `
  <a [routerLink]="['/']">
    <h1>My Store</h1>
  </a>
<a 
routerLink="/cart"
class="button fancy-button"
>
    <i class="material-icons">
      shopping_cart
    </i>
    Checkout
</a>
`,
  styleUrls: ['./top-bar.component.css'],
})
export class TopBarComponent {}
