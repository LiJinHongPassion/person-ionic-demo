import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { Tab1PageRoutingModule } from './tab1-routing.module';
import { CommonHeaderModule } from '../common-header/common-header.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    CommonHeaderModule,
    ExploreContainerComponentModule,
    Tab1PageRoutingModule,
    // 引入国际化模块
    TranslateModule
  ],
  declarations: [Tab1Page]
})
export class Tab1PageModule {}
