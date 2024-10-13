import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'person',
    loadChildren: () => import('./pages/person/person.module').then(m => m.PersonModule),
  },
  {
    path: 'event',
    loadChildren: () => import('./pages/event/event.module').then(m => m.EventModule),
  },
  {
    path: 'data',
    loadChildren: () => import('./pages/data-mgmt/data-mgmt.module').then(m => m.DataMgmtModule),
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'qrcode',
    loadChildren: () => import('./pages/qrcode/qrcode.module').then(m => m.QrcodeModule)
  },
  {
    path: '',
    redirectTo: 'home/tabs/tab1',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, useHash: true })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
