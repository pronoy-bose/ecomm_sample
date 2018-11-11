import { AlertSnackbarComponent } from './../../alert-snackbar/alert-snackbar.component';
import { ShopAreaService } from './../../shop-area/shop-area.service';
import { AuthService } from './../../ecomm-auth/auth.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material';

@Component({
  selector: 'app-ecomm-nav',
  templateUrl: './ecomm-nav.component.html',
  styleUrls: ['./ecomm-nav.component.css']
})
export class EcommNavComponent implements OnInit {
  isLoggedIn: Boolean;
  authToken: String;
  cartItemCount: Number = 0;

  constructor(private authService: AuthService, private router: Router, public snackBar: MatSnackBar,
    private shopAreaService: ShopAreaService) { }

  ngOnInit() {
    this.shopAreaService.cartCount.subscribe(userCartItemCount => {
      this.cartItemCount = userCartItemCount;
    });
    this.authToken = localStorage.getItem("authToken");
    if (this.authToken) {
      this.isLoggedIn = true;
    } else {
      this.isLoggedIn = false;
    }
    this.shopAreaService.getCartItemCount().subscribe(x => {
      this.shopAreaService.updatedCartCount(x);
    })
  }

  goToMyAccount() {
  }

  getCartItems(){
    this.router.navigateByUrl("/user/cart");
  }

  logOut() {
    this.isLoggedIn = this.authService.logOut();
    if (!this.isLoggedIn) {
      this.openSnackBar('Logged Out Successfully', true);
      this.router.navigate(['/login']);
    } else {
      this.openSnackBar('Some Error Occured', false);
    }
  }

  openSnackBar(data, success) {

    let config = new MatSnackBarConfig();
    config.data = data;
    config.duration = 1000;
    config.verticalPosition = 'top';
    config.horizontalPosition = 'end';
    if (success) {
      config.panelClass = ['success-alert'];
      this.snackBar.openFromComponent(AlertSnackbarComponent, config);
    } else {
      config.panelClass = ['fail-alert'];
      this.snackBar.openFromComponent(AlertSnackbarComponent, config);
    }
  }

}
