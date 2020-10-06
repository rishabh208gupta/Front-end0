import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; //Needed for reactive form validation

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { RegisterComponent } from './register/register.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { CalculatePremiumComponent } from './calculate-premium/calculate-premium.component';
import { RenewPolicyComponent } from './renew-policy/renew-policy.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginComponent } from './login/login.component';
import { VehicleDetailsComponent } from './vehicle-details/vehicle-details.component';
import { NewPolicyDetailsComponent } from './new-policy-details/new-policy-details.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ClaimComponent } from './claim/claim.component';
import { UserPageComponent } from './user-page/user-page.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PaymentComponent } from './payment/payment.component';
import { NavComponent } from './nav/nav.component';
import { HttpClientModule } from '@angular/common/http';
import { ClaimSuccessfulComponent } from './claim-successful/claim-successful.component';
import { PaymentSuccessfulComponent } from './payment-successful/payment-successful.component';
import { RenewPaymentComponent } from './renew-payment/renew-payment.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { AdminUserDetailsComponent } from './admin-user-details/admin-user-details.component';
import { ApprovalConfirmationComponent } from './approval-confirmation/approval-confirmation.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminPageComponent,
    RegisterComponent,
    ResetPasswordComponent,
    CalculatePremiumComponent,
    RenewPolicyComponent,
    HomePageComponent,
    LoginComponent,
    VehicleDetailsComponent,
    NewPolicyDetailsComponent,
    ForgotPasswordComponent,
    ClaimComponent,
    UserPageComponent,
    NavbarComponent,
    PaymentComponent,
    NavComponent,
    ClaimSuccessfulComponent,
    PaymentSuccessfulComponent,
    RenewPaymentComponent,
    DashboardComponent,
    AboutUsComponent,
    AdminUserDetailsComponent,
    ApprovalConfirmationComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
