import { AuthGuard } from './guards/auth.guard';
import { AppComponent } from './app.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: '../app/ecomm-auth/ecomm-auth.module#EcommAuthModule'
  },
  {
    path: 'user',
    loadChildren: '../app/ecomm-users/ecomm-users.module#EcommUsersModule',
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
