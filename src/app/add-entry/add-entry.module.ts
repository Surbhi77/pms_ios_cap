import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import {MatInputModule} from '@angular/material/input';
import { AddEntryPageRoutingModule } from './add-entry-routing.module';
import {MatStepperModule} from '@angular/material/stepper';
import { AddEntryPage } from './add-entry.page';

@NgModule({
  imports: [
    CommonModule,
    MatInputModule,
    MatStepperModule,
    ReactiveFormsModule,
    FormsModule,
    IonicModule,
    AddEntryPageRoutingModule
  ],
  declarations: [AddEntryPage]
})
export class AddEntryPageModule {}
