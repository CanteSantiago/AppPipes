import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRouterModule } from './app-routing.module';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
AppRouterModule,
ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
