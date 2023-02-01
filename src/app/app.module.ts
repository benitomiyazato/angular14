import { BooksModule } from './books/books.module';
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { BooksComponent } from './books/books.component';
import { BookComponent } from './book/book.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, BooksModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
