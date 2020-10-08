import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CheckClaim } from '../models/check-policy-claim';
import {ClaimPageDisplay} from '../models/claimPageDisplay';
import{ClaimService} from '../services/claim.service';
import{ UserPageService } from '../services/user-page.service';
import{ UserVehicle } from '../models/Vehicle';
import { NewPolicy, UserPolicy } from '../models/new-policy';
import { UserClaim } from '../models/statusClaim';
import { CheckPayment, UserPayment } from '../models/payment';
import { UserDetails } from '../models/user-details';
import { CalculatePremiumService } from '../services/calculate-premium.service';
import { PremiumDetails } from '../calculate-premium/calculate-premium.component';


@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {
  claimPageDisplay:any;
  data:any;
  customerId:any;
  userVehicle:UserVehicle[]=[];
  userPolicy:UserPolicy[]=[];
  userClaim:UserClaim[]=[];
  userPayment:UserPayment[]=[];
  // userPayVehicle:UserVehicle[]=[];
  // userPayPolicy:UserPolicy[]=[];

  hasPolicy:boolean[]=[];
  hasClaim:boolean[]=[];
  hasPayment:boolean[]=[];

  noPolicyUserDetails:UserDetails[]=[];
  noPaymentUserDetails:UserDetails[]=[];
  noClaimUserDetails:UserDetails[]=[];
  ClaimUserDetails:UserDetails[]=[];

  premiumDetails :PremiumDetails= new PremiumDetails() ;
  idv:number;
  estimatedValue:number;

  customerName:string=sessionStorage.getItem('customerName');

  checkClaim:CheckClaim[]=[];
  checkPayment:CheckPayment[]=[];

  toggle:boolean=false;
  once:boolean=true;

  constructor(
    private router:Router, private claimService:ClaimService,private userPageService:UserPageService, private calulatePremiumService:CalculatePremiumService
  ) { }

  ngOnInit(): void {
    this.customerName=sessionStorage.getItem('customerName');
    this.userPageService.fetchClaimForPolicy(parseInt(sessionStorage.getItem('customerId'))).subscribe(data=>{
      this.checkClaim=data;
      
      this.getUserClaimDetails();
     //alert(JSON.stringify(this.checkClaim));
    })

    this.userPageService.fetchPaymentForPolicy(parseInt(sessionStorage.getItem('customerId'))).subscribe(payData=>{
      this.checkPayment=payData;
      this.getUserPaymentDetails();
     // alert(JSON.stringify(this.checkPayment));
      
    })
    //alert('welcome'+sessionStorage.getItem('customerName'));
  }

  onBuyPolicyClick(){
    this.router.navigate(['/vehicle-details']);
  }

  onRenewPolicyClick(){
    this.router.navigate(['/renew-policy']);
  }

  onClaimClick(){
    this.customerId=sessionStorage.getItem('customerId');
    this.claimService.displayOnClaimPage(this.customerId).subscribe(data=>{
      sessionStorage.setItem(this.claimPageDisplay, JSON.stringify(data));
    })
      this.router.navigate(['/claim']);
  }

  getUserClaimDetails(){
    for(let i=0;i<this.checkClaim.length;i++){

      if(this.checkClaim[i][0]!=null){
        this.userPageService.fetchUserVehicleDetails(parseInt(this.checkClaim[i][0])).subscribe(vehicleData=>{
          // let uv = new UserVehicle();
          // uv=vehicleData;
          //alert(JSON.stringify(vehicleData));
         // this.userVehicle.push({'vehicleId':vehicleData.vehicleId,'vehicleType':vehicleData.vehicleType,'chasisNo':vehicleData.chasisNo});
         this.userVehicle[i]=vehicleData;
        // alert(JSON.stringify(this.userVehicle));
        })
      }
      if(this.checkClaim[i][1]!=null){
        this.userPageService.fetchUserPolicyDetails(parseInt(this.checkClaim[i][1])).subscribe(policyData=>{
          this.userPolicy[i]=policyData;
        // alert(JSON.stringify(this.userPolicy));
        })
      }
      else if(this.checkClaim[i][1]==null){
        this.userPolicy[i]=null;
       // alert(JSON.stringify(this.userPolicy));
      }
      if(this.checkClaim[i][2]!=null){
        this.userPageService.fetchUserClaimDetails(parseInt(this.checkClaim[i][2])).subscribe(claimData=>{
          this.userClaim[i]=claimData;
        //  alert(JSON.stringify(this.userClaim));
        })
      }
      else if(this.checkClaim[i][2]==null){
        this.userClaim[i]=null;
      }
     
    }
    //alert(JSON.stringify(this.userPolicy));
    // alert(JSON.stringify(this.userVehicle));
    //alert(JSON.stringify(this.userPolicy));
  }


  getUserPaymentDetails(){
    for(let i=0;i<this.checkPayment.length;i++){

      // if(this.checkPayment[i][0]!=null){
      //   this.userPageService.fetchUserVehicleDetails(parseInt(this.checkPayment[i][0])).subscribe(vehiclePayData=>{
      //     this.userPayVehicle.push(vehiclePayData);
      //   })
      // }
      // if(this.checkPayment[i][1]!=null){
      //   this.userPageService.fetchUserPolicyDetails(parseInt(this.checkPayment[i][1])).subscribe(policyPayData=>{
      //     this.userPayPolicy.push(policyPayData);
      //   })
      // }
      if(this.checkPayment[i][2]!=null){
        this.userPageService.fetchUserPaymentDetails(parseInt(this.checkPayment[i][2])).subscribe(payData=>{
          this.userPayment[i]=payData;
        // alert(JSON.stringify(this.userPayment));
        })
      }
      else if(this.checkPayment[i][2]==null){
        this.userPayment[i]=null;
      }
     
    }
   // alert(JSON.stringify(this.userPayment));
  }

  

  fillBool(){
    
    for(let i=0;i<this.userVehicle.length;i++){
      if(this.userPolicy[i]!=null){
        this.hasPolicy.push(true);
      }
      else{
        this.hasPolicy.push(false);
      }

      if(this.userClaim[i]!=null){
        this.hasClaim.push(true);
      }
      else{
        this.hasClaim.push(false);
      }

      if(this.userPayment[i]!=null){
        this.hasPayment.push(true);
      }
      else{
        this.hasPayment.push(false);
      }
    }

    //   alert(JSON.stringify(this.hasPolicy));
    //   alert(JSON.stringify(this.hasPayment));
    //  alert(JSON.stringify(this.hasClaim));
  }

  fillView(){
    for(let i=0;i<this.userVehicle.length;i++){
      if(this.hasPolicy[i]==false){
       let userDetails= new UserDetails();
       userDetails.vehicleType=this.userVehicle[i].vehicleType;
       userDetails.chasisNo=this.userVehicle[i].chasisNo;
       userDetails.vehicleId=this.userVehicle[i].vehicleId;
       userDetails.manufacturer=this.userVehicle[i].manufacturer;
       userDetails.purchaseDate=this.userVehicle[i].purchaseDate;
       userDetails.registrationNo=this.userVehicle[i].registrationNo;
      // alert(JSON.stringify(userDetails));
       this.noPolicyUserDetails.push(userDetails);
      }
      else{
        if(this.hasPayment[i]==false){
          let userDetails= new UserDetails();
          userDetails.vehicleType=this.userVehicle[i].vehicleType;
          userDetails.chasisNo=this.userVehicle[i].chasisNo;
          userDetails.policyType=this.userPolicy[i].policyType;
          userDetails.policyDuration=this.userPolicy[i].policyDuration;
          userDetails.policyNo=this.userPolicy[i].policyNo;
          this.premiumDetails.planYear=this.userPolicy[i].policyDuration;
          this.premiumDetails.purchaseDate=this.userVehicle[i].purchaseDate;
          if(this.userVehicle[i].vehicleType=='2-wheeler'){
            this.premiumDetails.vehiclePrice=50000;
          }
          else if(this.userVehicle[i].vehicleType=='4-wheeler'){
            this.premiumDetails.vehiclePrice=400000;
          }

          if(this.userPolicy[i].policyType=='comprehensive'){
            this.premiumDetails.premiumRate=7;
          }
          else if(this.userPolicy[i].policyType=='third party liability'){
            this.premiumDetails.premiumRate=6.5;
          }
          this.calulatePremiumService.calculatePremium(this.premiumDetails).subscribe(data=>{
            //alert(JSON.stringify(data));
            this.idv=data.idv;
            this.estimatedValue=data.estimatedValue;
           // alert(this.estimatedValue);
            userDetails.premiumAmount=this.estimatedValue;
          })
          
          
          //alert(JSON.stringify(userDetails));
          this.noPaymentUserDetails.push(userDetails);
        }
        else{
          if(this.hasClaim[i]==false){
            let userDetails= new UserDetails();
            userDetails.vehicleType=this.userVehicle[i].vehicleType;
            userDetails.chasisNo=this.userVehicle[i].chasisNo;
            userDetails.policyType=this.userPolicy[i].policyType;
            userDetails.policyDuration=this.userPolicy[i].policyDuration;
            userDetails.policyNo=this.userPolicy[i].policyNo;
            userDetails.age=this.userPayment[i].age;
          //  alert(JSON.stringify(userDetails));
            this.noClaimUserDetails.push(userDetails);

          }
          else{
            let userDetails= new UserDetails();
            userDetails.vehicleType=this.userVehicle[i].vehicleType;
            userDetails.chasisNo=this.userVehicle[i].chasisNo;
            userDetails.policyType=this.userPolicy[i].policyType;
            userDetails.policyDuration=this.userPolicy[i].policyDuration;
            userDetails.age=this.userPayment[i].age;
            userDetails.claimed=this.userClaim[i].claimed;
            userDetails.claimAmount=this.userClaim[i].claimAmount;
         //  alert(JSON.stringify(userDetails));
            this.ClaimUserDetails.push(userDetails);
          }
        }
      }
    }
  }

  onButtonClick(){
   this.toggle=!this.toggle;
   if(this.once==true){
    this.fillBool();
    this.fillView();
    this.once=false;
   }
   
  }

  onSelectPolicyClick(vehicleId:any,vehicleType:any, manufacturer:any,purchaseDate:any,registrationNo:any,chasisNo:any){
   sessionStorage.setItem('vehicleId',vehicleId);
   sessionStorage.setItem('vehicleType',vehicleType);
   sessionStorage.setItem('manufacturer',manufacturer);
   sessionStorage.setItem('purchaseDate',purchaseDate);
   sessionStorage.setItem('registrationNo',registrationNo);
   sessionStorage.setItem('chasisNo',chasisNo);
   this.router.navigate(['/new-policy']); 
  }

  onMakePaymentClick(val:any,amount:any){
    sessionStorage.setItem('policyNo',val);
    sessionStorage.setItem('premiumAmount',amount);
    this.router.navigate(['/make-payment']);
  }

  onClaimNowClick(val:any){
    sessionStorage.setItem('userPolicyNo',val);
    this.router.navigate(['/fetch-vehicle-policy-details']);
  }
}
