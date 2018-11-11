import { CartDetailsComponent } from './cart-details/cart-details.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { ProfileComponent } from './profile/profile.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'profile',
    pathMatch: 'full'
  },
  {
    path: '',
    component: UserHomeComponent,
    children: [
      {
        path: 'profile',
        component: ProfileComponent
      },
      {
        path: 'cart',
        component: CartDetailsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EcommUsersRoutingModule { }
