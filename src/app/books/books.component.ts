import { BooksService } from './books.service';
import { Component, OnInit } from '@angular/core';
import { BookInterface } from '../book-interface';
@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
})
export class BooksComponent implements OnInit{
  books: BookInterface[] = [];
  showBooks: boolean = true;
  inputText: string | null = null;

  constructor(private booksService : BooksService ) {}

  ngOnInit(): void {
    this.books = this.booksService.getBooks();
  }

  toggleShowBooks = () => {
    this.showBooks = this.showBooks ? false : true;
  };

  addToCart = (book: BookInterface) => {
    console.log(book);
  };
}
