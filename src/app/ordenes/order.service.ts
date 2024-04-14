import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ordenes } from '../interfaces/ordenes';
import { Order } from '../interfaces/order';
@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private apiUrl = 'http://127.0.0.1:8000/api/orders';
  constructor(private http: HttpClient) { }

  createOrder(order: Order): Observable<any> {
    return this.http.post(this.apiUrl, order);
  }
  getOrders(): Observable<Ordenes[]> {
    return this.http.get<Ordenes[]>(this.apiUrl);
  }
  viewOrdersByStatus(status:string): Observable<Ordenes[]> {
    return this.http.get<Ordenes[]>(`${this.apiUrl}/${status}`);
 }
 changestatus(id: number,estado:string,orden: Ordenes): Observable<Ordenes> {
  return this.http.put<Ordenes>(`${this.apiUrl}/${id}/${estado}`, orden);
}
}
