import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Bill } from '../models/bill-details';
import { Payment,PaymentStatus } from '../models/payment';
import { BuyPolicyService } from '../services/buy-policy.service';
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  
  bill:Bill = new Bill();
  payment:Payment=new Payment();
  paymentStatus:PaymentStatus = new PaymentStatus();
  constructor(
    private buyPolicyservice:BuyPolicyService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.bill=JSON.parse(sessionStorage.getItem('billing'));
    this.payment.newPolicy.policyNo=parseInt(sessionStorage.getItem('policyNo'));
    this.payment.amount=this.bill.amount;
   
  }

  makePayment(){
    this.buyPolicyservice.makePayment(this.payment).subscribe(data=>{
      this.paymentStatus=data;
      sessionStorage.setItem('userPolicyNo',String(this.paymentStatus.policyNo));
      console.log(this.paymentStatus.policyNo);
      this.router.navigate(['/payment-successful']);
    })
  }

  
}
