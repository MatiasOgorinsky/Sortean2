import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PeopleProvider } from '../../providers/people/people';
import { GiftsProvider } from '../../providers/gifts/gifts';


@Component({
  selector: 'page-raffle',
  templateUrl: 'raffle.html'
})
export class RafflePage {
  personas: string[] = [];
  regalos: string[] = [];
  mostrarSorteo: boolean;

  ganador: string;
  premio: string;


  constructor(public navCtrl: NavController, private people: PeopleProvider, private gift: GiftsProvider) {
  }

  ionViewWillEnter() {
    this.mostrarSorteo = false;
    this.personas = this.people.getPersonas();
    this.regalos = this.gift.getRegalos();
  }

  sortear() {

    if (this.regalos.length > 0 && this.personas.length > 0) {
      let indicePersona = Math.floor(Math.random() * this.personas.length);
      this.ganador = this.personas[indicePersona];
      this.premio = this.regalos[0];

      this.people.delete(indicePersona);
      this.gift.delete(0);

      this.mostrarSorteo = true;
    }
  }

}