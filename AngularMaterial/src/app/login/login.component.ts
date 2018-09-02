import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../_service/auth.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isLoading = false;
  isLoadingResults = false;

  constructor(private authservice: AuthService,
    private router: Router, private snackbar: MatSnackBar) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {

    console.log(form);
    this.isLoadingResults = true;

    this.authservice.login({
      email: form.value.email,
      password: form.value.password
    }).subscribe(next => {
      this.router.navigate(['/home']);
    }, error => {
      this.isLoadingResults = false;
      console.log(error.error.error.message);
         this.snackbar.open(error.error.error.message, null, {
           duration: 3000
         });
    });
  }

}
