import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Router } from '@angular/router';
import { Customer } from '../models/Customer';
import { RegisterService } from '../services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  customer: Customer = new Customer();
  errMessage: string;

  constructor(
    private registerService: RegisterService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // this.buildRegisterForm();
  }

  // buildRegisterForm(): void {
  //   this.registrationForm = this.fb.group({
  //     name: ['', Validators.required],
  //     email: ['', Validators.required],
  //     dateOfBirth: ['', Validators.required],
  //     contactNumber: ['', Validators.required],
  //     address: ['', Validators.required],
  //     password: ['', Validators.required],
  //     confirmPassword: ['', Validators.required],
  //   });

  onSubmitClick(): void {
    // if (this.registrationForm.valid) {
    //   this.register();
    // } else {
    //   alert('Please enter all the fields');
    // }
  }

  confirmPass: string;
  passErr: string;
  register(form: NgForm) {
    if (form.valid) {
      if (this.customer.password === this.confirmPass) {
        this.errMessage = '';
        this.passErr = '';
        this.registerService.regCustomer(this.customer).subscribe((data) => {
          if (data.status) {
            this.errMessage = '';
            alert(JSON.stringify(data));

            this.router.navigate(['/login']);
          } else {
            this.errMessage = data.statusMessage;
          }
        });
      } else {
        this.passErr = 'Password did not matched';
      }
    } else {
      this.errMessage = 'There are some unresolved errors.';
    }
  }
}
