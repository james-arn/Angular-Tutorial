import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <app-top-bar></app-top-bar>
<div class="container">
  <router-outlet></router-outlet>
</div>
`,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
