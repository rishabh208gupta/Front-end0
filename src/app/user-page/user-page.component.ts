import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {

  constructor(
    private router:Router
  ) { }

  ngOnInit(): void {
  }

  onBuyPolicyClick(){
    this.router.navigate(['/new-policy']);
  }

  onRenewPolicyClick(){
    this.router.navigate(['/renew-policy']);
  }

  onClaimClick(){

    this.router.navigate(['/claim']);
  }
}
