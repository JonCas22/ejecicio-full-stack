import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AlertController } from '@ionic/angular';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PublicationServiceService {

  constructor(private http:HttpClient, private alertController: AlertController) { }
  publicationArrayDDBB = [];

  getPublications(): Observable<any>{
    return this.http.get('http://localhost:3000/publication/');
    //console.log("Get: " + JSON.stringify(users));
  }

  deletePublication(item){
    this.http.delete('http://localhost:3000/publication/' + item.id).subscribe(
              (val) => {
                  console.log("DELETE call successful value returned in body");
              },
              response => {
                  console.log("DELETE call in error", response);
              },
              async () => {
                  console.log("The DELETE observable is now completed.");
                  
                  const alert = await this.alertController.create({
                    header: 'Exito',
                    message: 'La publicación ha sido borrada con exito',
                    buttons: [
                      {
                        text: 'Okay',
                        handler: () => {
                          console.log('Confirm Okay');
                          window.location.reload();
                        }
                      }
                    ]
                  });
              
                  await alert.present();
                  
              });
  }
}
