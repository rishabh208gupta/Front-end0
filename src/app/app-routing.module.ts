import { NgModule, Renderer2 } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminPageComponent } from '../app/admin-page/admin-page.component';
import { CalculatePremiumComponent } from '../app/calculate-premium/calculate-premium.component';
import { ClaimComponent } from '../app/claim/claim.component';
import { ForgotPasswordComponent } from '../app/forgot-password/forgot-password.component';
import { HomePageComponent } from '../app/home-page/home-page.component';
import { LoginComponent } from '../app/login/login.component';
import { NewPolicyDetailsComponent } from '../app/new-policy-details/new-policy-details.component';
import { RegisterComponent } from '../app/register/register.component';
import { RenewPolicyComponent } from '../app/renew-policy/renew-policy.component';
import { ResetPasswordComponent } from '../app/reset-password/reset-password.component';
import { UserPageComponent } from '../app/user-page/user-page.component';
import { VehicleDetailsComponent } from '../app/vehicle-details/vehicle-details.component';
import { ClaimSuccessfulComponent } from './claim-successful/claim-successful.component';
import { PaymentComponent } from './payment/payment.component';

const routes: Routes = [
  { path: '', redirectTo: 'home-page', pathMatch: 'full' },
  { path: 'home-page', component: HomePageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'admin-page', component: AdminPageComponent },
  { path: 'user-page', component: UserPageComponent },
  { path: 'calculate-premium', component: CalculatePremiumComponent },
  { path: 'claim', component: ClaimComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'new-policy', component: NewPolicyDetailsComponent },
  { path: 'renew-policy', component: RenewPolicyComponent },
  { path: 'reset-password', component: ResetPasswordComponent },
  { path: 'vehicle-details', component: VehicleDetailsComponent },
  { path:'claim-successful',component:ClaimSuccessfulComponent},
  { path:'make-payment',component:PaymentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
