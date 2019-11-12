import { Brand } from './../../models/brand';
import { Product } from './../../models/product';
import { ProductService } from './../../services/product.service';
import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit {

  product: Product = new Product(); // for create/ngModel
  brand$: Observable<Brand[]>;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private productService: ProductService) { }

  ngOnInit() {
    // read the url paramter localhost:4200/products/edit/12343 (:id)
    const id = this.route.snapshot.params['id'];
    console.log('product id', id);

  if(id) {
    this.productService.getProduct(id)
                       .subscribe (product => {
                         this.product = product;
                       });
  }

    //outside
    this.brand$ = this.productService.getBrand();
  } 

  save() {
    
  }
}
