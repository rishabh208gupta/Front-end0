import { Component, OnInit } from '@angular/core';
import{RenewPolicy}from '../models/renewPolicy';
import { Router } from '@angular/router';
import{RenewPolicyService} from '../services/renew-policy.service';
import { BuyPolicyService } from '../services/buy-policy.service';
import { Bill } from '../models/bill-details';

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
  constructor( private route: Router,private renewPolicyService:RenewPolicyService,private buyPolicyService:BuyPolicyService) {}

  ngOnInit(): void {
  //this.onClickRenewPolicy();
  }

  onClickRenewPolicy(): void {
    sessionStorage.setItem('policyDuration',String(this.policyDuration));
    this.renewPolicyService.renewPolicy(this.policyNo,this.policyDuration).subscribe(data=>{
      sessionStorage.setItem('policyNo',String(data.policyNo));
     this.status=data.status;
     this.statusMessage=data.statusMessage;
     if(data.status==true){
       this.buyPolicyService.getBillDetails(this.policyNo).subscribe(response=>{
        this.bill=response;
        sessionStorage.setItem('billing', JSON.stringify(this.bill));
       })
      this.route.navigate(['/renew-payment']);
     }

    })
   
  }
  
 
}
