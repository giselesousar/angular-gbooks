import { Injectable } from '@angular/core';

import { Item } from '../../utils/types';

@Injectable({ providedIn: 'root'})
export class FavoritesService {

    prefix: string = '@favorites/items';

    constructor() { }

    getFavorites(): Item[] {
        try{
            let items = JSON.parse(localStorage.getItem(this.prefix) || '[]');
            return items;
        }catch(err: any){
            console.log(err);
        }
        return [];
    }

    setFavorite(item: Item) {
        let items: Item[] = this.getFavorites();

        items.push(item);
        localStorage.setItem(this.prefix, JSON.stringify(items));
    }

    removeFavorite(itemId: string) {
        let items: Item[] = this.getFavorites();

        let itemsFilter = items.filter(item => item.id != itemId);
        localStorage.setItem(this.prefix, JSON.stringify(itemsFilter));
    }

    isIncluded(itemId: string): boolean {
        let items: Item[] = this.getFavorites();

        let itemsFilter = items.filter(item => item.id == itemId);
        return itemsFilter.length > 0;
    }

}
