import { Component, OnInit } from '@angular/core';
import { Vehicle } from '../models/Vehicle';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-admin-vehicle-details',
  templateUrl: './admin-vehicle-details.component.html',
  styleUrls: ['./admin-vehicle-details.component.css']
})
export class AdminVehicleDetailsComponent implements OnInit {
    vehicle:Vehicle=new Vehicle();
    claimId:any;
  constructor(private adminservice: AdminService) { }

  ngOnInit(): void {
     ///// this.vehicle.chasisNo=sessionStorage.getItem('chasisNo');
      //this.vehicle.customer.customerId=Number(sessionStorage.getItem('customerId'));
     ////// this.vehicle.dlNo=Number(sessionStorage.getItem('dlNo'));
     ///// this.vehicle.engineNo=Number(sessionStorage.getItem("engineNo"));
     ////// this.vehicle.manufacturer=sessionStorage.getItem('manufacturer');
     ////// this.vehicle.model=sessionStorage.getItem('model');
      //this.vehicle.purchaseDate=(sessionStorage.getItem('purchaseDate'));
     ///// this.vehicle.registrationNo=Number(sessionStorage.getItem('registrationNo'));
     //// this.vehicle.vehicleId=Number(sessionStorage.getItem('vehicleId'));
     //// this.vehicle.vehicleType=sessionStorage.getItem('vehicleType');
     this.claimId=sessionStorage.getItem('claimId2');
     this.adminservice.fetchVehicle(this.claimId).subscribe((data)=>{
      this.vehicle.chasisNo=data.chasisNo;
      this.vehicle.dlNo=data.dlNo;
      this.vehicle.engineNo=data.engineNo;
      this.vehicle.manufacturer=data.manufacturer;
      this.vehicle.model=data.model;
      this.vehicle.registrationNo=data.registrationNo;
      this.vehicle.vehicleId=data.vehicleId;
      this.vehicle.vehicleType=data.vehicleType;
    })
  }
  

}
