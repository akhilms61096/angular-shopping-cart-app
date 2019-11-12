import { CartService } from './../../../cart/services/cart.service';
import { CartItems } from './../../../cart/models/cart-items';
import { ProductService } from './../../services/product.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})

// sync will automatically unsubscribe and cancel the call... if we dont use async we can manually create Subscription object for .subscribe and use it in ngOnDestroy to kill the call

export class ProductListComponent implements OnInit {

  products$: Observable<Product[]>;

  price: number;

  constructor(private productService: ProductService,
              private cartService: CartService) { 
  }

  ngOnInit() {
    this.products$ = this.productService.getProducts();
  }

  addToCart(product: Product) {
    const item: CartItems = new CartItems();
    item.id = product.id;
    item.name = product.name;
    item.price = product.price;
    item.qty = 1;
    this.cartService.addItem(item);
  }

  deleteProduct(id: number) {

  }

}
