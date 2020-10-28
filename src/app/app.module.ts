import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import localeEs from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';
import {myPipe} from './my-pipe';
import {myPipe2} from './my-pipe2';
import {myPipe3} from './my-pipe3';

registerLocaleData(localeEs);


@NgModule({
  imports: [BrowserModule],
  declarations: [AppComponent,myPipe,myPipe2,myPipe3],
  providers: [{ provide: LOCALE_ID, useValue: 'es' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
