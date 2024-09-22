import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-qrcode',
  templateUrl: './qrcode.component.html',
  styleUrls: ['./qrcode.component.scss'],
})
export class QrcodeComponent   {


  text: string = '';
  workText: string = '';
  imgBase64: string = ''

  constructor() { }
 
  async onQrClick() {
    this.workText = this.text;
  }

}
