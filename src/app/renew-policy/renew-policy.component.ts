import { Component, OnInit } from '@angular/core';
import{RenewPolicy}from '../models/renewPolicy';
import { Router } from '@angular/router';

@Component({
  selector: 'app-renew-policy',
  templateUrl: './renew-policy.component.html',
  styleUrls: ['./renew-policy.component.css'],
})
export class RenewPolicyComponent implements OnInit {
  //renewPolicy:RenewPolicy=new RenewPolicy();
  policyNo:any;
  policyDuration:any;
  constructor( private route: Router) {}

  ngOnInit(): void {
  this.onClickRenewPolicy();
  }

  onClickRenewPolicy(): void {
    sessionStorage.setItem('policyNo',this.policyNo);
    sessionStorage.setItem('policyDuration',this.policyDuration);
    this.route.navigate(['/user-page']);
  }
  
 
}
