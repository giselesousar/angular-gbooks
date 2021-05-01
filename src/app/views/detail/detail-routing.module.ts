import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DetailComponent } from './detail/detail.component';

const detailRoutes: Routes = [
  { path: ':id', component: DetailComponent },
];

@NgModule({
  imports: [RouterModule.forChild(detailRoutes)],
  exports: [RouterModule]
})
export class DetailRoutingModule { }
