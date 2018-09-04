import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../_service/auth.service';
import { Client } from '../_models/client';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
clients: any = [];
client: Client;
  constructor(private authservice: AuthService, private router: Router) { }

  ngOnInit() {
      this.getUserRoles();
  }

  getUserRoles() {
    this.authservice.getUserRoles(localStorage.getItem('user_id')).subscribe(next => {
    this.clients = next.LFSObject.DTO.Clients;
    // this.selectedClient = this.clients[0].client_name;
    // console.log(this.client);

    }, error => {
    });
  }

  selectClient(value) {
    console.log(value);
    localStorage.setItem('client_id', value);
  }

  start() {
    this.router.navigate(['/orderlist']);
  }

}
