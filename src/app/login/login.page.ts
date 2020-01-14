import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

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
  
  users:User[]=[this.user1, this.user2, this.user3, this.user4];

  userMail:string = '';
  userPassword:string = '';

  constructor(public alertController: AlertController, private router: Router) {}

  ngOnInit() {
  }

  login(form){
    console.log(form.value);
    var route = this.router;
    this.users.map(function(item, index){
      if(item.email==form.value.email&&item.contraseña==form.value.password){
        console.log("Usuario logeado");
        route.navigate(['/user']);
      }else{
        console.log("Usuario no logeado, usuario/contraseña incorrecta");
      }
    });
    

  }

}
