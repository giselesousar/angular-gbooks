import { Component, OnInit } from '@angular/core';

import { Item } from 'src/app/utils/types';
import { FavoritesService } from '../favorites.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {

  favorites!: Item[];

  constructor(private favoritesService: FavoritesService) { }

  ngOnInit(): void {
    this.favorites = this.favoritesService.getFavorites();
  }

  checkIsFavorite(itemId: string): boolean{
    return this.favoritesService.isIncluded(itemId);
  }

}
