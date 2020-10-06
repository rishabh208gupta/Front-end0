import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PasswordReset } from '../models/passwordReset';
import { ResetStatus } from '../models/resetStatus';
@Injectable({
  providedIn: 'root',
})
export class ResetService {
  constructor(private http: HttpClient) {}

  resetPassword(passwordReset: PasswordReset): Observable<ResetStatus> {
    let url = 'http://localhost:9090/resetpass';
    return this.http.post<ResetStatus>(url, passwordReset);
  }
}
