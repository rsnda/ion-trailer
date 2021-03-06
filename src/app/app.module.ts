import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import {HttpModule} from '@angular/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { FavorisPage } from '../pages/favoris/favoris';
import { PreferencesPage } from '../pages/preferences/preferences';
import { TrailerPage } from '../pages/trailer/trailer';
import { ApiProvider } from '../providers/api/api';
import { TrailerListComponent } from '../components/trailer-list/trailer-list';
import { TrailerItemComponent } from '../components/trailer-item/trailer-item';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    FavorisPage,
    TrailerPage,
    PreferencesPage,
    TrailerListComponent,
    TrailerItemComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    ReactiveFormsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    FavorisPage,
    PreferencesPage,
    TrailerPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ApiProvider
  ]
})
export class AppModule {}
