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
      title: "Terra Sonâbula",
      authorName: "Mia Couto",
    },
    {
      title: "Vidas Secas",
      authorName: "Graciliano Ramos"
    }
  ]

  showBooks: boolean = true;
  inputText : string | null = null;

  toggleShowBooks = () => {
    this.showBooks = this.showBooks ? false : true;
  }
}
