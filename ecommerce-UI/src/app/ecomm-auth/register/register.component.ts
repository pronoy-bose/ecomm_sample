import { AlertSnackbarComponent } from './../../alert-snackbar/alert-snackbar.component';
import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { MatSnackBarConfig, MatSnackBar } from '@angular/material';
import { Router } from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService,
    public snackBar: MatSnackBar, private router: Router) { }

  ngOnInit() {
    this.createRegisterForm();
  }

  // get f() { return this.registerForm.controls; }

  createRegisterForm() {
    this.registerForm = this.fb.group({
      userEmail: ['', [Validators.required, Validators.email]],
      userPassword: ['', Validators.required],
      userFirstName: ['', Validators.required],
      userLastName: ['', Validators.required],
      userPhone: ['', Validators.required],
      userCity: '',
      userState: '',
      userZip: '',
      userCountry: '',
      userAddress: '',
    });
  }

  onRegisterFormSubmit() {
    if (this.registerForm.valid) {
      this.authService.registerUser(this.registerForm.value)
        .subscribe(response => {
          console.log(response);
          if (response['response'] == 'exist') {
            this.openSnackBar('Email ID exists', false);
          } else {
            this.openSnackBar('Registration Successful', true);
          }
        },
          error => {
            console.log(error);
            this.openSnackBar('Registration Failed', false);
          })
    }
  }

  openSnackBar(data, success) {
    let config = new MatSnackBarConfig();
    config.data = data;
    config.duration = 2000;
    if (success) {
      config.panelClass = ['success-alert'];
      this.snackBar.openFromComponent(AlertSnackbarComponent, config);
      this.router.navigate(['/login']);
    } else {
      config.panelClass = ['fail-alert'];
      this.snackBar.openFromComponent(AlertSnackbarComponent, config);
    }

  }

}
