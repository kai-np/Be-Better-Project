import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UIModule } from 'src/app/lib/ui/ui.module';
import { LoginRoutingModule } from './auth-routing.module';
import { LoginPage } from './containers/login/login.page';
import { RegisterPage } from './containers/register/register.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginRoutingModule,
    ReactiveFormsModule,
    UIModule,
  ],
  declarations: [LoginPage, RegisterPage],
})
export class AuthModule {}
