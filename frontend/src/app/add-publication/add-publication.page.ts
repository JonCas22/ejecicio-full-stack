import { Component, OnInit } from '@angular/core';
import { PublicationEntity } from '../publications/publication.entity';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-add-publication',
  templateUrl: './add-publication.page.html',
  styleUrls: ['./add-publication.page.scss'],
})
export class AddPublicationPage implements OnInit {

  constructor(private  router:  Router, private http:HttpClient) { }

  publication: PublicationEntity;

  ngOnInit() {
    this.publication = new PublicationEntity();
  }

  savePublication(form){
    console.log(form);
    console.log(this.publication);

    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1;

    var yyyy = today.getFullYear();

    var currentime = yyyy + "/" + mm + "/" + dd;

    this.publication.autor="autor";
    this.publication.fecha_creacion = currentime;
    this.publication.main = 0;
    this.publication.ultima_fecha_modificacion = currentime;
    this.publication.ultimo_editor = "editor";
    this.publication.url = "";
    this.publication.version = "1.0";

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      })
    };

    try {

      this.http.post('http://localhost:3000/publication', this.publication, httpOptions)
      .subscribe(
          (val) => {
              console.log("POST call successful value returned in body");
          },
          response => {
              console.log("POST call in error", response);
          },
          () => {
              console.log("The POST observable is now completed.");
              //this.router.navigate(["/login"]);
          });

      console.log("post done");
      
    } catch (error) {
      
    }
    
    
  }

  



}
