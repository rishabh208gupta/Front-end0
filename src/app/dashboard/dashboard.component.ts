import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Admin } from '../admin-page/admin-page.component';
import { Customer } from '../models/Customer';
import { NewPolicy } from '../models/new-policy';
import { Vehicle } from '../models/Vehicle';
import { AdminService } from '../services/admin.service';
import {AdminApproval} from '../models/AdminApproval';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  admin: Admin=new Admin();
  vehicle:Vehicle = new Vehicle();
  claims: any;
  claimId1:number;
  customer:Customer;
  claim:number;
  status:string;
  amount:number;
  adminApproval:AdminApproval=new AdminApproval();
 
  constructor(private adminservice: AdminService, private router: Router) { }

  ngOnInit(): void {
    this.adminservice.fetchAllClaims().subscribe((data)=>{
      //console.log(data);
     this.claims= JSON.parse(JSON.stringify(data)||'[]');
    // alert(JSON.stringify(data));

    })
  }
  approval(){
    this.adminservice.claimApproval(this.adminApproval).subscribe((response)=>{
      sessionStorage.setItem("statusMessage",response.statusMessage)
      this.router.navigate(['/claim-successful']);
    })
  }

  getUser(){
    this.adminservice.fetchUserInfo(this.claimId1).subscribe((data)=>{
      //alert(JSON.stringify(data));
      sessionStorage.setItem("customerId",data.customerId);
      sessionStorage.setItem('customerName',data.name);
      sessionStorage.setItem('customerPhone',data.phoneNo);
      sessionStorage.setItem('email',data.email);
      sessionStorage.setItem('dateOfBirth',data.dateOfBirth);
      sessionStorage.setItem('address',data.address);
      this.router.navigate(['/admin-user-details']);
    })
  }
  
}
