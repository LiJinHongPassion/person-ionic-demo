import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseModalComponent } from './base-modal/base-modal.component';

const component = [
  BaseModalComponent
]

@NgModule({
  declarations: [...component],
  imports: [
    CommonModule
  ],
  exports: [component]
})
export class ModalModule { }
