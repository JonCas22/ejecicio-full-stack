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
    this.askForUsers();
    return this.usersArrayDDBB;
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
        console.log("problemas");
      }
    },
    error=>{
      console.log(<any>error);
      
    })
  }

  updateIsActive(index){
    console.log("Updating active");
    
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      })
    };

    
    this.http.put('http://localhost:3000/user/' + this.usersArrayDDBB[index].id, httpOptions)
    .subscribe(
        (val) => {
            console.log("POST call successful value returned in body");
        },
        response => {
            console.log("POST call in error", response);
        },
        () => {
            console.log("The POST observable is now completed.");
            //window.location.reload();
        });;

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
