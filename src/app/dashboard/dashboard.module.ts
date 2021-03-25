import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DashboardPageRoutingModule } from './dashboard-routing.module';

import { DashboardPage } from './dashboard.page';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MatCardModule,
    DashboardPageRoutingModule
  ],
  declarations: [DashboardPage]
})
export class DashboardPageModule {}
