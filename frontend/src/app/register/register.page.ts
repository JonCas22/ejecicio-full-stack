import { Component, OnInit } from '@angular/core';
//import { AuthService } from '../auth.service';
import { Router } from  "@angular/router";
import { User } from '../models/user';
import { UserEntity } from '../user/user.entity';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

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

    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1;

    var yyyy = today.getFullYear();

    var currentime = yyyy + "/" + mm + "/" + dd;

    try {
      
      this.user.avatar="";
      this.user.clave_activacion = "";
      this.user.grupo_usuarios="default";
      this.user.version = "1.0";
      this.user.fecha_creacion = currentime;
      this.user.ultima_fecha_modificacion = currentime;
      this.user.isActive = 1;
      this.user.apiToken = "";

      console.log(this.user);

      //let headers = new HttpHeaders().set('Content-Type', 'application/json');

      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json',
        })
      };
    
      this.http.post('http://localhost:3000/user', this.user, httpOptions)
      .subscribe(
          (val) => {
              console.log("POST call successful value returned in body");
          },
          response => {
              console.log("POST call in error", response);
          },
          () => {
              console.log("The POST observable is now completed.");
              this.router.navigate(["/login"]);
          });

      console.log("post done");
      

      
      
    } catch (error) {
      console.log(error);
      
    }

  }

}
