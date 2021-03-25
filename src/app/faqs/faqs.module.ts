import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FaqsPageRoutingModule } from './faqs-routing.module';

import { FaqsPage } from './faqs.page';
import {MatExpansionModule} from '@angular/material/expansion';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MatExpansionModule,
    FaqsPageRoutingModule
  ],
  declarations: [FaqsPage]
})
export class FaqsPageModule {}
