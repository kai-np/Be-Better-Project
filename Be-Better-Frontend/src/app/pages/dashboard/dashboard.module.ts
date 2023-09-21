import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardPage } from './containers/dashboard.page';
import { UIModule } from 'src/app/lib/ui/ui.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DashboardRoutingModule,
    ReactiveFormsModule,
    UIModule,
  ],
  declarations: [DashboardPage],
})
export class DashboardModule {}
