import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private apiUrl = 'http://3.23.185.139/api/auth/register';

  constructor(private http: HttpClient) {}
 
  registerUser(userData: User): Observable<any> {
     return this.http.post(this.apiUrl, userData);
  }
 }
