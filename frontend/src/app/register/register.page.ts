import { Component, OnInit } from '@angular/core';
//import { AuthService } from '../auth.service';
import { Router } from  "@angular/router";
import { User } from '../models/user';
import { UserEntity } from '../../../../backend/src/user/user.entity';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor(/*private  authService:  AuthService*/private  router:  Router,
     private http:HttpClient) { }

  ngOnInit() {
  }

  register(form) {
    var user = new User(form.value.name, form.value.email, form.value.password);
    console.log(user);
    this.router.navigate(["/login", user]);
  }

  saveNewUser(form){
    var newUser = new UserEntity(form.value.name, form.value.email, "", form.value.password, true, "",
    "default", "", "1.0", new Date(), new Date());

    let headers = new HttpHeaders().set('Content-type', 'application/json');

    this.http.post('http://localhost:3000/user/', newUser, {headers: headers});

    
  }



}
