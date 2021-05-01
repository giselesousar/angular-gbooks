import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-classification',
  templateUrl: './classification.component.html',
  styleUrls: ['./classification.component.css']
})
export class ClassificationComponent implements OnInit {

  labels: string[] = ['Detestei', 'Não gostei', 'Razoável', 'Gostei', 'Amei'];
  defaultOption: number = -1;
  optionOver: number = -1;

  constructor() { }

  ngOnInit(): void {
  }

  selectOption(index: number){
    this.defaultOption = index;
  }

  onMouseOver(index: number){
    this.optionOver = index;
  }

  onMouseOut(){
    this.optionOver = this.defaultOption;
  }
}
