import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-calculate-premium',
  templateUrl: './calculate-premium.component.html',
  styleUrls: ['./calculate-premium.component.css'],
})
export class CalculatePremiumComponent implements OnInit {
  price: number;
  age:number;
  depreciationRate:5;
  estimatedValue:number;

  constructor(private router: Router) {}

  ngOnInit(): void {}
  calculatePremium(){
    this.estimatedValue==this.price-(this.price*this.depreciationRate)/100; 
  }
}
