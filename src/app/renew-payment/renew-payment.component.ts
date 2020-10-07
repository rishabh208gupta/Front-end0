import { Component, OnInit } from '@angular/core';
import { Bill } from '../models/bill-details';
import { RenewPayment } from '../models/renewPolicy';
import {RenewPolicyService} from '../services/renew-policy.service';
import { Payment,PaymentStatus } from '../models/payment';
import { Router } from '@angular/router';
@Component({
  selector: 'app-renew-payment',
  templateUrl: './renew-payment.component.html',
  styleUrls: ['./renew-payment.component.css']
})
export class RenewPaymentComponent implements OnInit {
  renewPayment:RenewPayment=new RenewPayment();
  bill:Bill;
  payment:Payment=new Payment();
  toggleBill:boolean=false;
  polDuration:any;
  constructor(private renewPolicyService:RenewPolicyService, private router:Router) { }

  ngOnInit(): void {
    this.bill=JSON.parse(sessionStorage.getItem('billing'));
    this.payment.newPolicy.policyNo=parseInt(sessionStorage.getItem('policyNo'));
   // this.payment.amount=this.bill.amount;
     this.bill.amount=Number(sessionStorage.getItem('renewAmount'));
     this.payment.amount=Number(this.bill.amount.toFixed(2));
     this.polDuration=Number(sessionStorage.getItem('polDuration'));

  }
  renewPolicyPayment(){
    this.renewPayment.newPolicy.policyNo=Number(sessionStorage.getItem('policyNo'));
    this.polDuration=Number(sessionStorage.getItem('polDuration'));
    sessionStorage.setItem("paymentMode",this.renewPayment.paymentMode);
    this.renewPayment.statusConfirmation=true;
    this.renewPayment.amount=this.payment.amount;
    this.renewPayment.policyDuration=this.polDuration;
    //this.renewPayment.paymentMode="card";
    //this.renewPayment.newPolicy.policyNo=4;
    //this.renewPayment.policyDuration=3;

    this.renewPolicyService.makePayment(this.renewPayment).subscribe(data=>{
     // alert(JSON.stringify(data));
      sessionStorage.setItem("statusMessage",data.statusMessage);
      sessionStorage.setItem("policyNo",String(data.policyNo));
      this.router.navigate(['/payment-successful']);
    })
  }
  generateBill(){
    this.toggleBill=true;
  }

}
