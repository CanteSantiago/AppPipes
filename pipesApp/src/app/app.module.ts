import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRouterModule } from './app-routing.module';
import { SharedModule } from './shared/components/menu/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//configuracion del local de la app
import localeEsHN from '@angular/common/locales/es-HN';
import localeFrCA from '@angular/common/locales/fr-CA';

import { registerLocaleData } from '@angular/common';
import { ProductsModule } from './products/products.module';
registerLocaleData(localeEsHN);
registerLocaleData( localeFrCA );


@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
AppRouterModule,
SharedModule,
BrowserAnimationsModule,
ProductsModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'es-HN' }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
