import { Component } from '@angular/core';


import { RafflePage } from '../raffle/raffle';
import {People } from '../people/people';
import { GiftPage } from '../gift/gift';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = People;
  tab2Root = GiftPage;
  tab3Root = RafflePage;

  constructor() {

  }
}
