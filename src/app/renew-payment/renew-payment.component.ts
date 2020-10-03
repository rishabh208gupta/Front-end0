import { Component, OnInit } from '@angular/core';
import { RenewPayment } from '../models/renewPolicy';
import {RenewPolicyService} from '../services/renew-policy.service';
@Component({
  selector: 'app-renew-payment',
  templateUrl: './renew-payment.component.html',
  styleUrls: ['./renew-payment.component.css']
})
export class RenewPaymentComponent implements OnInit {
  renewPayment:RenewPayment=new RenewPayment();
  constructor(private renewPolicyService:RenewPolicyService) { }

  ngOnInit(): void {
  }
  renewPolicyPayment(){
    //this.renewPayment.newPolicy.policyNo=Number(sessionStorage.getItem('policyNo'));
    //this.renewPayment.policyDuration=Number(sessionStorage.getItem('policyDuration'));
    this.renewPayment.statusConfirmation=true;
    this.renewPayment.amount=1000;
    this.renewPayment.paymentMode="card";
    this.renewPayment.newPolicy.policyNo=4;
    this.renewPayment.policyDuration=3;

    this.renewPolicyService.makePayment(this.renewPayment).subscribe(data=>{
      alert(JSON.stringify(data));
    })



  }

}
