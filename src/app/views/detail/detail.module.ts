import { DetailRoutingModule } from './detail-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailComponent } from './detail/detail.component';

@NgModule({
  declarations: [
    DetailComponent,
  ],
  imports: [
    CommonModule,
    DetailRoutingModule
  ],
  exports: [],
})
export class DetailModule { }
