import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CartService  {
  private apiUrl = '/api/cart';

  constructor(private http: HttpClient) { }

  getCart(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}`);
  }

  removeFromCart(itemId: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/remove`, { params: { id: itemId } });
  }

  updateQuantity(itemId: string, quantity: number): Observable<any> {
    return this.http.put(`${this.apiUrl}/update`, { id: itemId, quantity });
  }

  clearCart(): Observable<any> {
    return this.http.delete(`${this.apiUrl}/clear`);
  }
  addToCart(product: any): Observable<any> {
    const url = `${this.apiUrl}/add`;
    const body = {
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: 1, // Puedes ajustar la cantidad inicial aquí
      img: product.imageUrl,
      slug: product.slug // Supongo que tu producto tiene una propiedad "slug"
    };

    return this.http.post(url, body);
  }
}