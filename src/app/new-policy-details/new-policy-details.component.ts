
import { NewPolicy, PolicyRegistrationStatus } from '../models/new-policy';
import { Bill } from '../models/bill-details';
import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { BuyPolicyService } from '../services/buy-policy.service';
import { CalculatePremiumService } from '../services/calculate-premium.service';

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

  constructor(private router:Router, private buyPolicyService:BuyPolicyService, private calculatePremiumService:CalculatePremiumService) { }

  ngOnInit(): void {
    this.newPolicy.vehicle.vehicleId=parseInt(sessionStorage.getItem('vehicleId'));
   // this.vehicleType=sessionStorage.getItem('vehicleType');
   // this.purchaseDate=new Date(sessionStorage.getItem('purchaseDate'));
  }
  
   
  
  onClickPayment():void{
     this.buyPolicyService.registerPolicy(this.newPolicy).subscribe(data=>{
       this.policyRegistrationStatus=data;
       sessionStorage.setItem('policyNo',String(this.policyRegistrationStatus.policyNo))
       console.log(this.policyRegistrationStatus.policyNo);
     

       this.router.navigate(['/make-payment']);
     })
  }

  onAmountClick(){
    if(this.vehicleType=='2-wheeler'){
      this.vehiclePrice=50000;
    }
    else if(this.vehicleType=='4-wheeler'){
      this.vehiclePrice=400000;
    }

    if(this.newPolicy.policy.policyType=='comprehensive'){
      this.premiumRate=7;
    }
    else if(this.newPolicy.policy.policyType=='third party liability'){
      this.premiumRate=6.5;
    }

    if(this.newPolicy.policy.policyDuration==1){
      this.planYear=1;
    }
    else if(this.newPolicy.policy.policyDuration==2){
      this.planYear=2;
    }
    else if(this.newPolicy.policy.policyDuration==3){
      this.planYear=3;
    }

    [this.idv,this.estimatedValue]=this.calculatePremiumService.calculatePremium(this.vehiclePrice,this.purchaseDate,this.premiumRate,this.planYear);


  }

}
