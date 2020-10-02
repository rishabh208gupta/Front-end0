import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login: Login = new Login();

  constructor(
    private loginService: LoginService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  loginCheck() {
    console.log(JSON.stringify(this.login));
    
    this.loginService.login(this.login).subscribe((data) => {
      console.log(data);
      if (data.status == true) {
        sessionStorage.setItem('customerId', String(data.customerId));
        sessionStorage.setItem('customerName', data.name);
        this.router.navigate(['/forgot-password']);
        this.router.navigate(['/reset-password']);
        this.router.navigate(['/user-page']);
      }
      else 
        alert('Please enter valid userid/password');
    });
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


