import { Injectable } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { I18nService } from '../i18n/i18n.service';
import { BaseModalComponent } from 'src/app/component/modal/base-modal/base-modal.component';

@Injectable({
  providedIn: 'root'
})
export class CommonModalService {
    
  constructor(private modalController: ModalController, private i18n: I18nService) { }

  public showConfimModal(){
    const modal =  this.modalController.create({
        component: BaseModalComponent, // 模态对话框中要显示的组件
        componentProps: {              // 要传递给模态对话框组件的属性
        'prop1': 'value1',
        'prop2': 'value2'
        },
        cssClass: 'your-custom-class',  // 自定义样式类
        showBackdrop: true,            // 是否显示背景
        backdropDismiss: true,         // 点击背景是否关闭模态对话框
        animated: true                 // 是否启用动画
    })
  }
}
