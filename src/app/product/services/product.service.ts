import { Brand } from './../models/brand';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${environment.apiEndPoint}/api/products`);
  }

  getBrand(): Observable<Brand[]> {
    return this.http.get<Brand[]>(`${environment.apiEndPoint}/api/brands`);
  }

  getProduct(id: number): Observable<Product> {
    return this.http.get<Product>(`${environment.apiEndPoint}/api/products/${id}`);   // ${id} $ will substitute the id
  }


}
