import { Component, OnInit } from '@angular/core';
import { Customer } from '../models/Customer';

@Component({
  selector: 'app-admin-user-details',
  templateUrl: './admin-user-details.component.html',
  styleUrls: ['./admin-user-details.component.css']
})
export class AdminUserDetailsComponent implements OnInit {
  customer:any;
  constructor() { }

  ngOnInit(): void {
   this.customer= sessionStorage.getItem("customer")
  }

}
