import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardUserComponent } from './board-customer/board-user.component';
import { CartComponent } from './cart/cart.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { MoneyTransferComponent } from './money-transfer/money-transfer.component';
import { ExchangeRateComponent } from './exchange-rate/exchange-rate.component';
import { ConverterComponent } from './converter/converter.component';
import { AddexchangeComponent } from './addexchange/addexchange.component';



const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'home/user', component: BoardUserComponent},
  { path: 'login', component: LoginComponent },
  { path: 'adminlogin', component: AdminloginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login/register', component: RegisterComponent },
  { path:  'register/login',component:LoginComponent},
  { path: 'profile', component: ProfileComponent },
  { path: 'moneytransfer', component: MoneyTransferComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'cart', component: CartComponent },
  { path: 'usermanagement', component: UserManagementComponent },
  { path: 'exchangerate', component: ExchangeRateComponent },
  { path: 'exchangerate/currency', component: AddexchangeComponent },
  { path: 'converter', component: ConverterComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule {

}
