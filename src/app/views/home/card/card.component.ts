import { Component, Input, OnInit } from '@angular/core';

import { Item } from '../../../utils/types';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() item: Item = {};

  constructor() { }

  ngOnInit(): void {
  }

}
