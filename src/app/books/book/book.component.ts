import { CartService } from '../../services/cart.service';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BookInterface } from '../../book-interface';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
})
export class BookComponent {
  @Input() book: BookInterface = {} as BookInterface;
  constructor(private cartService : CartService){}

  addToCart() {
    console.log("adding to cart " + this.book)
    this.cartService.addToCart(this.book);
    console.log("cart = " + this.cartService.getCart());
    this.book.isInCart = true;
  };

  removeFromCart(){
    this.cartService.removeFromCart(this.book);
    this.book.isInCart = false;
  }
}
