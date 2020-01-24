import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserEntity } from 'src/app/user/user.entity';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor(private http:HttpClient) { }

  usersDB = [];

  logged: boolean = true;


  askForUser(){
    var users = this.getUsers();
    users.subscribe(result=>{
      if(result.code!=200){
        console.log(result);
        this.usersDB = result;
        console.log(this.usersDB);
        
      }else{
        console.log("Error");
      }
    },
    error=>{
      console.log(<any>error);
      
    })
  }

  getUsers(): Observable<any>{
       return this.http.get('http://localhost:3000/user/');
  }

  login(user): Observable<any>{    
    return this.http.post('http://localhost:3000/auth/auth/login', user);
  }

  cambia(){
    this.logged=!this.logged;
  }

}
