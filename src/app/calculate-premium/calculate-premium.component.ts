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
  age:number;
  timeDiff:any;
  constructor(private router: Router) {}

  ngOnInit(): void {}
  calculatePremium(){
    if(this.purchaseDate){
      const pdate = new Date(this.purchaseDate);
      this.timeDiff = Math.abs(Date.now()-pdate.getTime());
      //Used Math.floor instead of Math.ceil
      //so 26 years and 140 days would be considered as 26, not 27.
      this.age = Math.floor((this.timeDiff / (1000 * 3600 * 24))/365);
    this.estimatedValue=+this.vehiclePrice+ +this.policyAmount+ +this.age;
  }
}
}