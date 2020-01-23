import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserEntity } from '../user.entity';

@Injectable({
  providedIn: 'root',

})
export class UserServiceService {

  constructor(private http:HttpClient) { }

  usersArrayDDBB = [];

  user: UserEntity;

  getUsers(){
    return this.usersArrayDDBB;
  }

  getUsersFromDDBB(): Observable<any>{
    return this.http.get('http://localhost:3000/user/');
    //console.log("Get: " + JSON.stringify(users));
  } 


  updateIsActive(user){
    console.log("Updating active");
    console.log(user);
    
    
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      })
    };

    
    return this.http.put('http://localhost:3000/user/' + user.id, user, httpOptions);
    
  }

  deleteUser(item){

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      })
    };

    this.http.delete('http://localhost:3000/user/' + item.id, httpOptions).subscribe(
      (val) => {
          console.log("DELETE call successful value returned in body");
          console.log(val);
          
      },
      response => {
          console.log("DELETE call in error", response);
      },
      () => {
          console.log("The DELETE observable is now completed.");
          window.location.reload();
      });;

  }

  updateUser(data, item){
    console.log("Updating");
    console.log(item);
    console.log(data);
    
    
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      })
    };

    item.nombre_usuario = data.nombre;
    item.email = data.email;
    item.contrasena = data.contraseña;

    
    this.http.put('http://localhost:3000/user/' + item.id, item, httpOptions).subscribe(
      (val) => {
          console.log("PUT call successful value returned in body");
          console.log(val);
          
      },
      response => {
          console.log("PUT call in error", response);
      },
      () => {
          console.log("The PUT observable is now completed.");
          window.location.reload();
      });
  }

  register(data) {
    // console.log(form.value.name)
    try {

      var newUser = new UserEntity();

      var today = new Date();
      var dd = today.getDate();
      var mm = today.getMonth() + 1;

      var yyyy = today.getFullYear();

      var currentime = yyyy + "/" + mm + "/" + dd;
      console.log(data);

      newUser.nombre_usuario = data.nombre;
      newUser.email = data.email;
      newUser.contrasena = data.contraseña;
      newUser.avatar="";
      newUser.clave_activacion = "";
      newUser.grupo_usuarios="default";
      newUser.version = "1.0";
      newUser.fecha_creacion = currentime;
      newUser.ultima_fecha_modificacion = currentime;
      newUser.isActive = 1;
      newUser.apiToken = "";

      console.log(newUser);

      //let headers = new HttpHeaders().set('Content-Type', 'application/json');

      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json',
        })
      };
    
      this.http.post('http://localhost:3000/user', newUser, httpOptions)
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
