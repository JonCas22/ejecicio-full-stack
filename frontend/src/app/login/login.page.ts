import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { UserEntity } from '../user/user.entity';
import { AlertController } from '@ionic/angular';
import { Router, ActivatedRoute, Params } from '@angular/router';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
//import { HttpModule, Http, Response} from '@angular/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
@Injectable()
export class LoginPage implements OnInit {

  user1:User = new User("Jon", "joncas@gmail.com","1234");
  user2:User = new User("Olek", "okel@gmail.com", "4567");
  user3:User = new User("Cris", "cristian@gmail.com", "8910");
  user4:User = new User("Tobi", "tobi1@gmail.com", "1112");
  
  usersArray:User[]=[this.user1, this.user2, this.user3, this.user4];

  usersDB:UserEntity[] = [];

  userMail:string = '';
  userPassword:string = '';
  getParams:any = null;

  apiUrl:string = 'http://localhost:3000/user';

  constructor(public alertController: AlertController, private router: Router,
    private route: ActivatedRoute, private http:HttpClient) {
      this.askForUser();
  }

  ngOnInit() {    
    //this.getParams = this.route.params.subscribe((params: Params) => this.getParams = params['user']);
    this.route.params.subscribe(params => {
      this.getParams = params;
    }); 

    if(this.getParams==''|| this.getParams==null || this.getParams==undefined){
      console.log("Ningun parametro");
      
    }else{
      this.saveNewUser(this.getParams);
    }
    console.log(this.getParams);
  }

  login(form){
    console.log(form.value);
    var route = this.router;
    this.usersDB.map(function(item, index){
      if(item.nombre_usuario==form.value.email&&item.contrasena==form.value.password){
        console.log("Usuario logeado");
        route.navigate(['/user']);
      }else{
        console.log("Usuario no logeado, usuario/contraseña incorrecta");
      }
    });
  }

  saveNewUser(user){
    var newUser = new User(user.nombre, user.email, user.contraseña);
    this.usersArray.push(newUser);
    console.log("Nuevo usuario guardado");
    
  }

  askForUser(){
    var users = this.getUsers();
    users.subscribe(result=>{
      if(result.code!=200){
        console.log(result);
        this.usersDB = result;
        console.log(this.usersDB);
        
      }else{
        console.log("matar a alguien");
      }
    },
    error=>{
      console.log(<any>error);
      
    })
  }

  getUsers(): Observable<any>{
       return this.http.get('http://localhost:3000/user/');
       //console.log("Get: " + JSON.stringify(users));
  }

}
