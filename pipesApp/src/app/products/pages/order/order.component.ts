import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',

})
export class OrderComponent   {
  public menuItems: MenuItem[]=[];

public isUpperCase:boolean=false;

toggleUpercase():void{
  this.isUpperCase = !this.isUpperCase;
}
}
