import { Component, OnInit, Output } from '@angular/core';
import { ITEMS } from "../../mock-data";
import { Item } from 'src/app/Item';

@Component({
  selector: 'app-images-area',
  templateUrl: './images-area.component.html',
  styleUrls: ['./images-area.component.css']
})
export class ImagesAreaComponent implements OnInit {
  @Output() item: Item;
  @Output() tags: string[];

  items = ITEMS; // Fetch this with an API call later
  tags_arr:string[] = [];
  cart_items: any[] = [];
   
  constructor() { }
 
  filterResults(tagName:string){
    this.items = ITEMS;
    if(tagName!= 'all' && tagName!= 'clear'){
      this.items = this.items.filter((v:Item)=> v.tag.toLowerCase() == tagName.toLowerCase())
    }
  }
  
  sortResults(order:string){
    this.items = ITEMS;
    if (order=='desc') {
      this.items.sort((v,d)=> (parseInt(v.price) >= parseInt(d.price))? -1 : 1)
      return;
    }else{
      this.items.sort((v,d)=> (parseInt(v.price) < parseInt(d.price))? -1 : 1)
      return;
    }
  }
  
  addItemToCart(cartItem:Item){
    let temp = {
      'name': cartItem.name,
      'vendor' : cartItem.vendor,
      'price'  : cartItem.price,
      'size' :cartItem.selectedSize?.value,
      'id' : cartItem.selectedSize?.id,
      'qty' : 1
    }
    this.cart_items.push(temp)
    console.log(this.cart_items)
  }
  
  ngOnInit(){
    this.items = this.items.map((x)=>{
      let compare_at_price = parseInt(x['compare_at_price'])
      x.discount = Math.round((compare_at_price - parseInt(x['price']))/compare_at_price)*100;
      this.tags_arr.push(x.tag)
      return x;
    })
    this.tags_arr = [...new Set(this.tags_arr)]
  }

}
