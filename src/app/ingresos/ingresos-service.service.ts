import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class IngresosServiceService {
  private apiUrl = 'http://3.23.185.139/api/ingresos';
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
