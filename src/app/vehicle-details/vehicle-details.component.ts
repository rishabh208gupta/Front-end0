import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vehicle-details',
  templateUrl: './vehicle-details.component.html',
  styleUrls: ['./vehicle-details.component.css']
})
export class VehicleDetailsComponent implements OnInit {
  insuranceForm:FormGroup;
  constructor(private fb:FormBuilder,private router:Router) { }

 

  ngOnInit(): void {
    this.buildBuyInsurance();
  }
  buildBuyInsurance():void{
    this.insuranceForm=this.fb.group({
      wheeler:['',Validators.required],
      manufacturer:['',Validators.required],
      model:['',Validators.required],
      drivingLicence:['',Validators.required],
      purchaseDate:['',Validators.required],
      registrationNumber:['',Validators.required],
      engineNumber:['',Validators.required],
      chassisNumber:['',Validators.required]
    })
  }
  onBuyInsuranceClick():void{
       if(this.insuranceForm.valid){
         
          this.router.navigate(['/new-policy'])
       }
       else
       {
         alert('please enter all fields');
       }

  }

}


