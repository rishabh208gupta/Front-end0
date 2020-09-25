import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-claim',
  templateUrl: './claim.component.html',
  styleUrls: ['./claim.component.css']
})
export class ClaimComponent implements OnInit {

  err:boolean=false;
  fun:string="error";
  claimForm:FormGroup;
  constructor(
    private router:Router,
    private fb:FormBuilder
  ) { }

  ngOnInit(): void {
    this.buildClaimForm();
  }

  onClaimClick(){
    if(this.claimForm.valid){
      this.router.navigate(['/user-page']);
    }
    else{
      this.err=true;
    }
    
  }

  buildClaimForm(){
    this.claimForm=this.fb.group({
      policyNo:['',Validators.required]
    })
  }
}
