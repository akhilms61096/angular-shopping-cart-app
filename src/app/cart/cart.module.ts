import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './components/cart/cart.component';
import { CartSummaryComponent } from './components/cart-summary/cart-summary.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    // path: 'cart', because /cart/cart was framing in the url one from app.module and one from here..
    path: '',
    component: CartComponent
  }
];

@NgModule({
  declarations: [
    CartComponent, 
    CartSummaryComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    // commenting this as we dont use it as a tag in html + whatever comes under navigation routing there is no need to export it
    // CartComponent // cartsummary is a private component so not included..anyways it is used inside the cartcomponent itself
  ]
})
export class CartModule { }
 