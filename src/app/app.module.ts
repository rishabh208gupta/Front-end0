import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
import { ReactiveFormsModule } from '@angular/forms';

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
    UserPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
