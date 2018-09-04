import { Component, OnInit, OnDestroy } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Subscription } from 'rxjs/Subscription';
import { AuthService } from './_service/auth.service';
import { Observable } from '../../node_modules/rxjs';
import { map } from '../../node_modules/rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );
  title = 'app';
  authSubscription: Subscription;

  constructor(private breakpointObserver: BreakpointObserver, 
     private authservice: AuthService) { }

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
