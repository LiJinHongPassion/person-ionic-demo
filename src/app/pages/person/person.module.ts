import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonListComponent } from './person-list/person-list.component';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular'; 
import { PersonRoutingModule } from './person-routing.module';
import { TranslateModule } from '@ngx-translate/core';
import { PersonEditComponent } from './person-edit/person-edit.component';
import { TagModule } from 'src/app/component/tag/tag.module';
import { WorthModule } from 'src/app/component/pipe/worth/worth.module';
import { AgeModule } from 'src/app/component/pipe/age/age.module';
import { PersonDetailComponent } from './person-detail/person-detail.component';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { TimelineEntryModule } from 'src/app/component/timeline-entry/timeline-entry.module';

const declaraions: any = [
  PersonListComponent,
  PersonEditComponent,
  PersonDetailComponent
]

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PersonRoutingModule,
    // 引入国际化模块
    TranslateModule, 
    TagModule,
    WorthModule,
    AgeModule,
    TimelineEntryModule,
    ScrollingModule
  ],
  declarations: [...declaraions],
  providers: []
})
export class PersonModule { }
