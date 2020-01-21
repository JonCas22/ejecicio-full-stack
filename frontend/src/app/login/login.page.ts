import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { AlertController } from '@ionic/angular';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  user1:User = new User("Jon", "joncas@gmail.com","1234");
  user2:User = new User("Olek", "okel@gmail.com", "4567");
  user3:User = new User("Cris", "cristian@gmail.com", "8910");
  user4:User = new User("Tobi", "tobi1@gmail.com", "1112");
  
  usersArray:User[]=[this.user1, this.user2, this.user3, this.user4];

  userMail:string = '';
  userPassword:string = '';
  getParams:any = null;

  constructor(public alertController: AlertController, private router: Router, private route: ActivatedRoute) {

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
    this.usersArray.map(function(item, index){
      if(item.email==form.value.email&&item.contraseña==form.value.password){
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

}
