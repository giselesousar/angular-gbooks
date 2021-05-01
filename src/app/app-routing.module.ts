import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SearchComponent } from './views/search/search/search.component';

const routes: Routes = [
  { path: '', component: SearchComponent},
  {
    path: 'book',
    loadChildren: () => import('./views/detail/detail.module').then(m => m.DetailModule)
  },
  {
    path: 'favorites',
    loadChildren: () => import('./views/favorites/favorites.module').then(m => m.FavoritesModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
