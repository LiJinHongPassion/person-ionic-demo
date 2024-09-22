import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QrcodeRoutingModule } from './qrcode-routing.module';
import { QrcodeComponent } from './qrcode.component';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';
import { CommonHeaderModule } from '../common-header/common-header.module';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { Tab1PageRoutingModule } from '../tab1/tab1-routing.module';



@NgModule({
  declarations: [QrcodeComponent],
  imports: [
    CommonModule,
    QrcodeRoutingModule,
    IonicModule,
    FormsModule,
    CommonHeaderModule,
    ExploreContainerComponentModule,
    Tab1PageRoutingModule,
    // 引入国际化模块
    TranslateModule
  ]
})
export class QrcodeModule { }
