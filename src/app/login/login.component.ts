import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  login: Login = new Login();
  data: any;
  errMessage: string;
  constructor(private loginService: LoginService, private router: Router) {}

  ngOnInit(): void {}

  loginCheck(form : NgForm) {
    if (form.valid){
    console.log(JSON.stringify(this.login));

    this.loginService.login(this.login).subscribe((data) => {
      console.log(data);
      if (data.status == true) {
        sessionStorage.setItem('customerId', String(data.customerId));
        sessionStorage.setItem('customerName', data.customerName);
      }
      this.router.navigate(['/forgot-password']);
      this.router.navigate(['/user-page']);
    });
  }
  else{
    this.errMessage = 'Invalid Email Id/ Password';
  }
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
  customerName: string;
}
