import { Component, OnInit } from '@angular/core';
import { ItemsService } from 'src/app/services/items.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  constructor(private cartItems:ItemsService) { }
  cartItemsArr: any = '';

  ngOnInit(): void {
    this.cartItemsArr = this.cartItems?.getCartItems()
    this.cartItemsArr = JSON.parse(this.cartItemsArr)
  }

}
