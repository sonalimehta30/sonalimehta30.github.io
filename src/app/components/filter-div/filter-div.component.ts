import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Item } from 'src/app/Item.interface';

@Component({
  selector: 'app-filter-div',
  templateUrl: './filter-div.component.html',
  styleUrls: ['./filter-div.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FilterDivComponent implements OnInit {
  @Input() tags: string[];
  @Output() filterSelected: EventEmitter<string> = new EventEmitter<string>();
  @Output() onSort: EventEmitter<string> = new EventEmitter<string>();
  
  sort_order = false; 
  filter_applied = false;
  constructor() { }
  
  sort_by_price(sortOrder:string){
    this.onSort.emit(sortOrder);
  }
  
  onfilterSelection(tagName:string){
    this.filter_applied = true;
    this.filterSelected.emit(tagName); 
  }
  
  ngOnInit(): void {
  }

}
