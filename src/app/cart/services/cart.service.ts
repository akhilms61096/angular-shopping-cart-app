import { CartItems } from './../models/cart-items';
import { Injectable } from '@angular/core';
// BehaviorSubject keeps hold of last known values
// if anyone subscribe, immediately calls the publish with last known value
import { Subject, BehaviorSubject } from 'rxjs';

// business logic
// communication with web service
// api calls
// help component to share the data without input/output
// contains application state 

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cartItems: CartItems[] = [];
  private _amount: number = 0;
  private _totalItems: number = 0;

  amount$: BehaviorSubject<number> = new BehaviorSubject(this._amount);
  count$: BehaviorSubject<number> = new BehaviorSubject(this._totalItems);
  items$: BehaviorSubject<CartItems[]> = new BehaviorSubject(this.cartItems);

  constructor() { 
    console.log('cart service created');
  }

  //ES6 feature of getter and setter
  get amount() {
    return this._amount;
  }

  set amount(value: number) {
    this._amount = value;
    // publish the data change
    this.amount$.next(this._amount);
  }

  get count() {
    return this._totalItems;
  }

  set count(value: number) {
    this._totalItems = value;
    this.count$.next(this._totalItems);
  }

  get items() {
    return this.cartItems;
  }

  private calculate(): void {
    let count = 0;
    let amount = 0;

    for(const item of this.cartItems) {
      count += item.qty;
      amount += item.price * item.qty;
    }
    // setter
    this.amount = amount;
    this.count = count;
    this.items$.next(this.cartItems); // publish the cart items
  }

  addItem(item: CartItems) {
    this.cartItems.push(item);
    this.calculate();
  }
  removeItem(id: number) {
    const index = this.cartItems.findIndex(item => item.id === id);
    if(index >=0 ) {
      this.cartItems.splice(index,1);
    }
    this.calculate();
  }
  updateQty(id: number, qty: number) {
    const item: CartItems = this.cartItems.find(item => item.id === id);
    if(item) {
      item.qty = qty;
    }
    this.calculate();
  }
  emptyCart() {
  //  this.cartItems.splice(0,this.cartItems.length);
    this.cartItems = [];
    this.calculate();
  }
}
