import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonListComponent } from './person-list/person-list.component';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { MessageComponentModule } from "../../component/message/message.module";
import { PersonRoutingModule } from './person-routing.module';

const declaraions: any = [
  PersonListComponent,
]

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MessageComponentModule,
    PersonRoutingModule
],
  declarations: [...declaraions],
})
export class PersonModule { }
