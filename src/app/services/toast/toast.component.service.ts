import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { I18nService } from '../i18n/i18n.service';

@Injectable({
  providedIn: 'root'
})
export class ToastComponent {
    
  constructor(private toastController: ToastController, private i18n: I18nService) { }

  async showError(msgI18nKey: string, time = 3000){
    const msg: any = await this.i18n.get(msgI18nKey)
    const toast = await this.toastController.create({
        message: 'error: ' + msg,
        duration: time,
        position: 'bottom',
      });
  
      await toast.present();
  }

}
