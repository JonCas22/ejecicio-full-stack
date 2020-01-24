import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor(private http:HttpClient) { }

  usersDB = [];

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
       //console.log("Get: " + JSON.stringify(users));
  }
}
