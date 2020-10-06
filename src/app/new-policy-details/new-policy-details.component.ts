
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

  constructor(private router:Router, private buyPolicyService:BuyPolicyService) { }

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

 

}
