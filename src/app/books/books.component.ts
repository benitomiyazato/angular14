import { Component } from '@angular/core';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {
  name: string = "Terra Sonâbula";
  author: string = "Mia Couto";
  isDisabled: boolean = false;

  handleClick = () => {
    this.isDisabled = true;
  }
}
