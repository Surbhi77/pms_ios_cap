import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KdpSuveyPageRoutingModule } from './kdp-suvey-routing.module';

import { KdpSuveyPage } from './kdp-suvey.page';
import {MatStepperModule} from '@angular/material/stepper';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule, MatRippleModule} from '@angular/material/core';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatSliderModule} from '@angular/material/slider';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
    MatStepperModule,
    MatGridListModule,
    KdpSuveyPageRoutingModule,
    MatSliderModule
  ],
  declarations: [KdpSuveyPage]
})
export class KdpSuveyPageModule {}
