import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-approval-confirmation',
  templateUrl: './approval-confirmation.component.html',
  styleUrls: ['./approval-confirmation.component.css']
})
export class ApprovalConfirmationComponent implements OnInit {
  statusMessage:any;
  constructor() { }

  ngOnInit(): void {
    this.statusMessage=sessionStorage.getItem("statusMessage");
  }

}
