import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab3Page } from './tab3.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { Tab3PageRoutingModule } from './tab3-routing.module';
import { CommonHeaderModule } from '../common-header/common-header.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    CommonHeaderModule,
    ExploreContainerComponentModule,
    Tab3PageRoutingModule,
    // 引入国际化模块
    TranslateModule
  ],
  declarations: [Tab3Page]
})
export class Tab3PageModule {}
