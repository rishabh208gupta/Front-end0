import { Component, OnInit } from '@angular/core';
import{PolicyVehicleDetailsService} from '../services/policy-vehicle-details.service';
import{ClaimService} from '../services/claim.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-fetch-vehicle-policy-details',
  templateUrl: './fetch-vehicle-policy-details.component.html',
  styleUrls: ['./fetch-vehicle-policy-details.component.css']
})
export class FetchVehiclePolicyDetailsComponent implements OnInit {
userPolicyNo:number;
vehiclePolicyDetails:any;
reason:string;
  constructor(private vehiclePolicy:PolicyVehicleDetailsService,private claimService:ClaimService
                ,private router:Router) { }

  ngOnInit(): void {
    //alert(sessionStorage.getItem('userPolicyNo'));
    this.userPolicyNo=parseInt(sessionStorage.getItem('userPolicyNo'));
    this.vehiclePolicy.fetchVehiclePolicyDetails(this.userPolicyNo).subscribe(data=>{
     // alert(JSON.stringify(data));
      this.vehiclePolicyDetails=data;

    })

  }
  onClaimClick(){

   this.claimService.onClickingClaim(this.userPolicyNo,this.reason).subscribe(data=>{
      sessionStorage.setItem('claimId',String(data.claimId));
      sessionStorage.setItem('statusMessage',data.statusMessage);
      sessionStorage.setItem('status',String(data.status));
      // console.log(this.statusClaim[0]);
      this.router.navigate(['/claim-successful']);
   })

}
}
