import { Component, OnInit } from '@angular/core';
import { Bill } from '../models/bill-details';
import { RenewPayment } from '../models/renewPolicy';
import {RenewPolicyService} from '../services/renew-policy.service';
import { Payment,PaymentStatus } from '../models/payment';
import { Router } from '@angular/router';
import { BuyPolicyService } from '../services/buy-policy.service';
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
  policyNo:any;
  payDummy:number;
  constructor(private renewPolicyService:RenewPolicyService, private router:Router,private buyPolicyService:BuyPolicyService) { }

  ngOnInit(): void {
    this.policyNo=sessionStorage.getItem('policyNo');
    this.buyPolicyService.getBillDetails(this.policyNo).subscribe(response=>{
      this.bill=response;
      sessionStorage.setItem('billing', JSON.stringify(this.bill));
    })
   
    this.payment.newPolicy.policyNo=this.policyNo;
    this.payDummy=Number(sessionStorage.getItem('renewAmount'));
     this.payment.amount=Number(this.payDummy.toFixed(2));
     this.polDuration=Number(sessionStorage.getItem('polDuration'));

  }
  renewPolicyPayment(){
    this.renewPayment.newPolicy.policyNo=Number(sessionStorage.getItem('policyNo'));
    this.polDuration=Number(sessionStorage.getItem('polDuration'));
    sessionStorage.setItem("paymentMode",this.renewPayment.paymentMode);
    this.renewPayment.statusConfirmation=true;
    this.renewPayment.amount=this.payment.amount;
    this.renewPayment.policyDuration=this.polDuration;
    
    this.renewPolicyService.makePayment(this.renewPayment).subscribe(data=>{
      sessionStorage.setItem("statusMessage",data.statusMessage);
      sessionStorage.setItem("policyNo",String(data.policyNo));
      this.router.navigate(['/renew-payment-success']);
    })
  }
  generateBill(){
    this.toggleBill=true;
  }

}
