import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductList } from '../interfaces/product-list';
import { API_URL } from '../app.config';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiUrl = API_URL+'/products';

  constructor(private http: HttpClient) { }

  getProducts(estado:string): Observable<ProductList[]> {
    return this.http.get<ProductList[]>(`${this.apiUrl}/${estado}`);
  }

  getProduct(id: number): Observable<ProductList> {
    return this.http.get<ProductList>(`${this.apiUrl}/${id}`);
  }

  createProduct(formData: FormData) {
    return this.http.post<any>(API_URL+'/products', formData);
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
