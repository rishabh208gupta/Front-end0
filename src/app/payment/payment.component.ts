import { Component, OnInit } from '@angular/core';
import { Bill } from '../models/bill-details';
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  bill:Bill = new Bill();
  constructor() { }

  ngOnInit(): void {
    this.bill=JSON.parse(sessionStorage.getItem('billing'));
  }

}
