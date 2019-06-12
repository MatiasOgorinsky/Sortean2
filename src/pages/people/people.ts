import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {PeopleProvider} from '../../providers/people/people';

@Component({
  selector: 'page-people',
  templateUrl: 'people.html'
})
export class People {
  nombre:string;
  personas:string[] = [];
  constructor(public navCtrl: NavController, public people:PeopleProvider) {
  }

  ionViewWillLoad(){
    this.personas = this.people.getPersonas();
  }


  agregarPersonas(){
    if(this.nombre){
      this.people.agregarPersonas(this.nombre);
      this.nombre = "";
    }

  }  

  delete(i){
    this.people.delete(i);
  }


}
