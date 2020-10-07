import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Bill } from '../models/bill-details';
import { Payment } from '../models/payment';

@Component({
  selector: 'app-payment-successful',
  templateUrl: './payment-successful.component.html',
  styleUrls: ['./payment-successful.component.css']
})
export class PaymentSuccessfulComponent implements OnInit {
  
  bill:Bill = new Bill();
  payment:Payment=new Payment();
  policyNo:number
  constructor(
    private router:Router
  ) { }

  ngOnInit(): void {
    this.policyNo=parseInt(sessionStorage.getItem('policyNo'));
    this.bill=JSON.parse(sessionStorage.getItem('bill-details'));
    this.payment=JSON.parse(sessionStorage.getItem('payment-details'))
  }

  
}
