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
    sessionStorage.setItem('purchaseDate',String(this.vehicle.purchaseDate));
    sessionStorage.setItem('vehicleType',this.vehicle.vehicleType);
    sessionStorage.setItem('chasisNo',String(this.vehicle.chasisNo));
    sessionStorage.setItem('registrationNo',String(this.vehicle.registrationNo));
    sessionStorage.setItem('manufacturer',String(this.vehicle.manufacturer));
    
    this.buyPolicyService.registerVehicle(this.vehicle).subscribe(data=>{
      this.vehicleRegistrationStatus=data;
      sessionStorage.setItem('vehicleId',String(this.vehicleRegistrationStatus.vehicleId))
      console.log(this.vehicleRegistrationStatus.vehicleId);
      if(this.vehicleRegistrationStatus.status==true){
        this.router.navigate(['/new-policy']);
      }
      
    })
  }
  
  

}


