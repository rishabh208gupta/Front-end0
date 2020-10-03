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
  premiumRate:number;
  estimatedValue:number;
  age:number;
  timeDiff:any;
  depreciatonRate:any;
  idv:number;
  planYear:number;
  constructor(private router: Router) {}

  ngOnInit(): void {}
  calculatePremium(){
    this.depreciatonRate=10;
    if(this.purchaseDate){
      const pdate = new Date(this.purchaseDate);
      this.timeDiff = Math.abs(Date.now()-pdate.getTime());
      //Used Math.floor instead of Math.ceil
      //so 26 years and 140 days would be considered as 26, not 27.
      this.age = Math.floor((this.timeDiff / (1000 * 3600 * 24))/365);

    this.idv=+this.vehiclePrice- +(this.vehiclePrice*this.age*this.depreciatonRate)/100;
    this.estimatedValue=+(this.idv*this.premiumRate*this.planYear)/100;
  }
}
}