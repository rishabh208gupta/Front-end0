import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CheckClaim } from '../models/check-policy-claim';
import {ClaimPageDisplay} from '../models/claimPageDisplay';
import{ClaimService} from '../services/claim.service';
import{ UserPageService } from '../services/user-page.service';
import{ UserVehicle } from '../models/Vehicle';
import { NewPolicy, UserPolicy } from '../models/new-policy';
import { UserClaim } from '../models/statusClaim';
import { CheckPayment, UserPayment } from '../models/payment';


@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {
  claimPageDisplay:any;
  data:any;
  customerId:any;
  userClaimVehicle:UserVehicle[]=[];
  userClaimPolicy:UserPolicy[]=[];

  userPayVehicle:UserVehicle[]=[];
  userPayPolicy:UserPolicy[]=[];

  userClaim:UserClaim[]=[];
  userPayment:UserPayment[]=[];

  customerName:string=sessionStorage.getItem('customerName');

  checkClaim:CheckClaim[]=[];
  checkPayment:CheckPayment[]=[];

  constructor(
    private router:Router, private claimService:ClaimService,private userPageService:UserPageService
  ) { }

  ngOnInit(): void {
    this.customerName=sessionStorage.getItem('customerName');
    this.userPageService.fetchClaimForPolicy(parseInt(sessionStorage.getItem('customerId'))).subscribe(data=>{
      this.checkClaim=data;
      this.getUserClaimDetails();
    })

    this.userPageService.fetchPaymentForPolicy(parseInt(sessionStorage.getItem('customerId'))).subscribe(payData=>{
      this.checkPayment=payData;
      this.getUserPaymentDetails();
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

  getUserClaimDetails(){
    for(let i=0;i<this.checkClaim.length;i++){

      if(this.checkClaim[i][0]!=null){
        this.userPageService.fetchUserVehicleDetails(parseInt(this.checkClaim[i][0])).subscribe(vehicleData=>{
          this.userClaimVehicle.push(vehicleData);
        })
      }
      if(this.checkClaim[i][1]!=null){
        this.userPageService.fetchUserPolicyDetails(parseInt(this.checkClaim[i][1])).subscribe(policyData=>{
          this.userClaimPolicy.push(policyData);
        })
      }
      if(this.checkClaim[i][2]!=null){
        this.userPageService.fetchUserClaimDetails(parseInt(this.checkClaim[i][2])).subscribe(claimData=>{
          this.userClaim.push(claimData);
        })
      }
     
    }
  }


  getUserPaymentDetails(){
    for(let i=0;i<this.checkPayment.length;i++){

      if(this.checkPayment[i][0]!=null){
        this.userPageService.fetchUserVehicleDetails(parseInt(this.checkPayment[i][0])).subscribe(vehiclePayData=>{
          this.userPayVehicle.push(vehiclePayData);
        })
      }
      if(this.checkPayment[i][1]!=null){
        this.userPageService.fetchUserPolicyDetails(parseInt(this.checkPayment[i][1])).subscribe(policyPayData=>{
          this.userPayPolicy.push(policyPayData);
        })
      }
      if(this.checkPayment[i][2]!=null){
        this.userPageService.fetchUserPaymentDetails(parseInt(this.checkPayment[i][2])).subscribe(payData=>{
          this.userPayment.push(payData);
        })
      }
     
    }
  }
}
