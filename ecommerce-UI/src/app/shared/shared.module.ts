import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './../app.routing';
import { MaterialModule } from './../material';
import { EcommNavComponent } from './ecomm-nav/ecomm-nav.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    HttpClientModule
  ],
  declarations: [EcommNavComponent],
  exports:[EcommNavComponent]
})
export class SharedModule { }
