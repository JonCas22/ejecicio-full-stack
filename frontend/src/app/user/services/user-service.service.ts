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

    
    return this.http.put('http://localhost:3000/user/' + user.id, user, httpOptions)
    
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
