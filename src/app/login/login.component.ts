import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup;
  constructor(private fb:FormBuilder,private router:Router) { }

  ngOnInit(): void {
    
  }
 
  onForgotClick(){
    this.router.navigate(['/forgot-password']);
  }

  onResetClick(){
    this.router.navigate(['/reset-password']);
  }

  onLoginClick(){
    this.router.navigate(['/user-page']);
  }
  }

  export class Login {
    email: string;
    password: string;
  }
  
  export class LoginStatus {
    status: boolean;
    statusMessage: string;
    customerId: number;
    name: string;
  }


