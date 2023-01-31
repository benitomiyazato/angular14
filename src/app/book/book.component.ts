import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BookInterface } from '../book-interface';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
})
export class BookComponent {
  @Input() book: BookInterface = {} as BookInterface;
  @Output() bookEmitter = new EventEmitter<BookInterface>();

  addToCard = () => {
    this.bookEmitter.emit(this.book);
  };
}
