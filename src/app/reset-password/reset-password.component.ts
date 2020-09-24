import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators  } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {
  resetPasswordForm: FormGroup;
  constructor(
    private fb: FormBuilder,
  ) { 
    
  }

  ngOnInit(): void {
    this.buildResetPasswordForm();
  }
  
  buildResetPasswordForm(): void {
    this.resetPasswordForm = this.fb.group({
      emailId:['',Validators.required],
      newPassword:['',Validators.required],
      confirmPassword:['',Validators.required]
    })
  }


  onSubmitClick(): void {
    if (this.resetPasswordForm.valid) {
      alert('Password reset successfully')
    } else {
      alert('Please enter the correct fields')
    }
  }


}
