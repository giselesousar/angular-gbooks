import { Component, Input, OnInit } from '@angular/core';

import { Item } from '../../../utils/types';
import { FavoritesService } from '../../../views/favorites/favorites.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() item!: Item;
  @Input('isFavorite') favorite!: boolean;

  constructor(private favoritesService: FavoritesService) { }

  ngOnInit(): void {
  }

  onFavoriteClick() {
    this.favorite = !this.favorite;

    if (this.favorite) {
      this.favoritesService.setFavorite(this.item);
    } else {
      this.favoritesService.removeFavorite(this.item.id);
    }

  }

}
