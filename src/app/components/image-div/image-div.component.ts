import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Item, SizeOption } from 'src/app/Item';

@Component({
  selector: 'app-image-div',
  templateUrl: './image-div.component.html',
  styleUrls: ['./image-div.component.css']
})
export class ImageDivComponent implements OnInit {
  @Input() item: Item; 
  @Output() onAddToCart: EventEmitter<Item> = new EventEmitter();
  
  showSizeOptions = false;
  showATCbtn = false;
  
  constructor() { }
  
  addToCart(item:Item){
    this.onAddToCart.emit(this.item);
  }
  
  sizeSelected(size: SizeOption){
    this.showATCbtn = true; 
    this.item.selectedSize = size.value;
    this.item.sizeCode = size.sizeCode;
  }
  
  ngOnInit(): void {
  }
}
