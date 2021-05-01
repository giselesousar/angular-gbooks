import { Injectable } from '@angular/core';

import data from '../../mocks/books'
import { Item } from './../../utils/types';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor() { }

  search(query: string): Item[]{
    return data;
  }

  getBookById(id: string): Item | null{
    for (const item of data) {
      if (item.id === id) return item;
    }

    return null;
  }
}
 