import { AppRoutingModule } from './app-routing.module';
import { BooksModule } from './books/books.module';
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, BooksModule, AppRoutingModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
