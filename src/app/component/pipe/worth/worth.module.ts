import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorthPipe } from './worth.pipe';



@NgModule({
  declarations: [WorthPipe],
  imports: [
    CommonModule
  ],
  exports: [WorthPipe]
})
export class WorthModule { }
