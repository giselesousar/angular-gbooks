import { Component, OnInit } from '@angular/core';

import data from '../../../mocks/books';
import { Item } from '../../../utils/types';
import { FavoritesService } from '../../favorites/favorites.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  items: Item[] = data;

  constructor(private favoritesService: FavoritesService) { }

  ngOnInit(): void {
  }

  checkIsFavorite(itemId: string): boolean{
    return this.favoritesService.isIncluded(itemId);
  }

}
