import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UIModule } from 'src/app/lib/ui/ui.module';
import { GoalsRoutingModule } from './goals-routing.module';
import { GoalsPage } from './containers/goals.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GoalsRoutingModule,
    ReactiveFormsModule,
    UIModule,
  ],
  declarations: [GoalsPage],
})
export class GoalsModule {}
