import { Component, OnInit } from '@angular/core';
import { Login } from '../models/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { 
    let service = new Login();

  }

  ngOnInit(): void {
  }

}
