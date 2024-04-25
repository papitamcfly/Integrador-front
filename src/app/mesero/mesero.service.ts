import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MeseroService {
  private apiUrl = 'http://127.0.0.1:8000/api'; // URL base de la API

  constructor(private http: HttpClient) { }

  crearMesero(nombre: string): Observable<any> {
    const meseroData = { nombre };
    return this.http.post(`${this.apiUrl}/createMeseros`, meseroData);
  }
}