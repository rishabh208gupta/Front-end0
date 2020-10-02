import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ClaimPageDisplay} from '../models/claimPageDisplay';
import{ClaimService} from '../services/claim.service';
@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {
  claimPageDisplay:ClaimPageDisplay;
  customerId:any;
  constructor(
    private router:Router, private claimService:ClaimService
  ) { }

  ngOnInit(): void {
  }

  onBuyPolicyClick(){
    this.router.navigate(['/vehicle-details']);
  }

  onRenewPolicyClick(){
    this.router.navigate(['/renew-policy']);
  }

  onClaimClick(){
    this.customerId=sessionStorage.getItem('customerId');
    this.claimService.displayOnClaimPage(this.customerId).subscribe(data=>{
      //this.claimPageDisplay=data;
      alert(JSON.stringify(data));
    })
   // this.router.navigate(['/claim']);
  }
}
