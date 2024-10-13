import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataIndexComponent } from './data-index/data-index.component';
import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';
import { DataMgmtRoutingModule } from './data-mgmt-routing.module';



@NgModule({
  declarations: [DataIndexComponent],
  imports: [ 
    CommonModule,
    IonicModule, 
    // 引入国际化模块
    TranslateModule,
    DataMgmtRoutingModule 
   ]
})
export class DataMgmtModule { }
