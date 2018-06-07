import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Book} from '../../entities/Book';

@Component({
  selector: 'app-book-view-all',
  template: `

        <div class="form_for_view_all">
            <img src="{{book.url_img}}">
            <div class="author">{{book.author}}</div>
            <div class="name">{{book.name}}</div>
        <button (click)="viewBookEmitter()">Посмотреть</button>
        </div>

  `,
  styleUrls: ['./book-view-all.component.css']
})
export class BookViewAllComponent {
  @Input('book') book: Book;
  // private book:Book = new Book('', '', '', '');
  @Output('viewBook') viewBook: EventEmitter<Book> = new EventEmitter<Book>();
  public viewBookEmitter() {
    this.viewBook.emit(this.book);
  }
}
