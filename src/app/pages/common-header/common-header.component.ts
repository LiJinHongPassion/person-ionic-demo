import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-common-header',
  templateUrl: './common-header.component.html',
  styleUrls: ['./common-header.component.scss'],
})
export class CommonHeaderComponent   {

  @Input() title!: string;
  @Input() translucent: boolean = false;
  @Input() collapse: string = '';
  constructor() { }
 

}
