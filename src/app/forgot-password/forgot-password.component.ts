import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ForgotService } from '../services/forgot.service';
import { ForgotensMail } from '../models/forgotensmail';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css'],
})
export class ForgotPasswordComponent implements OnInit {
  val: string;
  mailId: any;
  forgotensMail: ForgotensMail = new ForgotensMail();
  errMessage: string;
  otp: string;

  constructor(private forgotService: ForgotService, private router: Router) {}

  ngOnInit(): void {}

  onSubmitClick() {
    //this.forgotensMail.mailid = this.mailId;
    this.forgotService.forgotpassword(this.forgotensMail).subscribe((data) => {
      if (data.status == 100) {
        this.errMessage = data.message;
        this.val = data.otp;
        sessionStorage.setItem('otp', this.val);
      } else {
        this.val = '';
        this.errMessage = data.message;
      }
    });
  }

  checkOtp() {
    if (sessionStorage.getItem('otp') === this.otp) {
      this.router.navigate(['reset-password']);
      this.errMessage = '';
    } else {
      this.errMessage = 'OTP did not matched';
    }
  }
}
