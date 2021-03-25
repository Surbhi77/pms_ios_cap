import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RightPatientsPageRoutingModule } from './right-patients-routing.module';

import { RightPatientsPage } from './right-patients.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RightPatientsPageRoutingModule
  ],
  declarations: [RightPatientsPage]
})
export class RightPatientsPageModule {}
