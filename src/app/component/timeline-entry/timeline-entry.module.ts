import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { TimelineEntryComponent } from './timeline-entry.component';
import { TagModule } from '../tag/tag.module';
import { TimelineComponent } from './timeline/timeline.component';



@NgModule({
  declarations: [TimelineEntryComponent, TimelineComponent],
  imports: [
    IonicModule,
    CommonModule,
    TagModule
  ],
  exports: [TimelineEntryComponent, TimelineComponent]
})
export class TimelineEntryModule { }
