import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PolicyVehicleDetailsService {

  constructor(private http:HttpClient) { }

  fetchVehiclePolicyDetails(policyNo:number):Observable<any>{
    let url = 'http://localhost:9090/fetch-vehicle-policy-details?policyNo='+policyNo;
    return this.http.get(url);
  }
}
