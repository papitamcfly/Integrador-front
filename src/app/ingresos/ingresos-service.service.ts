import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ingresos } from '../interfaces/ingresos';
import { ProductGroup } from '../interfaces/productos-ingresos.interface';

@Injectable({
  providedIn: 'root'
})
export class IngresosServiceService {
  private apiUrl = 'http://3.23.185.139/api/ingresos';
  constructor(private http: HttpClient) { }

  getOrders(): Observable<Ingresos[]> {
    return this.http.get<Ingresos[]>(this.apiUrl);
  }
  viewIngresosByType(type:string): Observable<Ingresos[]> {
    return this.http.get<Ingresos[]>(`${this.apiUrl}/${type}`);
 }
 viewIngresosWithProducts(type:string): Observable<ProductGroup[]> {
  return this.http.get<ProductGroup[]>(`${this.apiUrl}/productos/${type}`);
}
}
