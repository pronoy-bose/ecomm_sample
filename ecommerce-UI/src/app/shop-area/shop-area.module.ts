import { SharedModule } from './../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopAreaRoutingModule } from './shop-area-routing.module';
import { HomeComponent } from './home/home.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductsComponent } from './products/products.component';
import { MaterialModule } from '../material';

@NgModule({
  imports: [
    CommonModule,
    ShopAreaRoutingModule,
    HttpClientModule,
    MaterialModule,
    SharedModule
  ],
  declarations: [
    HomeComponent,
    ProductDetailsComponent,
    ProductsComponent
  ]
})
export class ShopAreaModule { }
