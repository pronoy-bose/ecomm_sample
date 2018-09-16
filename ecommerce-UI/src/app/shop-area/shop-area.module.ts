import { HttpClientModule } from '@angular/common/http';
import { EcommNavComponent } from './../ecomm-nav/ecomm-nav.component';
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
    MaterialModule
  ],
  declarations: [
    HomeComponent,
    ProductDetailsComponent,
    ProductsComponent,
    EcommNavComponent
  ]
})
export class ShopAreaModule { }
