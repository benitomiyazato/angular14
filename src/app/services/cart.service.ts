import { BookInterface } from './../book-interface';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart : BookInterface[] = [];

  constructor() { }

  addToCart(book : BookInterface) {
    this.cart.push(book);
  }

  removeFromCart(book : BookInterface) {
    this.cart = this.cart.filter(b => b != book);
  }

  getCart() {
    return this.cart;
  }
}
