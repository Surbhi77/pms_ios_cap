import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HowItsWorkPageRoutingModule } from './how-its-work-routing.module';

import { HowItsWorkPage } from './how-its-work.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HowItsWorkPageRoutingModule
  ],
  declarations: [HowItsWorkPage]
})
export class HowItsWorkPageModule {}
