import { Component } from '@angular/core';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {
  name: string = "Terra Sonâbula";
  author: string = "Mia Couto";
  showBooks: boolean = true;
  inputText : string | null = null;

  toggleShowBooks = () => {
    this.showBooks = this.showBooks ? false : true;
  }
}
