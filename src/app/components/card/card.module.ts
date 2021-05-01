import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardComponent } from './card/card.component';
import { ClassificationComponent } from './classification/classification.component';

@NgModule({
  declarations: [
    CardComponent,
    ClassificationComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    CardComponent
  ]
})
export class CardModule { }
