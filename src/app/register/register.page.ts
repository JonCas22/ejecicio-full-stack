import { Component, OnInit } from '@angular/core';
//import { AuthService } from '../auth.service';
import { Router } from  "@angular/router";
import { User } from '../models/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor(/*private  authService:  AuthService*/private  router:  Router) { }

  ngOnInit() {
  }

  register(form) {
    var user = new User(form.value.name, form.value.email, form.value.password);
    console.log(user);
    this.router.navigate(["/login", user]);
  }

}
