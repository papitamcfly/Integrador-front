import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Data} from '../interfaces/data'
import { Datos } from '../interfaces/datos';
import { API_URL } from '../app.config';
import { Mesero } from '../interfaces/mesero';
import { Sensores } from '../interfaces/sensores';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private apiUrl = API_URL; // Reemplaza con la URL base de tu API

  constructor(private http: HttpClient) {}

  getLogs(): Observable<Data[]> {
    const url = `${this.apiUrl}/logs`;
    return this.http.get<Data[]>(url);
  }
  getLogsActuales(idmesero:number): Observable<Datos[]> {
    const url = `${this.apiUrl}/logs/${idmesero}`;
    return this.http.get<Datos[]>(url);
  }
  getRobots(): Observable<Mesero[]> {
    return this.http.get<Mesero[]>(`${this.apiUrl}/meseros`);
  }
  getSensores(): Observable<Sensores[]> {
    return this.http.get<Sensores[]>(`${this.apiUrl}/sensores`);
  }
}
