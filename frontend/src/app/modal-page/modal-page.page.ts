import { Component, OnInit, Input } from '@angular/core';
import { AlertController, NavParams, ModalController } from '@ionic/angular';
import { PublicationServiceService } from '../publications/services/publication-service.service';

@Component({
  selector: 'app-modal-page',
  templateUrl: './modal-page.page.html',
  styleUrls: ['./modal-page.page.scss'],
})
export class ModalPagePage implements OnInit {

  @Input() item: {};
  itemToUpdate = {};

  constructor(private alertController:AlertController, private modalCtrl: ModalController,
     private publicationService:PublicationServiceService, navParams: NavParams) { 
      console.log(navParams.get('item'));
      this.publication = navParams.get('item');
    
     }

  publication = {};

  ngOnInit() {
  }

  async updateTask() {

    this.publicationService.updatePublication(this.publication);

  }

  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalCtrl.dismiss({
      'dismissed': true
    });
  }

}
