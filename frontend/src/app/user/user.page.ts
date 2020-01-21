import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { AlertController } from '@ionic/angular';

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

  constructor(public alertController: AlertController) {}

  ngOnInit() {
  }

  isActive(index){
    if(this.usersArray[index].isActive){
      return "Si";
    }else{
      return "No";
    }
    
  }

  getUsers(){
    return this.usersArray;
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
        inputs: [{ name: 'nombre', value: this.usersArray[index].nombre,  placeholder: 'Nombre'}, {name:'email', value: this.usersArray[index].email, placeholder: 'Email'},
         {name:'contraseña', value: this.usersArray[index].contraseña,  placeholder: 'Contraseña'}],
        buttons: [{ text: 'Cancel', role: 'cancel' },
                  { text: 'Update', handler:  data => {
                      this.usersArray[index].nombre = data.nombre; this.usersArray[index].email = data.email; this.usersArray[index].contraseña = data.contraseña;}
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
                      let newUser:User = new User(data.nombre, data.email, data.contraseña); this.usersArray.push(newUser) }
                  }
                ]
    });
    await alert.present();
    }

    updateActive(index){
      if(this.usersArray[index].isActive==false){
        this.usersArray[index].isActive=true;
      }else{
        this.usersArray[index].isActive=false;
      }
      
    }

}
