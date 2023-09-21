import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GetStartedContainer } from './containers/get-started-container/get-started-container.page';

const routes: Routes = [
  {
    path: '',
    component: GetStartedContainer,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IntroRoutingModule {}
