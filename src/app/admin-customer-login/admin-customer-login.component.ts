import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-customer-login',
  templateUrl: './admin-customer-login.component.html',
  styleUrls: ['./admin-customer-login.component.css']
})
export class AdminCustomerLoginComponent implements OnInit {
  option:any;
  
  constructor(private router: Router) { }

  ngOnInit(): void {

  }
  signIn(){
    this.router.navigate(['/option']);
  }
}
