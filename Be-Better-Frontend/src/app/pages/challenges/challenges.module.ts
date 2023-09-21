import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { ChallengesRoutingModule } from './challenges-routing.module';
import { ChallengesPage } from './containers/challenges.page';
import { UIModule } from 'src/app/lib/ui/ui.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChallengesRoutingModule,
    ReactiveFormsModule,
    UIModule,
  ],
  declarations: [ChallengesPage],
})
export class ChallengesModule {}
