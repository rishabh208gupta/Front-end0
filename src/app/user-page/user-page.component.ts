import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CheckClaim } from '../models/check-policy-claim';
import {ClaimPageDisplay} from '../models/claimPageDisplay';
import{ClaimService} from '../services/claim.service';
import{ UserPageService } from '../services/user-page.service';
import{ Vehicle } from '../models/Vehicle';
import { NewPolicy, Policy } from '../models/new-policy';
import { UserClaim } from '../models/statusClaim';


@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {
  claimPageDisplay:any;
  data:any;
  customerId:any;
  vehicle:Vehicle[]=[];
  policy:Policy[]=[];
  userClaim:UserClaim[]=[];

  checkClaim:CheckClaim[]=[];
  constructor(
    private router:Router, private claimService:ClaimService,private userPageService:UserPageService
  ) { }

  ngOnInit(): void {
    this.userPageService.fetchClaimForPolicy(parseInt(sessionStorage.getItem('customerId'))).subscribe(data=>{
      this.checkClaim=data;
      this.getUserDetails();
    })
  }

  onBuyPolicyClick(){
    this.router.navigate(['/vehicle-details']);
  }

  onRenewPolicyClick(){
    this.router.navigate(['/renew-policy']);
  }

  onClaimClick(){
    this.customerId=sessionStorage.getItem('customerId');
    this.claimService.displayOnClaimPage(this.customerId).subscribe(data=>{
      sessionStorage.setItem(this.claimPageDisplay, JSON.stringify(data));
    })
      this.router.navigate(['/claim']);
  }

  getUserDetails(){
    for(let i=0;i<this.checkClaim.length;i++){

      // if(this.checkClaim[i][0]!=null){
      //   this.userPageService.fetchUserVehicleDetails(parseInt(this.checkClaim[i][0])).subscribe(vehicleData=>{
      //     this.vehicle.push(vehicleData);
      //   })
      // }
      // if(this.checkClaim[i][1]!=null){
      //   this.userPageService.fetchUserPolicyDetails(parseInt(this.checkClaim[i][1])).subscribe(policyData=>{
      //     this.policy.push(policyData);
      //   })
      // }
      if(this.checkClaim[i][2]!=null){
        this.userPageService.fetchUserClaimDetails(parseInt(this.checkClaim[i][2])).subscribe(claimData=>{
          this.userClaim.push(claimData);
        })
      }
     
    }
  }
}
