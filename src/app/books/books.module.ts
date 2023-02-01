import { CartComponent } from './../cart/cart.component';
import { FormsModule } from '@angular/forms';
import { BooksService } from './books.service';
import { BookComponent } from './../book/book.component';
import { BooksComponent } from './books.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [BooksComponent, BookComponent, CartComponent],
  imports: [CommonModule, FormsModule],
  providers: [BooksService],
  exports: [BooksComponent]
})
export class BooksModule { }
