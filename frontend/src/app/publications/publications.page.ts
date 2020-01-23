import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { PublicationServiceService } from './services/publication-service.service';
import { PublicationEntity } from './publication.entity';

@Component({
  selector: 'app-publications',
  templateUrl: './publications.page.html',
  styleUrls: ['./publications.page.scss'],
})
export class PublicationsPage implements OnInit {

  constructor(public alertController: AlertController,
     private router:Router, private publicationService: PublicationServiceService) {
    
   }

  publicationArrayDDBB = [];
  publication:PublicationEntity;

  ngOnInit() {
    this.publication = new PublicationEntity();
    this.reloadData();
  }

  ionViewWillEnter(){
    this.reloadData();
  }

  reloadData(){
    this.publicationService.getPublications().subscribe(
      (val) => {
          console.log("POST call successful value returned in body");
          console.log(val);
          this.publicationArrayDDBB = val;
      },
      response => {
          console.log("POST call in error", response);
      },
      () => {
          console.log("The POST observable is now completed.");
          //window.location.reload();
      });
  }


  async doSomething(item){
    const alert = await this.alertController.create({
      header: item.titulo,
      message: '¿Que deseas hacer con la publicación?',
      buttons: [
        {text: 'Cancel'},
        {
          text: 'Delete',
          handler: () => {
            console.log('Confirm Delete');
            this.publicationService.deletePublication(item);
          }
        }
      ]
    });

    await alert.present();
  }

  goToAddPublication(){
    this.router.navigate(['/add-publication']);
  }

}
