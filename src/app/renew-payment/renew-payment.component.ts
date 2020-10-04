import { Component, OnInit } from '@angular/core';
import { Bill } from '../models/bill-details';
import { RenewPayment } from '../models/renewPolicy';
import {RenewPolicyService} from '../services/renew-policy.service';
import { Payment,PaymentStatus } from '../models/payment';
@Component({
  selector: 'app-renew-payment',
  templateUrl: './renew-payment.component.html',
  styleUrls: ['./renew-payment.component.css']
})
export class RenewPaymentComponent implements OnInit {
  renewPayment:RenewPayment=new RenewPayment();
  bill:Bill;
  payment:Payment=new Payment();
  constructor(private renewPolicyService:RenewPolicyService) { }

  ngOnInit(): void {
    this.bill=JSON.parse(sessionStorage.getItem('billing'));
    this.payment.newPolicy.policyNo=parseInt(sessionStorage.getItem('policyNo'));
    this.payment.amount=this.bill.amount;
  }
  renewPolicyPayment(){
    this.renewPayment.newPolicy.policyNo=Number(sessionStorage.getItem('policyNo'));
    this.renewPayment.policyDuration=Number(sessionStorage.getItem('policyDuration'));
    this.renewPayment.statusConfirmation=true;
    //this.renewPayment.amount=1000;
    //this.renewPayment.paymentMode="card";
    //this.renewPayment.newPolicy.policyNo=4;
    //this.renewPayment.policyDuration=3;

    this.renewPolicyService.makePayment(this.renewPayment).subscribe(data=>{
      alert(JSON.stringify(data));
    })



  }

}
