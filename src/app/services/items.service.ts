import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  constructor() { }
  
  checkAuth(){
    let token = localStorage.getItem('token')
    if(token && token.trim().length>0){
      return true; 
    }else{
      return false;
    }
  }
  
  getCartItems(){
    let cart_items = localStorage.getItem('cart_items');
    return cart_items;
  }
  
}
