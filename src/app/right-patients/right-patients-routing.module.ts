import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RightPatientsPage } from './right-patients.page';

const routes: Routes = [
  {
    path: '',
    component: RightPatientsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RightPatientsPageRoutingModule {}
