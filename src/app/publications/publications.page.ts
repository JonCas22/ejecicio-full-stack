import { Component, OnInit } from '@angular/core';
import { Publication } from '../models/publication';

@Component({
  selector: 'app-publications',
  templateUrl: './publications.page.html',
  styleUrls: ['./publications.page.scss'],
})
export class PublicationsPage implements OnInit {

  publication1:Publication = new Publication("Titulo1", "Hola esta es una publicacion de prueba que estoy utilizando para ver si funciona este ion card en bucle que voy a utilizar","Cochiolate");
  publication2:Publication = new Publication("Titulo2", "Hola esta es una publicacion de prueba que estoy utilizando para ver si funciona este ion card en bucle que voy a utilizar", "Vainillitaaa");
  publication3:Publication = new Publication("Titulo3", "Hola esta es una publicacion de prueba que estoy utilizando para ver si funciona este ion card en bucle que voy a utilizar", "Bizcochitooo");
  publication4:Publication = new Publication("Titulo4", "Hola esta es una publicacion de prueba que estoy utilizando para ver si funciona este ion card en bucle que voy a utilizar", "Galletitaaa");

  publications:Publication[]=[this.publication1, this.publication2, this.publication3, this.publication4];

  constructor() { }

  ngOnInit() {
  }

}
