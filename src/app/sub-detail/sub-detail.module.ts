import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SubDetailPageRoutingModule } from './sub-detail-routing.module';

import { SubDetailPage } from './sub-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SubDetailPageRoutingModule
  ],
  declarations: [SubDetailPage]
})
export class SubDetailPageModule {}
