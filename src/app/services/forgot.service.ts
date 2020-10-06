import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ForgotensMail } from '../models/forgotensmail';
import { CustomerStatus } from '../models/customerStatus';

@Injectable({
  providedIn: 'root',
})
export class ForgotService {
  constructor(private http: HttpClient) {}

  forgotpassword(forgotensmail: ForgotensMail): Observable<CustomerStatus> {
    let url: string = 'http://localhost:9090/emailotp';
    return this.http.post<CustomerStatus>(url, forgotensmail);
  }
}
