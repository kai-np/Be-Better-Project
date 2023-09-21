import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UIModule } from 'src/app/lib/ui/ui.module';
import { MyBodyRoutingModule } from './my-body-routing.module';
import { MyBodyPage } from './containers/my-body.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyBodyRoutingModule,
    ReactiveFormsModule,
    UIModule,
  ],
  declarations: [MyBodyPage],
})
export class MyBodyModule {}
