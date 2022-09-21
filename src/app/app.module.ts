import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardUserComponent } from './board-customer/board-user.component';

import { authInterceptorProviders } from './_helpers/auth.interceptor';
import { CartComponent } from './cart/cart.component';

import { FooterComponent } from './footer/footer.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { MoneyTransferComponent } from './money-transfer/money-transfer.component';
import { ExchangeRateComponent } from './exchange-rate/exchange-rate.component';
import { ConverterComponent } from './converter/converter.component';
import { AddexchangeComponent } from './addexchange/addexchange.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ProfileComponent,
    BoardUserComponent,
    CartComponent,
    AdminloginComponent,
    UserManagementComponent,
    MoneyTransferComponent,
    ExchangeRateComponent,
    ConverterComponent,
    AddexchangeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
