import { PanelComponent } from './panel.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoldDirective } from 'src/app/shared/bold.directive';


@NgModule({
  declarations: [
    PanelComponent,
    BoldDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [PanelComponent]
})
export class PanelModule { }
