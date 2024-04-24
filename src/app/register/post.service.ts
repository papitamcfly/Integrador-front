import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../interfaces/user.interface';
import { API_URL } from '../app.config';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private apiUrl = API_URL+'/auth/register';

  constructor(private http: HttpClient) {}
 
  registerUser(userData: User): Observable<any> {
     return this.http.post(this.apiUrl, userData);
  }
 }
