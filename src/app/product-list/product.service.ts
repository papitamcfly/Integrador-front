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

  getProducts(estado:string): Observable<ProductList[]> {
    return this.http.get<ProductList[]>(`${this.apiUrl}/${estado}`);
  }

  getProduct(id: number): Observable<ProductList> {
    return this.http.get<ProductList>(`${this.apiUrl}/${id}`);
  }

  createProduct(producto:ProductList): Observable<ProductList> {
    return this.http.post<ProductList>(this.apiUrl, producto);
  }

  updateProduct(id: number, formData: FormData): Observable<ProductList> {
    return this.http.put<ProductList>(`${this.apiUrl}/${id}`, formData);
  }

  deleteProduct(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
  changestatus(id: number,estado:string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}/${estado}`);
  }
}
