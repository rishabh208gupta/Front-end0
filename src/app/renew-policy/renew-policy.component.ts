import { Component, OnInit } from '@angular/core';
import{RenewPolicy}from '../models/renewPolicy';
import { Router } from '@angular/router';
import{RenewPolicyService} from '../services/renew-policy.service';

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
  constructor( private route: Router,private renewPolicyService:RenewPolicyService) {}

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
      this.route.navigate(['/renew-payment']);
     }

    })
   
  }
  
 
}
