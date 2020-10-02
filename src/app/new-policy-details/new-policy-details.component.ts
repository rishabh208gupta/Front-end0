
import { NewPolicy, PolicyRegistrationStatus } from '../models/new-policy';
import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { BuyPolicyService } from '../services/buy-policy.service';

@Component({
  selector: 'app-new-policy-details',
  templateUrl: './new-policy-details.component.html',
  styleUrls: ['./new-policy-details.component.css']
})
export class NewPolicyDetailsComponent implements OnInit {
 
  newPolicy:NewPolicy = new NewPolicy();
  policyRegistrationStatus :PolicyRegistrationStatus= new PolicyRegistrationStatus();
  constructor(private router:Router, private buyPolicyService:BuyPolicyService) { }

  ngOnInit(): void {
    this.newPolicy.vehicle.vehicleId=parseInt(sessionStorage.getItem('vehicleId'));
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
