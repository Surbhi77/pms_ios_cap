import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { StepFormPageRoutingModule } from './step-form-routing.module';
import { StepFormPage } from './step-form.page';
import {MatStepperModule} from '@angular/material/stepper';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
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
    StepFormPageRoutingModule
  ],
  declarations: [StepFormPage]
})
export class StepFormPageModule {}
