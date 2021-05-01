import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  grow: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  onInputFocus(){
    this.grow = true;
  }

  onInputFocusOut(){
    this.grow = false;
  }

  onSubmit(query: string){
    console.log(query);
  }

}
