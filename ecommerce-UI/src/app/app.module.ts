import { MaterialModule } from './material';
import { AppRoutingModule } from './app.routing';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AlertSnackbarComponent } from './alert-snackbar/alert-snackbar.component';

@NgModule({
  declarations: [
    AppComponent,
    AlertSnackbarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule
  ],
  providers: [],
  entryComponents: [
    AlertSnackbarComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
