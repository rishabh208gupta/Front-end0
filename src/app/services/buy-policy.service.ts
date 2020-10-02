import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Vehicle, VehicleRegistrationStatus } from '../models/Vehicle';
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
}
