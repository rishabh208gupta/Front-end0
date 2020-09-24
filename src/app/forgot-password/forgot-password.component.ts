import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators  } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  forgotPasswordForm: FormGroup;
  constructor(
    private fb: FormBuilder,
  ) { 
    
  }

  ngOnInit(): void {
    this.buildForgotPasswordForm();
  }
  buildForgotPasswordForm(): void {
    this.forgotPasswordForm = this.fb.group({
      emailId:['',Validators.required],
      captcha:['',Validators.required]
    })
  }


  onSubmitClick(): void {
    if (this.forgotPasswordForm.valid) {
      alert('Password changed successfully')
    } 
    else {
      alert('Please enter the correct fields')
    }
  }

}
