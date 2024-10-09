import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventListComponent } from './event-list/event-list.component';
import { EventRoutingModule } from './event-routing.module';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';
import { AgeModule } from 'src/app/component/pipe/age/age.module';
import { WorthModule } from 'src/app/component/pipe/worth/worth.module';
import { TagModule } from 'src/app/component/tag/tag.module';
import { TimelineEntryModule } from 'src/app/component/timeline-entry/timeline-entry.module';
import { EventEditComponent } from './event-edit/event-edit.component';
import { EventInfoComponent } from './event-info/event-info.component';



@NgModule({
  declarations: [EventListComponent, EventEditComponent,EventInfoComponent],
  imports: [
    CommonModule,
    EventRoutingModule,
    FormsModule,
    IonicModule,
    // 引入国际化模块
    TranslateModule, 
    TagModule,
    WorthModule,
    AgeModule,
    TimelineEntryModule
  ]
})
export class EventModule { }
