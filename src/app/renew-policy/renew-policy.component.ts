import { Component, OnInit } from '@angular/core';
import{RenewPolicy}from '../models/renewPolicy';
import { Router } from '@angular/router';
import{RenewPolicyService} from '../services/renew-policy.service';
import { BuyPolicyService } from '../services/buy-policy.service';
import { Bill } from '../models/bill-details';
import { ClaimService } from '../services/claim.service';

@Component({
  selector: 'app-renew-policy',
  templateUrl: './renew-policy.component.html',
  styleUrls: ['./renew-policy.component.css'],
})
export class RenewPolicyComponent implements OnInit {
  renewPolicy:RenewPolicy=new RenewPolicy();
  policyNo:number;
  policyDuration:number;
  status:boolean;
  statusMessage:string;
  bill:Bill;
  customerId:any;
  claimPageDisplay:any;
  toggle:boolean=false;
  constructor( private route: Router,private renewPolicyService:RenewPolicyService
    ,private buyPolicyService:BuyPolicyService,private claimService:ClaimService) {}

  ngOnInit(): void {
    this.customerId=sessionStorage.getItem('customerId');
  }
  clickPolicyDetails(){
    this.toggle=true;
    this.claimService.displayOnClaimPage(this.customerId).subscribe(data=>{
      this.claimPageDisplay=JSON.parse(JSON.stringify(data)||'[]');
    })
    }


  onClickRenewPolicy(): void {
    sessionStorage.setItem('polDuration',String(this.policyDuration));
    this.renewPolicyService.renewPolicy(this.policyNo,this.policyDuration).subscribe(data=>{
      sessionStorage.setItem('policyNo',String(data.policyNo));
      sessionStorage.setItem('renewAmount',String(data.amount));
     this.status=data.status;
     this.statusMessage=data.statusMessage;
     if(data.status==true){
      this.route.navigate(['/renew-payment']);
     }
    })
   
  }
  
 
}
