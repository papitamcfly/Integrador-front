import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Data} from '../interfaces/data'

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private apiUrl = 'http://3.23.185.139/api'; // Reemplaza con la URL base de tu API

  constructor(private http: HttpClient) {}

  getLogs(): Observable<Data[]> {
    const url = `${this.apiUrl}/logs`;
    return this.http.get<Data[]>(url);
  }
}
