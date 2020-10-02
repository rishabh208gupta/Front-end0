import { Component, OnInit } from '@angular/core';
import { Vehicle, VehicleRegistrationStatus } from '../models/Vehicle';
import { Router } from '@angular/router';
import { BuyPolicyService } from '../services/buy-policy.service';

@Component({
  selector: 'app-vehicle-details',
  templateUrl: './vehicle-details.component.html',
  styleUrls: ['./vehicle-details.component.css']
})
export class VehicleDetailsComponent implements OnInit {
 
  vehicle:Vehicle = new Vehicle();
  vehicleRegistrationStatus:VehicleRegistrationStatus = new VehicleRegistrationStatus();
  constructor(private router:Router, private buyPolicyService:BuyPolicyService) { }

 

  ngOnInit(): void {
    this.vehicle.customer.customerId=parseInt(sessionStorage.getItem('customerId')) ;
  }

  onBuyInsuranceClick(){
    this.buyPolicyService.registerVehicle(this.vehicle).subscribe(data=>{
      this.vehicleRegistrationStatus=data;
      sessionStorage.setItem('vehicleId',String(this.vehicleRegistrationStatus.vehicleId))
      console.log(this.vehicleRegistrationStatus.vehicleId);
      this.router.navigate(['new-policy']);
    })
  }
  
  

}


