import { Component, OnInit } from '@angular/core';
//import { AuthService } from '../auth.service';
import { Router } from  "@angular/router";
import { User } from '../models/user';
import { UserEntity } from '../user/user.entity';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor(/*private  authService:  AuthService*/private  router:  Router, private http:HttpClient) { }

  user: UserEntity;

  ngOnInit() {
    this.user = new UserEntity();
  }

  register(form) {
    console.log(form);
    // console.log(form.value.name)
    try {

      
      this.user.avatar="";
      this.user.clave_activacion = "";
      this.user.grupo_usuarios="default";
      this.user.version = "1.0";
      this.user.fecha_creacion = new Date();
      this.user.ultima_fecha_modificacion = new Date();
      this.user.isActive = 0;
      this.user.apiToken = "";

      console.log(this.user);

      let headers = new HttpHeaders().set('Content-Type', 'application/json');
    
      this.http.post('http://localhost:3000/user', this.user, {headers: headers});

      //this.router.navigate(["/login", user]);
      
    } catch (error) {
      console.log(error);
      
    }

  }

}
