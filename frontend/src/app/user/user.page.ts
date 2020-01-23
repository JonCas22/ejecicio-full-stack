import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { AlertController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserEntity } from './user.entity';
import { UserServiceService } from './services/user-service.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage implements OnInit {
  
  user1:User = new User("Jon", "joncas@gmail.com","1234");
  user2:User = new User("Olek", "okel@gmail.com", "4567");
  user3:User = new User("Cris", "cristian@gmail.com", "8910");
  user4:User = new User("Tobi", "tobi1@gmail.com", "1112");
  
  usersArray:User[]=[this.user1, this.user2, this.user3, this.user4];
  usersArrayDDBB = [];

  user: UserEntity;

  constructor(public alertController: AlertController,
    private userService: UserServiceService) {}

  ngOnInit() {
    this.user= new UserEntity();
    this.usersArrayDDBB = this.userService.getUsers();

  }

  ionViewWillEnter(){
    console.log("Is entering");
    this.usersArrayDDBB = this.userService.getUsers();
  }

  onClick(name){
    alert("has pulsado el usuario =>" + name);
  }

  async delete(index){
    let alert = await this.alertController.create({
      header: 'Estas seguro?',
      cssClass: 'alertPop',
      message: 'Pulsa aceptar si deseas eliminar el usuario',
      buttons: [{ text: 'Cancel', role: 'cancel' },
                { text: 'Aceptar', handler: ()=>{
                  this.usersArray.splice(index, 1);
                }
                }
               ]
  });
  await alert.present();
  }

  async updateTask(index) {
    let alert = await this.alertController.create({
        header: 'Update Task?',
        cssClass: 'alertDanger',
        message: 'Inserta los nuevos valores a actualizar',
        inputs: [{ name: 'nombre', value: this.usersArrayDDBB[index].nombre_usuario,  placeholder: 'Nombre'}, {name:'email', value: this.usersArrayDDBB[index].email, placeholder: 'Email'},
         {name:'contraseña', value: this.usersArrayDDBB[index].contrasena,  placeholder: 'Contraseña'}],
        buttons: [{ text: 'Cancel', role: 'cancel' },
                  { text: 'Update', handler:  data => {
                      this.usersArrayDDBB[index].nombre_usuario = data.nombre; this.usersArrayDDBB[index].email = data.email; this.usersArrayDDBB[index].contrasena = data.contraseña;}
                  }
                 ]
    });
    await alert.present();
}

    async addUser(){
      let alert = await this.alertController.create({
        header: 'Añadir Usuario',
        message: 'Introduce los datos del nuevo usuario',
        inputs: [{ name: 'nombre',  placeholder: 'Nombre'}, {name:'email', placeholder: 'Email'},
        {name:'contraseña', placeholder: 'Contraseña'}],
        buttons: [{ text: 'Cancel', role: 'cancel' },
                  { text: 'Añadir', handler:  data => {
                      this.userService.register(data.nombre, data.email, data.contraseña);
                     }
                  }
                ]
    });
    await alert.present();
    }

    updateActive(index){
      console.log("Usuario es " + this.usersArrayDDBB[index].id);
      
      this.usersArrayDDBB[index].isActive= !this.usersArrayDDBB[index].isActive;
      // guardar el objeto para actualizar
      this.userService.updateIsActive(index);
    }

}
