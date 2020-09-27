import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators  } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registrationForm: FormGroup;

  constructor(
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.buildRegisterForm();
  }

  buildRegisterForm(): void {
    this.registrationForm = this.fb.group({
      name:['',Validators.required],
      email:['',Validators.required],
      dateOfBirth:['',Validators.required],
      contactNumber:['',Validators.required],
      address:['',Validators.required],
      password:['',Validators.required],
      confirmPassword:['',Validators.required]

    })
  }

  onSubmitClick(): void {
    if (this.registrationForm.valid) {
      this.register();
      alert('Registered successfully')
    } 
    else {
      alert('Please enter all the fields')
    }
  }

  register() {
  }

}
