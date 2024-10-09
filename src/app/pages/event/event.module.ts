import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventListComponent } from './event-list/event-list.component';
import { EventRoutingModule } from './event-routing.module';



@NgModule({
  declarations: [EventListComponent],
  imports: [
    CommonModule,
    EventRoutingModule
  ]
})
export class EventModule { }
