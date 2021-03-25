import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HowItsWorkPage } from './how-its-work.page';

const routes: Routes = [
  {
    path: '',
    component: HowItsWorkPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HowItsWorkPageRoutingModule {}
