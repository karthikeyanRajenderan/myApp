import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  private baseUrl='http://localhost:8080/user';

  constructor(private http : HttpClient) { }

  createUser(user: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}` + `/create`, user);
  }

  getUser(id: number): Observable<Object> {
    return this.http.get(`${this.baseUrl}`+`/get/${id}`);
  }

  getUsersList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`+`/get`);
  } 

  deleteUser(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}`+`/delete/${id}`, { responseType: 'text' });
  }

  deleteAll(): Observable<any> {
    return this.http.delete(`${this.baseUrl}` + `/deleteAll`, { responseType: 'text' });
  }
    
  updateUser(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}`+`/update/${id}`, value);
  } 
  
}
