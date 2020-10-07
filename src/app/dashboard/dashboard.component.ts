import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Admin } from '../admin-page/admin-page.component';
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
  claim:number;
  status:string;
  amount:number;
  claimId2:number;
  adminApproval:AdminApproval=new AdminApproval();
  user:boolean=false;
 
  username:string
  constructor(private adminservice: AdminService, private router: Router) { }

  ngOnInit(): void {
    this.username=sessionStorage.getItem('username');
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
  fetchClaims(){
    this.user=true;
  }

  getVehicle(){
    this.adminservice.fetchVehicle(this.claimId2).subscribe((data)=>{
     // alert(JSON.stringify(data));
      sessionStorage.setItem('chasisNo',data.chasisNo);
      //sessionStorage.setItem('customerId',String(data.customer.customerId));
      sessionStorage.setItem('dlNo',String(data.dlNo));
      sessionStorage.setItem("engineNo",String(data.engineNo));
      sessionStorage.setItem('manufacturer',data.manufacturer);
      sessionStorage.setItem('model',data.model);
      sessionStorage.setItem('purchaseDate',String(data.purchaseDate));
      sessionStorage.setItem('registrationNo',String(data.registrationNo));
      sessionStorage.setItem('vehicleId',String(data.vehicleId));
      sessionStorage.setItem('vehicleType',data.vehicleType);
    })
    this.router.navigate(['/admin-vehicle-details']);
  }
  
}
