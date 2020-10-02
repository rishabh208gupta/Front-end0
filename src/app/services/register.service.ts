import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../models/Customer';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  registerUrl: string = 'http://localhost:9090/register';

  constructor(private http: HttpClient) {}

  regCustomer(customer: Customer): Observable<Customer> {
    return this.http.post<Customer>(this.registerUrl, customer);
  }
}
