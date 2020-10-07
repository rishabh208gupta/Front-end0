
import { NewPolicy, PolicyRegistrationStatus } from '../models/new-policy';
import { Bill } from '../models/bill-details';
import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { BuyPolicyService } from '../services/buy-policy.service';
import { CalculatePremiumService } from '../services/calculate-premium.service';
import { PremiumStatus } from '../models/premium';

@Component({
  selector: 'app-new-policy-details',
  templateUrl: './new-policy-details.component.html',
  styleUrls: ['./new-policy-details.component.css']
})
export class NewPolicyDetailsComponent implements OnInit {
 
  newPolicy:NewPolicy = new NewPolicy();
  policyRegistrationStatus :PolicyRegistrationStatus= new PolicyRegistrationStatus();
  bill:Bill=new Bill();

  vehicleType:string;
  purchaseDate:Date;
  vehiclePrice:number;
  premiumRate:number;
  planYear:number;
  idv:number;
  estimatedValue:number;
  premiumStatus:PremiumStatus = new PremiumStatus();

  constructor(private router:Router, private buyPolicyService:BuyPolicyService) { }

  ngOnInit(): void {
    alert(sessionStorage.getItem('vehicleId'));
    this.newPolicy.vehicle.vehicleId=parseInt(sessionStorage.getItem('vehicleId'));
   // this.vehicleType=sessionStorage.getItem('vehicleType');
   // this.purchaseDate=new Date(sessionStorage.getItem('purchaseDate'));
   this.buyPolicyService.calculatePremium(parseInt(sessionStorage.getItem('vehicleId'))).subscribe(data=>{
    this.premiumStatus=data;
    alert(JSON.stringify(this.premiumStatus));

   })
  }
  
   
  
  onClickPayment():void{
     this.buyPolicyService.registerPolicy(this.newPolicy).subscribe(data=>{
       this.policyRegistrationStatus=data;
       sessionStorage.setItem('policyNo',String(this.policyRegistrationStatus.policyNo))
       console.log(this.policyRegistrationStatus.policyNo);
     
      sessionStorage.setItem('premiumAmount',String(this.estimatedValue));
       this.router.navigate(['/make-payment']);
     })
  }

  onAmountClick(){
    if(this.newPolicy.policy.policyType=='comprehensive'){
      if(this.newPolicy.policy.policyDuration==1){
        this.idv=this.premiumStatus.idvComp1;
        this.estimatedValue=this.premiumStatus.amountComp1;
      }
      else if(this.newPolicy.policy.policyDuration==2){
        this.idv=this.premiumStatus.idvComp2;
        this.estimatedValue=this.premiumStatus.amountComp2;
      }
      else if(this.newPolicy.policy.policyDuration==3){
        this.idv=this.premiumStatus.idvComp3;
        this.estimatedValue=this.premiumStatus.amountComp3;
      }
    }
    else if(this.newPolicy.policy.policyType=='third party liability'){
      if(this.newPolicy.policy.policyDuration==1){
        this.idv=this.premiumStatus.idvParty1;
        this.estimatedValue=this.premiumStatus.amountParty1;
      }
      else if(this.newPolicy.policy.policyDuration==2){
        this.idv=this.premiumStatus.idvParty2;
        this.estimatedValue=this.premiumStatus.amountParty2;
      }
      else if(this.newPolicy.policy.policyDuration==3){
        this.idv=this.premiumStatus.idvParty3;
        this.estimatedValue=this.premiumStatus.amountParty3;
      }
    }
  }
 

}
