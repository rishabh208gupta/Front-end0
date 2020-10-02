import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Login, LoginStatus } from '../login/login.component';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  loginUrl: string = 'http://localhost:9090/login';

  constructor(private http: HttpClient) { }

  login(login: Login): Observable<LoginStatus>{
    let url='http://localhost:8183/login';
    return this.http.post<LoginStatus>(url,login);
  }
}
