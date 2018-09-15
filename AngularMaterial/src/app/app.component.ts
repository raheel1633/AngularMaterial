import { Component, OnInit, OnDestroy } from '@angular/core';
import { HubConnection, HubConnectionBuilder } from '@aspnet/signalr';
import * as signalR from '@aspnet/signalr';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Subscription } from 'rxjs/Subscription';
import { AuthService } from './_service/auth.service';
import { Observable } from '../../node_modules/rxjs';
import { map } from '../../node_modules/rxjs/operators';
import { MatSnackBar } from '../../node_modules/@angular/material';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public _hubConnection: HubConnection;
  baseUrl = environment.apiUrl;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );
  title = 'app';
  authSubscription: Subscription;

  constructor(private breakpointObserver: BreakpointObserver, private snackbar: MatSnackBar,
     private authservice: AuthService) { }

  ngOnInit() {
      this._hubConnection = new HubConnectionBuilder()
            .withUrl(this.baseUrl + 'notify')
            .build();
        this._hubConnection.start()
        .then(() => console.log('Connected'));

        this._hubConnection.on('Send', (data: any) => {
          const received = `Received: ${data}`;
          this.snackbar.open(received, null, {
            duration: 3000
          });
      });
  }

  // ngOnDestroy() {
  //   this.authSubscription.unsubscribe();
  // }
  onLogout() {
    this.authservice.logout();
  }
  isLoggedIn() {

    return this.authservice.isLoggedIn();
  }
}
