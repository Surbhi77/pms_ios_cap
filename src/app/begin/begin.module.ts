import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { BeginPageRoutingModule } from './begin-routing.module';
import { BeginPage } from './begin.page';
import {MatStepperModule} from '@angular/material/stepper';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule, MatRippleModule} from '@angular/material/core';
import {MatGridListModule} from '@angular/material/grid-list';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
    MatStepperModule,
    MatGridListModule,
    FormsModule,
    IonicModule,
    BeginPageRoutingModule
  ],
  declarations: [BeginPage]
})
export class BeginPageModule {}
