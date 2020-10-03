import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CheckClaim } from '../models/check-policy-claim';
import { Policy } from '../models/new-policy';
import { UserClaim } from '../models/statusClaim';
import { Vehicle } from '../models/Vehicle';

@Injectable({
  providedIn: 'root'
})
export class UserPageService {

  
  constructor(
    private http:HttpClient
  ) { }

    fetchClaimForPolicy(customerId:number):Observable<any>{
      let url = 'http://localhost:9090/fetch-claim-policy?customerId='+customerId;
      return this.http.get<any>(url);
    }
    fetchUserVehicleDetails(vehicleId:number):Observable<Vehicle>{
      let url = 'http://localhost:9090/fetch-user-vehicle-details?vehicleId='+vehicleId;
      return this.http.get<Vehicle>(url);
    }

    fetchUserPolicyDetails(policyNo:number):Observable<Policy>{
      let url = 'http://localhost:9090/fetch-user-policy-details?policyNo='+policyNo;
      return this.http.get<Policy>(url);
    }

    fetchUserClaimDetails(claimId:number):Observable<UserClaim>{
      let url = 'http://localhost:9090/fetch-user-claim-details?claimId='+claimId;
      return this.http.get<UserClaim>(url);
    }
}
