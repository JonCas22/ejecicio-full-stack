import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { AlertController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserEntity } from './user.entity';

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

  constructor(public alertController: AlertController, private http:HttpClient) {}

  ngOnInit() {
    this.user= new UserEntity();
    this.askForUsers();
  }

  ionViewWillEnter(){
    console.log("Is entering");
    this.askForUsers();
  }

  isActive(index){
    console.log("Enter" + index);
    
    if(this.usersArrayDDBB[index].isActive==1){
      return true;
    }else{
      return false;
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
                      this.register(data.nombre, data.email, data.contraseña);
                     }
                  }
                ]
    });
    await alert.present();
    }

    updateActive(index){
      this.usersArray[index].isActive= !this.usersArray[index].isActive;
      // guardar el objeto para actualizar
      this.user
    }

    getUsersFromDDBB(): Observable<any>{
      return this.http.get('http://localhost:3000/user/');
      //console.log("Get: " + JSON.stringify(users));
    }  

    askForUsers(){
      var publications = this.getUsersFromDDBB();
      publications.subscribe(result=>{
        if(result.code!=200){
          console.log(result);
          this.usersArrayDDBB = result;
          console.log(this.usersArrayDDBB);
          
        }else{
          console.log("matar a alguien");
        }
      },
      error=>{
        console.log(<any>error);
        
      })
    }

    register(nombre, email, contraseña) {
      // console.log(form.value.name)
  
      var today = new Date();
      var dd = today.getDate();
      var mm = today.getMonth() + 1;
  
      var yyyy = today.getFullYear();
  
      var currentime = yyyy + "/" + mm + "/" + dd;
  
      try {
        this.user.email = email;
        this.user.contrasena = contraseña;
        this.user.nombre_usuario = nombre;
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
                window.location.reload();
            });
  
        console.log("post done");
        
  
        
        
      } catch (error) {
        console.log(error);
        
      }
  
    }

}
