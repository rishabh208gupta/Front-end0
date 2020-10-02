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

  err:boolean=false;
  fun:string="error";
  policyNo:number;
  reason:string;
  claimPageDisplay:any;
  toggle:boolean=false;
  constructor(private router:Router,private claimService:ClaimService) { }

  ngOnInit(): void {
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
}
