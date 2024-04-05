import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Order } from '../interfaces/order';
@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private apiUrl = 'http://localhost:8000/api/orders';
  constructor(private http: HttpClient) { }

  createOrder(order: Order): Observable<any> {
    return this.http.post(this.apiUrl, order);
  }
}
