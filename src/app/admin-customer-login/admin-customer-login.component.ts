import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-customer-login',
  templateUrl: './admin-customer-login.component.html',
  styleUrls: ['./admin-customer-login.component.css']
})
export class AdminCustomerLoginComponent implements OnInit {
  option:string;
  errMessage: string;
  constructor(private router: Router) { }

  ngOnInit(): void {

  }
  signIn(form : NgForm){
    if (form.valid){
    if(this.option=="login")
      this.router.navigate(['/login']);
    else
      this.router.navigate(['/admin-page']);

  }
  else{
    this.errMessage = 'Choose one option';
  }
}
}
