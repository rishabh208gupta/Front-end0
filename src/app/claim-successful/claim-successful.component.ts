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
  status:any;

  name:any;
  constructor() { }

  ngOnInit(): void {
    this.claimId= sessionStorage.getItem('claimId');
    this.statusMessage=sessionStorage.getItem('statusMessage');
    this.status=sessionStorage.getItem('status');

    

  }

}
