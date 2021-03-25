import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SubDetailPage } from './sub-detail.page';

const routes: Routes = [
  {
    path: '',
    component: SubDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SubDetailPageRoutingModule {}
