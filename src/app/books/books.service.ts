import { Injectable } from '@angular/core';

@Injectable()
export class BooksService {
  constructor() {}

  getBooks() {
    return [
      {
        title: 'terra sonâbula',
        authorName: 'mia couto',
      },
      {
        title: 'vidas secas',
        authorName: 'graciliano ramos',
      },
    ];
  }
}
