import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Color, Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',

})
export class OrderComponent   {
  public menuItems: MenuItem[]=[];

public isUpperCase:boolean=false;
public heroes: Hero[]=[
  {
  name: 'superman',
  canFly: true,
color: Color.blue,
},
{
  name: 'Batman',
  canFly: false,
color: Color.black,
},
{
  name: 'Daredevil',
  canFly: false,
color: Color.red,
},
{
  name: 'robin',
  canFly: false,
color: Color.red,
},
{
  name: 'Linterna verde',
  canFly: true,
color: Color.red,
},
]

toggleUpercase():void{
  this.isUpperCase = !this.isUpperCase;
}
}

