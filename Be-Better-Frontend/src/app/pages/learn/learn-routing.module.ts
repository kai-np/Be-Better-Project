import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LearnPage } from './containers/learn.page';

const routes: Routes = [
  {
    path: '',
    component: LearnPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LearnRoutingModule {}
