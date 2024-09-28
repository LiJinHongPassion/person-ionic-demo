import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TagComponent } from './tag.component';
import { TagListComponent } from './tag-list/tag-list.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [TagComponent, TagListComponent],
  imports: [
    IonicModule,
    CommonModule
  ],
  exports: [TagComponent, TagListComponent]
})
export class TagModule { }
