import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment-successful',
  templateUrl: './payment-successful.component.html',
  styleUrls: ['./payment-successful.component.css']
})
export class PaymentSuccessfulComponent implements OnInit {

  policyNo:number
  constructor(
    private router:Router
  ) { }

  ngOnInit(): void {
    this.policyNo=parseInt(sessionStorage.getItem('policyNo'));
  }

  onHomeClick(){
    this.router.navigate(['/home-page'])
  }
}
