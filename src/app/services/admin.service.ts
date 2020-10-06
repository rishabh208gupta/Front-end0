import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Admin, AdminStatus } from '../admin-page/admin-page.component';


@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }

  adminUrl: string = 'http://localhost:9090/adminpage';

  adminLogin(admin: Admin): Observable<AdminStatus>{
    return this.http.post<AdminStatus>(this.adminUrl,admin);
  }
}
