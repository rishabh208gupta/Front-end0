import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from '../models/Customer';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  registerUrl: string = 'http://localhost:9090/register';

  constructor(private http: HttpClient) {}

regCustomer(customer: Customer): Observable<Customer> {
  return this.http.post<Customer>(this.registerUrl,customer);
}
}
