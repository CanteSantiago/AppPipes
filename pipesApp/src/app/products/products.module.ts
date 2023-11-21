import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsRoutingModule } from './products-routing.module';
import { PrimeNgModule } from 'src/app/primeNg/primeNg.module';
import { BasicsPagesComponent } from './pages/basicsPages/basicsPages.component';
import { NumbersPageComponent } from './pages/numbers-page/numbers-page.component';
import { UncommonPageComponent } from './pages/uncommon-page/uncommon-page.component';
import { toggleCasePipe } from './pipes/toggle-case.pipe';
import { OrderComponent } from './pages/order/order.component';
import { CanFlyPipe } from './pipes/can-fly.pipe';

@NgModule({
  imports: [
    CommonModule,
    ProductsRoutingModule,
    PrimeNgModule
  ],
  declarations: [
    BasicsPagesComponent,
  NumbersPageComponent,
UncommonPageComponent,
OrderComponent,


//pipes
toggleCasePipe,
CanFlyPipe
]
})
export class ProductsModule { }
