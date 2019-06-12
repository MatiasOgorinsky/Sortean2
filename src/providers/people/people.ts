import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class PeopleProvider {
  private personas: string[] = [];

  constructor(public http: HttpClient) {
    console.log('Hello PeopleProvider Provider');
  }
  agregarPersonas(nombre) {
    this.personas.push(nombre);
  }
  delete(index) {
    this.personas.splice(index, 1);
  }
  getPersonas() {
    return this.personas;
  }


}
