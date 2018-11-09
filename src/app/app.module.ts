import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Camera } from '@ionic-native/camera';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicStorageModule, Storage } from '@ionic/storage';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { AddEventPage } from '../pages/add-event/add-event';
import {AddEventPageModule} from '../pages/add-event/add-event.module';


import { Items } from '../mocks/providers/items';
import { Settings, User, Api } from '../providers';
import { MyApp } from './app.component';
import { VideoPlayer } from '@ionic-native/video-player';
import { Calendar } from '@ionic-native/calendar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CalendarModule, CalendarDateFormatter, CalendarEventTitleFormatter } from 'angular-calendar';
import { CalendarWeekHoursViewModule } from 'angular-calendar-week-hours-view';

import { CustomEventTitleFormatterProvider } from '../providers/custom-event-title-formatter/custom-event-title-formatter';
import { CustomDateFormatterProvider } from '../providers/custom-date-formatter/custom-date-formatter';

import localeDe from '@angular/common/locales/de';
import { registerLocaleData } from '@angular/common';
registerLocaleData(localeDe);

// The translate loader needs to know where to load i18n files
// in Ionic's static asset pipeline.
export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

export function provideSettings(storage: Storage) {
  /**
   * The Settings provider takes a set of default settings for your app.
   *
   * You can add new settings options at any time. Once the settings are saved,
   * these values will not overwrite the saved values (this can be done manually if desired).
   */
  return new Settings(storage, {
    option1: true,
    option2: 'Ionitron J. Framework',
    option3: '3',
    option4: 'Hello'
  });
}

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AddEventPageModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    }),
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    BrowserAnimationsModule,
   CalendarModule.forRoot(),
   CalendarWeekHoursViewModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AddEventPage
  ],
  providers: [
    Api,
    Items,
    User,
    Camera,
    SplashScreen,
    StatusBar,
    VideoPlayer,
    Calendar,
    { provide: Settings, useFactory: provideSettings, deps: [Storage] },
    // Keep this to enable Ionic's runtime error handling during development
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    CustomEventTitleFormatterProvider,
    CustomDateFormatterProvider
  ]
})
export class AppModule { }
