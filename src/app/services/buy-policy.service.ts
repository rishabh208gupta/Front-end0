import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NewPolicy, PolicyRegistrationStatus } from '../models/new-policy';
import { Vehicle, VehicleRegistrationStatus } from '../models/Vehicle';
import { Bill } from '../models/bill-details';
import { Payment,PaymentStatus } from '../models/payment';
import { PremiumStatus } from '../models/premium';
@Injectable({
  providedIn: 'root'
})
export class BuyPolicyService {

  
  constructor(
    private http:HttpClient
  ) { }

    registerVehicle(vehicle:Vehicle):Observable<VehicleRegistrationStatus>{
      let url = 'http://localhost:9090/register-vehicle';
      return this.http.post<VehicleRegistrationStatus>(url,vehicle);
    }

    registerPolicy(newPolicy:NewPolicy):Observable<PolicyRegistrationStatus>{
      let url = 'http://localhost:9090/register-policy';
      return this.http.post<PolicyRegistrationStatus>(url,newPolicy);
    }

    getBillDetails(policyNo:number):Observable<Bill>{
      let url = 'http://localhost:9090/bill-details?policyNo='+policyNo;
      return this.http.get<Bill>(url);
    }

    makePayment(payment:Payment):Observable<PaymentStatus>{
      let url = 'http://localhost:9090/make-payment';
      return this.http.post<PaymentStatus>(url,payment);
    }

    calculatePremium(vehicleId:number):Observable<PremiumStatus>{
      let url = 'http://localhost:9090/buy-policy-calculate-premium?vehicleId='+vehicleId;
      return this.http.get<PremiumStatus>(url);
    }
}
