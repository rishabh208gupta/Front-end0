import { Component, OnInit } from '@angular/core';
import { Vehicle } from '../models/Vehicle';

@Component({
  selector: 'app-admin-vehicle-details',
  templateUrl: './admin-vehicle-details.component.html',
  styleUrls: ['./admin-vehicle-details.component.css']
})
export class AdminVehicleDetailsComponent implements OnInit {
    vehicle:Vehicle=new Vehicle();
  constructor() { }

  ngOnInit(): void {
      this.vehicle.chasisNo=sessionStorage.getItem('chasisNo');
      //this.vehicle.customer.customerId=Number(sessionStorage.getItem('customerId'));
      this.vehicle.dlNo=Number(sessionStorage.getItem('dlNo'));
      this.vehicle.engineNo=Number(sessionStorage.getItem("engineNo"));
      this.vehicle.manufacturer=sessionStorage.getItem('manufacturer');
      this.vehicle.model=sessionStorage.getItem('model');
      //this.vehicle.purchaseDate=(sessionStorage.getItem('purchaseDate'));
      this.vehicle.registrationNo=Number(sessionStorage.getItem('registrationNo'));
      this.vehicle.vehicleId=Number(sessionStorage.getItem('vehicleId'));
      this.vehicle.vehicleType=sessionStorage.getItem('vehicleType');
  }

}
