import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Book} from '../../entities/Book';

@Component({
  selector: 'app-book-view-one',
  template: `
      <div class="form_for_view_one">
          <img src='{{book.url_img}}'>
          <div class="author">{{book.author}}</div>
          <div class="name">{{book.name}}</div>
          <div class="annotation">{{book.annotation}}</div>
          <button (click)="bookHider()">Скрыть</button>
      </div>
  `,
  styleUrls: ['./book-view-one.component.css']
})
export class BookViewOneComponent {
  @Input('bookView') book: Book;
  @Output('bookNotView') bookHide: EventEmitter<Book> = new EventEmitter<Book>();
  public bookHider() {
    this.bookHide.emit(this.book);
  }

}
