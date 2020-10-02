import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-calculate-premium',
  templateUrl: './calculate-premium.component.html',
  styleUrls: ['./calculate-premium.component.css'],
})
export class CalculatePremiumComponent implements OnInit {
  
  vehiclePrice:number;
  purchaseDate:Date;
  policyAmount:number;
  estimatedValue:number;
  constructor(private router: Router) {}

  ngOnInit(): void {}
  calculatePremium(){
    this.estimatedValue=+this.vehiclePrice+ +this.policyAmount;
  }
}
