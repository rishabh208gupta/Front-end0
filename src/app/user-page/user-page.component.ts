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
  claimPageDisplay:any;
  data:any;
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
      //for(let i:0;i<data.size;i++)
      sessionStorage.setItem(this.claimPageDisplay, JSON.stringify(data));
      //alert(JSON.stringify(data[1].model));
     // alert(JSON.stringify(this.claimPageDisplay.status));
     //console.log(this.claimPageDisplay);
     //console.log(JSON.parse(sessionStorage.getItem(this.claimPageDisplay) || '[]'));
     
    })
      this.router.navigate(['/claim']);
  }
}
