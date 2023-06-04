import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  private baseUrl = 'http://localhost:3000/users';

  constructor(private http: HttpClient) { }

  register(username: string, password: string): Observable<any> {
    const user = { username, password };
    return this.http.post<any>(this.baseUrl, user);
  }
}
