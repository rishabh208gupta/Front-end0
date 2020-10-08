import { Component, OnInit } from '@angular/core';
import{PolicyVehicleDetailsService} from '../services/policy-vehicle-details.service';
@Component({
  selector: 'app-fetch-vehicle-policy-details',
  templateUrl: './fetch-vehicle-policy-details.component.html',
  styleUrls: ['./fetch-vehicle-policy-details.component.css']
})
export class FetchVehiclePolicyDetailsComponent implements OnInit {
userPolicyNo:number;
vehiclePolicyDetails:any;
  constructor(private vehiclePolicy:PolicyVehicleDetailsService) { }

  ngOnInit(): void {
    alert(sessionStorage.getItem('userPolicyNo'));
    this.userPolicyNo=parseInt(sessionStorage.getItem('userPolicyNo'));
    this.vehiclePolicy.fetchVehiclePolicyDetails(this.userPolicyNo).subscribe(data=>{
      alert(JSON.stringify(data));
      this.vehiclePolicyDetails=data;

    })

  }

}
