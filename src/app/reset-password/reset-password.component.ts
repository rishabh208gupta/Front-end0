import { Component, OnInit } from '@angular/core';
import { ResetService } from '../services/reset.service';
import { PasswordReset } from '../models/passwordReset';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css'],
})
export class ResetPasswordComponent implements OnInit {
  newPassword: string;
  confirmPassword: string;
  errMessage: string;
  passwordReset: PasswordReset = new PasswordReset();
  constructor(private resetService: ResetService, private router: Router) {}

  ngOnInit(): void {}

  onSubmitClick(): void {
    if (this.newPassword === this.confirmPassword) {
      this.passwordReset.newPassword = this.newPassword;
      this.passwordReset.emailId = sessionStorage.getItem('userMailId');
      this.resetService.resetPassword(this.passwordReset).subscribe((data) => {
        if (data.status == 100) {
          this.router.navigate(['home-page']);
          this.errMessage = '';
        } else {
          this.errMessage = data.message;
        }
      });
    } else {
      this.errMessage = 'Password do not match';
    }
  }
}
