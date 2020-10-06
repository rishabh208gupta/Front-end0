import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PremiumAnswer, PremiumDetails } from '../calculate-premium/calculate-premium.component';

@Injectable({
  providedIn: 'root'
})
export class CalculatePremiumService {
 

  constructor(
    private http:HttpClient
  ) { }
  
  calculatePremium(premiumDetails:PremiumDetails):Observable<PremiumAnswer>{
   let url="http://localhost:9090/premium";
   return this.http.post<PremiumAnswer>(url,premiumDetails);
  }
}















/*this.depreciatonRate=11;
    if(purchaseDate){
      const pdate = new Date(purchaseDate);
      this.timeDiff = Math.abs(Date.now()-pdate.getTime());
      //Used Math.floor instead of Math.ceil
      //so 26 years and 140 days would be considered as 26, not 27.
      this.age = Math.floor((this.timeDiff / (1000 * 3600 * 24))/365);
      if(this.age>8 && vehiclePrice==50000){
        this.idv=10000;
        this.estimatedValue=400;
      }
      else if(this.age>8 && vehiclePrice==400000){
        this.idv=25000;
        this.estimatedValue=2000;
      }
      else{
        this.idv=+vehiclePrice- +(vehiclePrice*this.age*this.depreciatonRate)/100;
        this.estimatedValue=+(this.idv*premiumRate*planYear)/100;

      }
    return [this.idv,this.estimatedValue];  
    }*/