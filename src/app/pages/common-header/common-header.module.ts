import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CommonHeaderComponent } from './common-header.component';



@NgModule({
  declarations: [CommonHeaderComponent],
  imports: [CommonModule, FormsModule, IonicModule, RouterModule
  ],
  exports: [CommonHeaderComponent]
})
export class CommonHeaderModule { }
