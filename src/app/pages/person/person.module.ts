import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonListComponent } from './person-list/person-list.component';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular'; 
import { PersonRoutingModule } from './person-routing.module';
import { TranslateModule } from '@ngx-translate/core';
import { PersonEditComponent } from './person-edit/person-edit.component';

const declaraions: any = [
  PersonListComponent,
  PersonEditComponent
]

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PersonRoutingModule,
    // 引入国际化模块
    TranslateModule
  ],
  declarations: [...declaraions],
})
export class PersonModule { }
