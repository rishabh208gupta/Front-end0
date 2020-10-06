import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Admin } from '../admin-page/admin-page.component';
import { NewPolicy } from '../models/new-policy';
import { Vehicle } from '../models/Vehicle';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  admin: Admin=new Admin();
  vehicle:Vehicle = new Vehicle();
  claims: Claim[]=[];
 
  constructor(private adminservice: AdminService, private router: Router) { }

  ngOnInit(): void {
    this.adminservice.fetchAllClaims(this.admin).subscribe((data)=>{
      console.log(data);
    })
  }

  
}
export class Claim{
  claimId: number;
  status: string;
  reason: string; 
  dateApplied: Date;
  adminAmount: number;
  newPolicy: NewPolicy;
}