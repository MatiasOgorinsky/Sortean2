import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { GiftsProvider } from '../../providers/gifts/gifts';

@Component({
  selector: 'page-gift',
  templateUrl: 'gift.html'
})
export class GiftPage {
  regalos:string[]=[];
  regalo:string;


  constructor(public navCtrl: NavController, private gift:GiftsProvider) {

  }
 
  ionViewWillLoad(){
    this.regalos = this.gift.getRegalos();
  }
  agregarRegalos(){
    if(this.regalo)
    this.gift.agregarRegalos(this.regalo)
    this.regalo=null;

  }
  delete(index){
  this.gift.delete(index);
    
  }
}
