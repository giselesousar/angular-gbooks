import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { Item } from './../../../utils/types';
import { SearchService } from './../../search/search.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  book!: Item | null;
  inscricao!: Subscription;

  constructor(
    private route: ActivatedRoute,
    private searchService: SearchService
  ) { }

  ngOnInit(): void {
    this.inscricao = this.route.params.subscribe((params: any) => {
      let id = params['id'];
      
      this.book = this.searchService.getBookById(id);
      console.log(this.book);
      console.log(id)
    })
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }

}
