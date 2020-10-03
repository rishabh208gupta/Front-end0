import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {RenewStatus} from '../models/statusClaim'

@Injectable({
  providedIn: 'root'
})
export class RenewPolicyService {

  constructor(private http:HttpClient) { }
  renewPolicy(policyNo:number,policyDuration:number):Observable<RenewStatus>{
    let url="http://localhost:9090/renew-policy?policyNo="+policyNo+"&policyDuration="+policyDuration;
    return this.http.get<RenewStatus>(url);

  }
}
