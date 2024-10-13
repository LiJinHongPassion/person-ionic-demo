import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DataIndexComponent } from './data-index/data-index.component';

const routes: Routes = [
  {
    path: '',
    component: DataIndexComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DataMgmtRoutingModule {}
