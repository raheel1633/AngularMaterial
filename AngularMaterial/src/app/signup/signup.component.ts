import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../_service/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private authservice: AuthService) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {

    console.log(form);
    this.authservice.registerUser({
      email: form.value.email,
      password: form.value.password
    });

  }

}
