
import { IfStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-policy-details',
  templateUrl: './new-policy-details.component.html',
  styleUrls: ['./new-policy-details.component.css']
})
export class NewPolicyDetailsComponent implements OnInit {
  newPolicyForm:FormGroup;
  constructor(private fb:FormBuilder,private route:Router) { }

  ngOnInit(): void {
    this.buildNewPolicyForm();
  }
  buildNewPolicyForm():void{
    this.newPolicyForm=this.fb.group({
      party:['',Validators.required],
      duration:['',Validators.required]


    })
   
  }
  onClickNewPolicy():void{
      if(this.newPolicyForm.valid){
        alert("proceed to payment");
      }
      else{
        alert("enter all the fields");
      }
  }

}
