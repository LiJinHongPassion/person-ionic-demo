import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { MultiSelectSearchComponent } from './multi-select-search.component';
import { TranslateModule } from '@ngx-translate/core';



@NgModule({
  declarations: [MultiSelectSearchComponent],
  imports: [
    IonicModule,
    CommonModule,
    // 引入国际化模块
    TranslateModule,
  ],
  exports: [MultiSelectSearchComponent]
})
export class MultiSelectSearchModule { }
