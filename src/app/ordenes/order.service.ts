import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ordenes } from '../interfaces/ordenes';
import { Order } from '../interfaces/order';
import { API_URL } from '../app.config';
@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private apiUrl = API_URL+'/orders';
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
  sendClientEmail(info:any[]): Observable<any> {
    return this.http.post(`${this.apiUrl}/sendClient`, info);
  }
}
