import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UIModule } from 'src/app/lib/ui/ui.module';
import { LearnRoutingModule } from './learn-routing.module';
import { LearnPage } from './containers/learn.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
   LearnRoutingModule,
    ReactiveFormsModule,
    UIModule,
  ],
  declarations: [LearnPage],
})
export class LearnModule {}
