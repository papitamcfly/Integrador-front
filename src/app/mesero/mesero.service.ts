import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_URL } from '../app.config';
import { Mesero } from '../interfaces/mesero';
@Injectable({
  providedIn: 'root'
})
export class MeseroService {
  private apiUrl = API_URL; // URL base de la API

  constructor(private http: HttpClient) { }

  createMesero(genero: Mesero): Observable<Mesero> {
    return this.http.post<Mesero>(`${this.apiUrl}/createMeseros`, genero);
 }

  actualizarMesero(id: number, genero: Mesero): Observable<Mesero> {
    return this.http.put<Mesero>(`${this.apiUrl}/updateMeseros/${id}`, genero);
 }
  buscarmesero(id: number): Observable<Mesero> {
    return this.http.get<Mesero>(`${this.apiUrl}/showmesero/${id}`);

  }
}