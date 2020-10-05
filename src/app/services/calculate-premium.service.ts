import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculatePremiumService {
 
 
  age:number;
  timeDiff:any;
  depreciatonRate:any;
  depreciatedValue:any;
  idv:number;
  estimatedValue:number;
 
  constructor(
    private http:HttpClient
  ) { }
  
  
  calculatePremium( vehiclePrice:number,purchaseDate:Date,premiumRate:number,planYear:number){
    this.depreciatonRate=11;
    this.depreciatedValue=(vehiclePrice*this.age*this.depreciatonRate)/100;
    if(purchaseDate){
      const pdate = new Date(purchaseDate);
      this.timeDiff = Math.abs(Date.now()-pdate.getTime());
      //Used Math.floor instead of Math.ceil
      //so 26 years and 140 days would be considered as 26, not 27.
      this.age = Math.floor((this.timeDiff / (1000 * 3600 * 24))/365);
    if(vehiclePrice==50000 && (this.age>8 || this.depreciatedValue>vehiclePrice)){
      this.idv=10000;
      if(planYear==1)
        this.estimatedValue=400;
      else if(planYear==2)
        this.estimatedValue=800;
      else if(planYear==3)
        this.estimatedValue=1200;
    }
    else if(vehiclePrice==400000 && (this.age>8 || this.depreciatedValue>vehiclePrice)){
      this.idv=25000;
    if(planYear==1)
      this.estimatedValue=2500;
    else if(planYear==2)
      this.estimatedValue=5000;
    else if(planYear==3)
      this.estimatedValue=7500;
    }
    else{
      this.idv=+vehiclePrice- +this.depreciatedValue;
      this.estimatedValue=+(this.idv*premiumRate*planYear)/100;
    }
    return [this.idv,this.estimatedValue];
    
  }
}
}
