import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


//configuracion del locales de la app
import localEsDO from '@angular/common/locales/es-DO';
import localFrCA from '@angular/common/locales/fr-CA';

import{registerLocaleData} from '@angular/common'

registerLocaleData(localEsDO)
registerLocaleData(localFrCA)

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
   
  ],
  providers: [
    {provide: LOCALE_ID, useValue:'es-DO'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
