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
    this.reloadData();

  }
  reloadData(){
    this.userService.getUsersFromDDBB().subscribe(
      (val) => {
          console.log("POST call successful value returned in body");
          console.log(val);
          this.usersArrayDDBB = val;
      },
      response => {
          console.log("POST call in error", response);
      },
      () => {
          console.log("The POST observable is now completed.");
          //window.location.reload();
      }); ;
  }


  onClick(name){
    alert("has pulsado el usuario =>" + name);
  }

  async delete(item){
    let alert = await this.alertController.create({
      header: 'Estas seguro?',
      cssClass: 'alertPop',
      message: 'Pulsa aceptar si deseas eliminar el usuario',
      buttons: [{ text: 'Cancel', role: 'cancel' },
                { text: 'Aceptar', handler: ()=>{
                  this.userService.deleteUser(item);
                }
                }
               ]
  });
  await alert.present();
  }

  async updateTask(item) {
    let alert = await this.alertController.create({
        header: 'Update Task?',
        cssClass: 'alertDanger',
        message: 'Inserta los nuevos valores a actualizar',
        inputs: [{ name: 'nombre', value: item.nombre_usuario,  placeholder: 'Nombre'}, {name:'email', value: item.email, placeholder: 'Email'},
         {name:'contraseña', type:"password", value: item.contrasena,  placeholder: 'Contraseña'}],
        buttons: [{ text: 'Cancel', role: 'cancel' },
                  { text: 'Update', handler:  data => {
                     this.userService.updateUser(data, item);
                  }
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
        {name:'contraseña',type:"password", placeholder: 'Contraseña'}],
        buttons: [{ text: 'Cancel', role: 'cancel' },
                  { text: 'Añadir', handler:  data => {
                      this.userService.register(data);
                     }
                  }
                ]
    });
    await alert.present();
    }

    updateActive(user){
      console.log("Usuario es " +user.id);
      
      user.isActive= !user.isActive;
      // guardar el objeto para actualizar
      console.log(user.isActive);
      
      this.userService.updateIsActive(user).subscribe(
        (val) => {
            console.log("POST call successful value returned in body");
            console.log("usuario:" +val); 
            this.reloadData();
        },
        response => {
            console.log("POST call in error", response);
        },
        () => {
            console.log("The POST observable is now completed.");
            //window.location.reload();
        }); 
      this.userService.getUsers();

      console.log("user_actualizado");
      console.log(this.usersArrayDDBB);
    }

}
