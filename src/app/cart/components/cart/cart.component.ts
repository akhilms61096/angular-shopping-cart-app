import { CartItems } from './../../models/cart-items';
import { CartService } from './../../services/cart.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  // dependency injection
  // angular inspect constructor before creating instance  - singleton as one instance in memory

  // items: CartItems[];

  items$: Observable<CartItems[]>;

  constructor(private cartService: CartService) {
    console.log('Cartcomponent created');
    this.items$ = this.cartService.items$;  // GETTER is invoked...no need to call like function..
  }

  ngOnInit() {
  }

  addItem() {
    const item: CartItems = new CartItems();
    item.id = Math.ceil(Math.random() * 100000);
    item.name = `Product ${item.id}`;
    item.price = Math.ceil(Math.random() * 100);
    item.qty = 1;
    this.cartService.addItem(item);
  }

  removeItem(id: number) {
    this.cartService.removeItem(id);
  }

  updateQty(id: number, qty: number) {
    this.cartService.updateQty(id, qty);
  }

  empty() {
    this.cartService.emptyCart();
  }

}
