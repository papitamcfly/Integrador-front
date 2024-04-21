import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductList } from '../interfaces/product-list';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiUrl = 'http://3.23.185.139/api/products';

  constructor(private http: HttpClient) { }

  getProducts(): Observable<ProductList[]> {
    return this.http.get<ProductList[]>(this.apiUrl);
  }
}
