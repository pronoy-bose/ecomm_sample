import { SharedModule } from './../shared/shared.module';
import { MaterialModule } from './../material';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EcommUsersRoutingModule } from './ecomm-users-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { CartDetailsComponent } from './cart-details/cart-details.component';
import { UserHomeComponent } from './user-home/user-home.component';

@NgModule({
  imports: [
    CommonModule,
    EcommUsersRoutingModule,
    HttpClientModule,
    MaterialModule,
    SharedModule
  ],
  declarations: [
    ProfileComponent,
    CartDetailsComponent,
    UserHomeComponent
  ],
})
export class EcommUsersModule { }
