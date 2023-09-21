import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { IntroRoutingModule } from './intro-routing.module';
import { GetStartedContainer } from './containers/get-started-container/get-started-container.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IntroRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [GetStartedContainer],
})
export class IntroModule {}
