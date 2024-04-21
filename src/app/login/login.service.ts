import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface LoginResponse {
  message: string;
  token?: string;
}

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private apiUrl = 'http://3.23.185.139/api/auth';
 

  constructor(private http: HttpClient) { }


  loginUser(loginData: { email: string, password: string }): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.apiUrl}/login`, loginData);
  }

  logoutUser() {
    return this.http.post<any>(`${this.apiUrl}/logout`, {});
   }   
}