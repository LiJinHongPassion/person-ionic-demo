import { Component, ElementRef, OnInit } from '@angular/core';
import { Camera, CameraResultType } from '@capacitor/camera';
import QR from 'jsqr';

@Component({
  selector: 'app-qrcode',
  templateUrl: './qrcode.component.html',
  styleUrls: ['./qrcode.component.scss'],
})
export class QrcodeComponent   {

  action: 'decode' | 'encode' | '' = ''

  text: string = '';
  workText: string = '';
  decodeImgSrc: string | undefined = ''
  decodeText: string = ''

  constructor() { }

  async onQrClick() {
    this.workText = this.text;
    this.action = 'encode';
  }

  onQrDecodeClick() {
    this.action = 'decode';
    this.takePicture()
  }

  private async takePicture(){
    this.decodeText = ''
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.Uri
    });

    // image.webPath will contain a path that can be set as an image src.
    // You can access the original file using image.path, which can be
    // passed to the Filesystem API to read the raw data of the image,
    // if desired (or pass resultType: CameraResultType.Base64 to getPhoto)
    const imageUrl: any = image.webPath;

    // Can be set to the src of an image now
    this.decodeImgSrc = imageUrl;

    let canvas: any = document.getElementById('qrCanvas');


    const context: any = canvas.getContext('2d');
    const img = new Image();
    img.src = imageUrl; // 替换为你的二维码图片路径
    img.onload = () => {
      context.drawImage(img, 0, 0, canvas.width, canvas.height);
      const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
      const code = QR(imageData.data, imageData.width, imageData.height);
      // code?.data
      console.log('Decoded QR Code:', code?.data);
      this.decodeText = code?.data ?? ''
    };
  };

}
function ViewChild(arg0: string, arg1: { static: boolean; }): (target: QrcodeComponent, propertyKey: "canvas") => void {
  throw new Error('Function not implemented.');
}

