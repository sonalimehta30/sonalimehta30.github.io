import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  constructor() { }
  
  checkAuth(){
    const token = localStorage.getItem('token')
    if(token && token.trim().length>0){
      return true; 
    }else{
      return false;
    }
  }
  
  getCartItems(){
    const cart_items = localStorage.getItem('cart_items');
    return cart_items;
  }
  
}
