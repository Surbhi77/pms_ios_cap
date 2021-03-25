import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QueriesCommentsPageRoutingModule } from './queries-comments-routing.module';

import { QueriesCommentsPage } from './queries-comments.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QueriesCommentsPageRoutingModule
  ],
  declarations: [QueriesCommentsPage]
})
export class QueriesCommentsPageModule {}
