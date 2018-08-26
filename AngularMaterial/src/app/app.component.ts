import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { AuthService } from './_service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'app';
  authSubscription: Subscription;

  constructor(private authservice: AuthService) { }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.authSubscription.unsubscribe();
  }
  onLogout() {
    this.authservice.logout();
  }
  isLoggedIn() {

    return this.authservice.isLoggedIn();
  }
}
