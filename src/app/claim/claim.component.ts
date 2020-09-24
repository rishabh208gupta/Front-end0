import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-claim',
  templateUrl: './claim.component.html',
  styleUrls: ['./claim.component.css']
})
export class ClaimComponent implements OnInit {

  claimForm:FormGroup;
  constructor(
    private router:Router
  ) { }

  ngOnInit(): void {
  }

  onClaimClick(){

    this.router.navigate(['/user-page']);
  }
}
