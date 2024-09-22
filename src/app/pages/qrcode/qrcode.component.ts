import { Component, ElementRef, OnInit } from '@angular/core';
import { Camera, CameraResultType } from '@capacitor/camera';
import { ToastController } from '@ionic/angular';
import QR from 'jsqr';
import { ToastComponent } from 'src/app/services/toast/toast.component.service';

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
  canvasWidth = 300
  canvasHeight = 400


  constructor(private toastService: ToastComponent) { }

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
    const image = await Camera.pickImages({
      quality: 90,
      limit: 1
    });

    // image.webPath will contain a path that can be set as an image src.
    // You can access the original file using image.path, which can be
    // passed to the Filesystem API to read the raw data of the image,
    // if desired (or pass resultType: CameraResultType.Base64 to getPhoto)
    const imageUrl: any = image.photos[0].webPath;

    // Can be set to the src of an image now
    this.decodeImgSrc = imageUrl;

    let canvas: any = document.getElementById('qrCanvas');


    const context: any = canvas.getContext('2d');
    const img = new Image();
    img.width = 300;
    img.height = 400;
    img.src = imageUrl; // 替换为你的二维码图片路径
    img.onload = async () => {
      console.log('width', img.width)
      console.log('height', img.height)
      context.drawImage(img, 0, 0, canvas.width, canvas.height);
      const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
      const code = QR(imageData.data, imageData.width, imageData.height);
      // code?.data
      if(!code){
        this.toastService.showError('cannot.be.parsed')
      }
      console.log('Decoded QR Code:', code, code?.data);
      this.decodeText = code?.data ?? ''
      
    };
    img.onerror = (e)=>{
      this.decodeText = 'error msg: ' + e
    }
  };
  

}

