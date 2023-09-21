import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyBodyPage } from './containers/my-body.page';

const routes: Routes = [
  {
    path: '',
    component: MyBodyPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyBodyRoutingModule {}
