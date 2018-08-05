import { Router } from '@angular/router';

import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material';
import { AlertSnackbarComponent } from '../../alerts/alert-snackbar/alert-snackbar.component';
import { SharedDataService } from '../../services/shared-data-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService,
    public snackBar: MatSnackBar, private sharedDataService:SharedDataService,
  private router:Router) { }

  createLoginForm() {
    this.loginForm = this.fb.group({
      userEmail: ['', [Validators.required,Validators.email]],
      userPassword: ['', Validators.required],
    });
  }

  ngOnInit() {
    this.createLoginForm();
  }

  onLoginFormSubmit() {
    if (this.loginForm.valid) {
      this.authService.authenticateuser(this.loginForm.value)
        .subscribe(response => {
          const keys = response.headers.keys();
          const authToken = response.headers.get("authorization");
          localStorage.setItem("authToken",authToken);
          this.openSnackBar('Login Successful', true);
          this.router.navigate(['/home']);
        },
          error => {
            this.openSnackBar('Login Failed', false);
          })
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
  }

}
