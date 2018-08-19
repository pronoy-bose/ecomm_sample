import { HomeService } from './services/home-service.service';
import { AppRoutingModule } from './app.routing';
import { MaterialModule } from './material';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { AuthService } from './services/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { AlertSnackbarComponent } from './alerts/alert-snackbar/alert-snackbar.component';
import { HomeComponent } from './content/home/home.component';
import { EcommNavbarComponent } from './content/ecomm-navbar/ecomm-navbar.component';
import { ProductDetailsComponent } from './content/product-details/product-details.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    AlertSnackbarComponent,
    HomeComponent,
    EcommNavbarComponent,
    ProductDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  entryComponents: [
    AlertSnackbarComponent,
  ],
  providers: [AuthService, HomeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
