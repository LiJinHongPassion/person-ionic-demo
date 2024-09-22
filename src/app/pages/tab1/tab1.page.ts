import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  cardList = [
    {
      img: 'https://ionicframework.com/docs/img/demos/card-media.png',
      title: '标题',
      subtitle: '子标题',
      content: '内容',
      routerLink: "/qrcode"
    }
  ]

  constructor() {}

}
