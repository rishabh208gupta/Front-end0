import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import{ClaimService}from '../services/claim.service';
import{StatusClaim} from '../models/statusClaim';
@Component({
  selector: 'app-claim',
  templateUrl: './claim.component.html',
  styleUrls: ['./claim.component.css']
})
export class ClaimComponent implements OnInit {
  displayOnEmailSent:any;
  chat:boolean=false;
  err:boolean=false;
  fun:string="error";
  policyNo:number;
  reason:string;
  claimPageDisplay:any;
  toggle:boolean=false;
  customerName:any;
  concerns:string;
  customerId;number;
  constructor(private router:Router,private claimService:ClaimService) { }

  ngOnInit(): void {
    this.customerName=sessionStorage.getItem('customerName');
    this.customerId=sessionStorage.getItem('customerId');
  }

  onClaimClick(){
    this.claimService.onClickingClaim(this.policyNo,this.reason).subscribe(data=>{
      sessionStorage.setItem('claimId',String(data.claimId));
      sessionStorage.setItem('statusMessage',data.statusMessage);
      sessionStorage.setItem('status',String(data.status));
      // console.log(this.statusClaim[0]);
      this.router.navigate(['/claim-successful']);
    })
    
  }


  displayOnClaimPage(){
    this.toggle=true;
    this.claimPageDisplay=JSON.parse(sessionStorage.getItem(this.claimPageDisplay) || '[]');
  }
  
  onChatClick(){
    this.chat=true;
  }
}
