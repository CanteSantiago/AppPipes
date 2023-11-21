import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basicsPages',
  templateUrl: './basicsPages.component.html',
  styleUrls: ['./basicsPages.component.css']
})
export class BasicsPagesComponent  {
  public nameLower: string = 'santiago';
  public nameUpper: string = 'SANTIAGO';
  public fullName: string = 'SaNtIaGo CaNtE';

  public customDate: Date = new Date();


}
