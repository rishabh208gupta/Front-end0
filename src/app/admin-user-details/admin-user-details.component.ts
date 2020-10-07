import { Component, OnInit } from '@angular/core';
import { Customer } from '../models/Customer';

@Component({
  selector: 'app-admin-user-details',
  templateUrl: './admin-user-details.component.html',
  styleUrls: ['./admin-user-details.component.css']
})
export class AdminUserDetailsComponent implements OnInit {
  customer:Customer=new Customer();
  constructor() { }

  ngOnInit(): void {
   this.customer.customerId= Number(sessionStorage.getItem("customerId"));
   this.customer.name= sessionStorage.getItem("customerName");
    this.customer.phoneNo=Number(sessionStorage.getItem("customerPhone"));
    this.customer.email=(sessionStorage.getItem('email'));
   // this.customer.dateOfBirth=Date(sessionStorage.getItem("dateOfBirth"));
    this.customer.address=sessionStorage.getItem('address');
  }

}
