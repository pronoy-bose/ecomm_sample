import { ErrorInterceptor } from './../helpers/error.interceptor';
import { JwtInterceptor } from './../helpers/jwt.interceptor';
import { AuthService } from './auth.service';
import { MaterialModule } from './../material';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EcommAuthRoutingModule } from './ecomm-auth-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    EcommAuthRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  declarations: [LoginComponent, RegisterComponent],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    AuthService
  ],
})
export class EcommAuthModule { }
