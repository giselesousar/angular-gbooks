import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FavoritesRoutingModule } from './favorites-routing.module';
import { PanelModule } from './../../components/panel/panel.module';
import { FavoritesComponent } from './favorites/favorites.component';
import { CardModule } from './../../components/card/card.module';

@NgModule({
  declarations: [
    FavoritesComponent,
  ],
  imports: [
    CommonModule,
    CardModule,
    PanelModule,
    FavoritesRoutingModule
  ],
  exports: [
    FavoritesComponent
  ],
})
export class FavoritesModule { }
