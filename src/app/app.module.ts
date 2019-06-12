import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';


import { People } from '../pages/people/people';
import { TabsPage } from '../pages/tabs/tabs';
import { GiftPage } from '../pages/gift/gift';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { RafflePage } from '../pages/raffle/raffle';
import { PeopleProvider } from '../providers/people/people';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { GiftsProvider } from '../providers/gifts/gifts';


@NgModule({
  declarations: [
    MyApp,
    GiftPage,
    RafflePage,
    People,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    GiftPage,
    RafflePage,
    People,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    PeopleProvider,
    GiftsProvider
  ]
})
export class AppModule {}
