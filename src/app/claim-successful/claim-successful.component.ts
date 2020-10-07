import { Component, OnInit } from '@angular/core';
import{StatusClaim} from '../models/statusClaim';
@Component({
  selector: 'app-claim-successful',
  templateUrl: './claim-successful.component.html',
  styleUrls: ['./claim-successful.component.css']
})
export class ClaimSuccessfulComponent implements OnInit {
  claimId:any;
  statusMessage:any;
  status:boolean;
  claimPageDisplay:any;
  name:any;
  constructor() { }

  ngOnInit(): void {
    this.claimId= sessionStorage.getItem('claimId');
    this.statusMessage=sessionStorage.getItem('statusMessage');
    this.status=JSON.parse(sessionStorage.getItem('status'));
    this.name=sessionStorage.getItem('customerName');
    this.claimPageDisplay=JSON.parse(sessionStorage.getItem(this.claimPageDisplay) || '[]');

  }

}
