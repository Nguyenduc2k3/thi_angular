import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private baseUrl = 'http://localhost:3000/users';

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}?username=${username}&password=${password}`);
  }
}
