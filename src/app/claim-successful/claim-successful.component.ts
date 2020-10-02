import { Component, OnInit } from '@angular/core';
import{StatusClaim} from '../models/statusClaim';
@Component({
  selector: 'app-claim-successful',
  templateUrl: './claim-successful.component.html',
  styleUrls: ['./claim-successful.component.css']
})
export class ClaimSuccessfulComponent implements OnInit {
  statusClaim:any;
  constructor() { }

  ngOnInit(): void {
    this.statusClaim=sessionStorage.getItem('statusClaim');
    console.log(this.statusClaim);
  }

}
