import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CalculatePremiumService } from '../services/calculate-premium.service'
@Component({
  selector: 'app-calculate-premium',
  templateUrl: './calculate-premium.component.html',
  styleUrls: ['./calculate-premium.component.css'],
})
export class CalculatePremiumComponent implements OnInit {
  vehiclePrice:number;
  purchaseDate:Date;
  premiumRate:number;
  planYear:number;
  idv:number;
  estimatedValue:number;
  
  constructor(private router: Router,private calculatePremiumService:CalculatePremiumService) {}

  ngOnInit(): void {}
  calculatePremium(){
    [this.idv,this.estimatedValue]=this.calculatePremiumService.calculatePremium(this.vehiclePrice,this.purchaseDate,this.premiumRate,this.planYear);
  }
}
