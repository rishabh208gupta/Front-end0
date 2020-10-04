import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CheckClaim } from '../models/check-policy-claim';
import { UserPolicy } from '../models/new-policy';
import { UserPayment } from '../models/payment';
import { UserClaim } from '../models/statusClaim';
import { UserVehicle } from '../models/Vehicle';

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
    fetchUserVehicleDetails(vehicleId:number):Observable<UserVehicle>{
      let url = 'http://localhost:9090/fetch-user-vehicle-details?vehicleId='+vehicleId;
      return this.http.get<UserVehicle>(url);
    }

    fetchUserPolicyDetails(policyNo:number):Observable<UserPolicy>{
      let url = 'http://localhost:9090/fetch-user-policy-details?policyNo='+policyNo;
      return this.http.get<UserPolicy>(url);
    }

    fetchUserClaimDetails(claimId:number):Observable<UserClaim>{
      let url = 'http://localhost:9090/fetch-user-claim-details?claimId='+claimId;
      return this.http.get<UserClaim>(url);
    }

    fetchPaymentForPolicy(customerId:number):Observable<any>{
      let url = 'http://localhost:9090/fetch-payment-policy?customerId='+customerId;
      return this.http.get<any>(url);
    }

    fetchUserPaymentDetails(paymentId:number):Observable<UserPayment>{
      let url = 'http://localhost:9090/fetch-user-payment-details?paymentId='+paymentId;
      return this.http.get<UserPayment>(url);
    }
}
