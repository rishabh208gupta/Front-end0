import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../models/Customer';
import { Status } from '../models/Status';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  registerUrl: string = 'http://localhost:9090/register';

  constructor(private http: HttpClient) {}

  regCustomer(customer: Customer): Observable<Status> {
    return this.http.post<Status>(this.registerUrl, customer);
  }
}
