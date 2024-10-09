import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; 
import { EventListComponent } from './event-list/event-list.component';
import { EventInfoComponent } from './event-info/event-info.component';
import { EventEditComponent } from './event-edit/event-edit.component';

const routes: Routes = [
  {
    path: '',
    component: EventListComponent
  }, 
  {
    path: 'edit',
    component: EventEditComponent
  },
  {
    path: 'modify/:id',
    component: EventEditComponent
  },
  {
    path: 'detail/:id',
    component: EventInfoComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EventRoutingModule {}
