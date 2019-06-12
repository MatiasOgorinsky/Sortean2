import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class GiftsProvider {

  regalos: string[] = [];


  constructor(public http: HttpClient) {
    
  }
  agregarRegalos(regalo) {
    this.regalos.push(regalo);
  }

  delete(index){
    this.regalos.splice(index,1);
    
  }
  getRegalos(){
    return this.regalos;
  }

}
