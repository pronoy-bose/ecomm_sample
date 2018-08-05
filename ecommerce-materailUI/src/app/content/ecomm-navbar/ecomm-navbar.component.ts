import { AuthService } from './../../services/auth.service';
import { SharedDataService } from './../../services/shared-data-service';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material';
import { Router } from '@angular/router';
import { AlertSnackbarComponent } from '../../alerts/alert-snackbar/alert-snackbar.component';

@Component({
  selector: 'app-ecomm-navbar',
  templateUrl: './ecomm-navbar.component.html',
  styleUrls: ['./ecomm-navbar.component.css']
})
export class EcommNavbarComponent implements OnInit {
  isLoggedIn: Boolean;
  userEmail: String;
  cartItemCount: String;
  constructor(private authService: AuthService, private router: Router, public snackBar: MatSnackBar) { }

  ngOnInit() {
    this.userEmail = localStorage.getItem("userEmail");
    this.cartItemCount = localStorage.getItem("cartItemCount");
    if (this.userEmail) {
      this.isLoggedIn = true;
    } else {
      this.isLoggedIn = false;
    }
    console.log(this.userEmail);
    console.log(this.cartItemCount);
  }

  goToMyAccount() {
    console.log("User Details===", this.userEmail);
  }

  logOut() {
    this.isLoggedIn = this.authService.logOut();
    if (!this.isLoggedIn) {
      this.userEmail = "";
      this.openSnackBar('Logged Out Successfully', true);
      this.router.navigate(['/login']);
    }else{
      this.openSnackBar('Some Error Occured', false);
    }
  }

  openSnackBar(data, success) {
    let config = new MatSnackBarConfig();
    config.data = data;
    config.duration = 1000;
    if (success) {
      config.panelClass = ['success-alert'];
      this.snackBar.openFromComponent(AlertSnackbarComponent, config);
    } else {
      config.panelClass = ['fail-alert'];
      this.snackBar.openFromComponent(AlertSnackbarComponent, config);
    }

    console.log("Done");
  }

}
