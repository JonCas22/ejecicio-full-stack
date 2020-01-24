import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { UserEntity } from '../user/user.entity';
import { AlertController } from '@ionic/angular';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { UserServiceService } from '../user/services/user-service.service';
import { LoginServiceService } from './services/login-service.service';
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

  constructor(public alertController: AlertController, private loginService:LoginServiceService, private router: Router,
    private route: ActivatedRoute, private userService:UserServiceService) {

  }

  ngOnInit() {    
    this.reloadData();
  }

  ionViewWillEnter(){
    this.reloadData();
  }

  reloadData(){
    this.loginService.getUsers().subscribe(
      (val) => {
          console.log("POST call successful value returned in body");
          console.log(val);
          this.usersArray = val;
      },
      response => {
          console.log("POST call in error", response);
      },
      () => {
          console.log("The POST observable is now completed.");
          //window.location.reload();
      });
  }

  login(form){

    let         user = {
      nombre_usuario: form.value.email,
      contrasena: form.value.password
    }

    console.log(form.value);
    var route = this.router;
     this.usersDB.map( function(item, index){
      if(item.nombre_usuario==form.value.email&&item.contrasena==form.value.password && item.isActive!=0){
        console.log("Usuario logeado");
      }else{
        console.log("Usuario no logeado, usuario/contraseña incorrecta o usuario no activo");
      }
    });
    
    this.loginService.login(user).subscribe((datos)=>{
      console.log(datos);
      localStorage.setItem('ACCESS_TOKEN', datos.access_token);
    });
  }

}
