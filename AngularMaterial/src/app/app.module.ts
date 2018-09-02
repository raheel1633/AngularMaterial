import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { SignupComponent } from './signup/signup.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthService } from './_service/auth.service';
import { AuthGuard } from './_guards/auth.guard';
import { OrderlistComponent } from './orderlist/orderlist.component';
import { OrderService } from './_service/order.service';
import { UiService } from './_service/ui.service';
import { HomeComponent } from './home/home.component';

@NgModule({
   declarations: [
      AppComponent,
      LoginComponent,
      WelcomeComponent,
      SignupComponent,
      OrderlistComponent,
      HomeComponent
   ],
   imports: [
      BrowserModule,
      BrowserAnimationsModule,
      MaterialModule,
      AppRoutingModule,
      FlexLayoutModule,
      FormsModule,
      HttpClientModule
   ],
   providers: [
      AuthService,
      AuthGuard,
      OrderService,
      UiService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
