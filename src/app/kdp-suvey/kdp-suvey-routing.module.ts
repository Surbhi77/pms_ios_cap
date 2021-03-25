import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KdpSuveyPage } from './kdp-suvey.page';

const routes: Routes = [
  {
    path: '',
    component: KdpSuveyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KdpSuveyPageRoutingModule {}
