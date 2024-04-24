import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_URL } from '../app.config';

interface LoginResponse {
  message: string;
  token?: string;
}

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private apiUrl = API_URL+'/auth';
 

  constructor(private http: HttpClient) { }


  loginUser(loginData: { email: string, password: string }): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.apiUrl}/login`, loginData);
  }

  logoutUser() {
    return this.http.post<any>(`${this.apiUrl}/logout`, {});
   }   
}