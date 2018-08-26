import { Subject } from 'rxjs/Subject';
import { map } from 'rxjs/operators';

import { Injectable } from '@angular/core';
import { User } from '../_models/user';
import { AuthData } from '../_models/auth-data';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
authchange = new Subject<boolean>();
private user: User;
baseUrl = environment.apiUrl;


constructor(private router: Router, private http: HttpClient ) { }

registerUser(authdata: AuthData) {
  this.user = {
    email: authdata.email,
    userid: '1234567'
  };
  this.authchange.next(true);
  this.router.navigate(['/welcome']);
}

login(authdata: AuthData) {
  const postData = btoa(authdata.email + ':' + authdata.password);
  return this.http.get(this.baseUrl + 'login', { headers: { 'Authorization': 'Basic ' + postData }})
    .pipe(
    map((response: any) => {
      const user = response;
      console.log(user, 'user');
      if (user) {
        localStorage.setItem('token', btoa(user.key));
        localStorage.setItem('user_id', user.user_id);
        this.authchange.next(true);
        // this.decodedToken = this.jwtHelper.decodeToken(user.token);
        // console.log(this.decodedToken);
      }
    })
  );
    // this.authchange.next(true);
    // this.router.navigate(['/welcome']);
}

logout() {

this.user = null;
localStorage.removeItem('token');
localStorage.removeItem('user_id');
localStorage.removeItem('client_id');
this.router.navigate(['/login']);
this.authchange.next(false);
this.router.navigate(['/login']);
}

getUser() {
  return { ...this.user };
}

isLoggedIn() {

  const token = localStorage.getItem('token');

  if (token) {
    return true;
  }
  return false;
}

}
