import {Component, EventEmitter, Output} from '@angular/core';
import {Book} from '../../entities/Book';

@Component({
  selector: 'app-book-add',
  templateUrl: './book-add.component.html',
  styleUrls: ['./book-add.component.css']
})
export class BookAddComponent {
  book: Book = new Book('', '', '', '');
  @Output('add') clickEmitter: EventEmitter<Book> = new EventEmitter<Book>();
  public addBook() {
    this.clickEmitter.emit(this.book);
  }

}
