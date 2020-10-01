import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Customer } from '../models/Customer';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  customers: any;
  registrationForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService
  ) // private router: Router
  {}

  customer: Customer = new Customer();

  ngOnInit(): void {
    this.buildRegisterForm();
  }

  buildRegisterForm(): void {
    this.registrationForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      dateOfBirth: ['', Validators.required],
      contactNumber: ['', Validators.required],
      address: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
    });
  }

  onSubmitClick(): void {
    if (this.registrationForm.valid) {
      this.register();
    } else {
      alert('Please enter all the fields');
    }
  }

  register() {
    this.authService.regCustomer(this.customer).subscribe((response) => {
      this.customers = response;
    });
  }
}
