import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CalculatePremiumService } from '../services/calculate-premium.service'
@Component({
  selector: 'app-calculate-premium',
  templateUrl: './calculate-premium.component.html',
  styleUrls: ['./calculate-premium.component.css'],
})
export class CalculatePremiumComponent implements OnInit {

  premiumDetails :PremiumDetails= new PremiumDetails() ;
  premiumAnswer : PremiumAnswer=new PremiumAnswer();
  constructor(private router: Router,private calculatePremiumService:CalculatePremiumService) {}

  ngOnInit(): void {}
  calculatePremium(){
    this.calculatePremiumService.calculatePremium(this.premiumDetails).subscribe((data)=>{
      console.log(data);
      sessionStorage.setItem('idv',String(data.idv));
      sessionStorage.setItem('estimatedValue',String(data.estimatedValue));
      
    });
  }
}

export class PremiumDetails{
  vehiclePrice:number;
  purchaseDate:Date;
  premiumRate:number;
  planYear:number;
}
export class PremiumAnswer{
  idv:number;
  estimatedValue:number;
}