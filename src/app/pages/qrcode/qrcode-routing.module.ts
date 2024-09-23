import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QrcodeComponent } from './qrcode.component';
import { UsersComponent } from './users/users.component';


const routes: Routes = [
  {
    path: '',
    component: QrcodeComponent
  },
  {
    path: 'user',
    component: UsersComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QrcodeRoutingModule {}
