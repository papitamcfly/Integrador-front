import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../interfaces/user.interface';
import { Rol } from '../interfaces/rol.interface';
import { API_URL } from '../app.config';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private apiUrl = API_URL+'/usuarios';

  constructor(private http: HttpClient) { }

  indexroles(): Observable<Rol[]> {
    return this.http.get<Rol[]>(API_URL+'/roles');
  }

  indexuser(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl);
  }

  getUserById(id: number): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/${id}`);
  }

  updateUser(id: number, user: User): Observable<User> {
    return this.http.put<User>(`${this.apiUrl}/${id}`, user);
  }

  deleteUser(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  createUser(userData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}`, userData);
  }
}