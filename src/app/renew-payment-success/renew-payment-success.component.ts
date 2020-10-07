import { Component, OnInit } from '@angular/core';
import { Bill } from '../models/bill-details';
import{Payment} from '../models/payment';
@Component({
  selector: 'app-renew-payment-success',
  templateUrl: './renew-payment-success.component.html',
  styleUrls: ['./renew-payment-success.component.css']
})
export class RenewPaymentSuccessComponent implements OnInit {
  statusMessage:any;
  bill:Bill;
  payment:Payment=new Payment();
  polDuration:any;
  policyNo:any;
  name:any;
  constructor() { }

  ngOnInit(): void {
    this.name=sessionStorage.getItem('customerName');
    this.statusMessage=sessionStorage.getItem('statusMessage');
    this.policyNo=sessionStorage.getItem('policyNo');
    this.bill=JSON.parse(sessionStorage.getItem('billing'));
    this.payment.newPolicy.policyNo=parseInt(sessionStorage.getItem('policyNo'));
     this.bill.amount=Number(sessionStorage.getItem('renewAmount'));
     this.payment.amount=Number(this.bill.amount.toFixed(2));
     this.polDuration=Number(sessionStorage.getItem('polDuration'));
  }

}
