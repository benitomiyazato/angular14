import { Component } from '@angular/core';

interface BookInterface {
  title: string;
  authorName: string;
}

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {
  books : BookInterface[] = [
    {
      title: "terra sonâbula",
      authorName: "mia couto",
    },
    {
      title: "vidas secas",
      authorName: "graciliano ramos"
    }
  ]

  showBooks: boolean = true;
  inputText : string | null = null;

  toggleShowBooks = () => {
    this.showBooks = this.showBooks ? false : true;
  }
}
