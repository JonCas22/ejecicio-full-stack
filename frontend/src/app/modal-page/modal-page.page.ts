import { Component, OnInit, Input } from '@angular/core';
import { AlertController, NavParams } from '@ionic/angular';
import { PublicationServiceService } from '../publications/services/publication-service.service';

@Component({
  selector: 'app-modal-page',
  templateUrl: './modal-page.page.html',
  styleUrls: ['./modal-page.page.scss'],
})
export class ModalPagePage implements OnInit {

  @Input() item: {};
  itemToUpdate = {};

  constructor(private alertController:AlertController,
     private publicationService:PublicationServiceService, navParams: NavParams) { 
      console.log(navParams.get('item'));
      this.itemToUpdate = navParams.get('item');
      console.log(this.itemToUpdate);
      

     }

  publication = {};

  ngOnInit() {
  }

  async updateTask() {

    this.publicationService.updatePublication(this.publication);

  }

}
