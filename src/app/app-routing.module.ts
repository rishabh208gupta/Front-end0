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
import { AdminCustomerLoginComponent } from './admin-customer-login/admin-customer-login.component';
import { AdminUserDetailsComponent } from './admin-user-details/admin-user-details.component';
import { AdminVehicleDetailsComponent } from './admin-vehicle-details/admin-vehicle-details.component';
import { ApprovalConfirmationComponent } from './approval-confirmation/approval-confirmation.component';
import { ClaimSuccessfulComponent } from './claim-successful/claim-successful.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FetchVehiclePolicyDetailsComponent } from './fetch-vehicle-policy-details/fetch-vehicle-policy-details.component';
import { PaymentSuccessfulComponent } from './payment-successful/payment-successful.component';
import { PaymentComponent } from './payment/payment.component';
import { RenewPaymentSuccessComponent } from './renew-payment-success/renew-payment-success.component';
import { RenewPaymentComponent } from './renew-payment/renew-payment.component';

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
  { path:'make-payment',component:PaymentComponent},
  { path: 'payment-successful',component:PaymentSuccessfulComponent},
  {path: 'renew-payment',component:RenewPaymentComponent},
  { path: 'dashboard', component:DashboardComponent},
  {path:'admin-user-details',component:AdminUserDetailsComponent},
  {path:'approval-confirmation',component:ApprovalConfirmationComponent},
  {path: 'admin-customer-login',component:AdminCustomerLoginComponent},
  {path:'admin-vehicle-details',component:AdminVehicleDetailsComponent},
  {path:'renew-payment-success',component:RenewPaymentSuccessComponent},
  {path:'fetch-vehicle-policy-details',component:FetchVehiclePolicyDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
