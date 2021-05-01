import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardModule } from '../../components/card/card.module';
import { PanelModule } from '../../components/panel/panel.module';
import { SearchComponent } from './search/search.component';
import { SearchBarComponent } from './search-bar/search-bar.component';

@NgModule({
  declarations: [
    SearchComponent,
    SearchBarComponent,
  ],
  imports: [
    CommonModule,
    CardModule,
    PanelModule
  ],
  exports: [
    SearchComponent
  ]
})
export class SearchModule { }
