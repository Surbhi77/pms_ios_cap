import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QueriesCommentsPage } from './queries-comments.page';

const routes: Routes = [
  {
    path: '',
    component: QueriesCommentsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QueriesCommentsPageRoutingModule {}
