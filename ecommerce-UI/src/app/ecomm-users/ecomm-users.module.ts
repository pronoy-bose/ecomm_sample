// import { ErrorInterceptor } from './../helpers/error.interceptor';
// import { JwtInterceptor } from './../helpers/jwt.interceptor';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EcommUsersRoutingModule } from './ecomm-users-routing.module';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  imports: [
    CommonModule,
    EcommUsersRoutingModule,
    HttpClientModule
  ],
  declarations: [ProfileComponent],
  // providers: [
  //   { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
  //   { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
  // ]
})
export class EcommUsersModule { }
