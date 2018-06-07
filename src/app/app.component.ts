import { Component } from '@angular/core';
import {Book} from '../entities/Book';

@Component({
  selector: 'app-root',
  template: `
      <div class="blockAdd">
        <app-book-add (add)="addBookInArray($event)" ></app-book-add>
      </div>
        <div class="blockViewAll">
            <app-book-view-all *ngFor="let book of Books" [book]="book" (viewBook)="bookView = $event" ></app-book-view-all>
        </div>
      <div class="blockViewBook">
        <app-book-view-one *ngIf="bookView!==null"  [bookView]="bookView" (bookNotView)="bookNotView()" ></app-book-view-one>
      </div>
  `,
  styles: [`

      .blockAdd, .blockViewAll, .blockViewBook {
          display: inline-block;
          margin: 10px;
      }

      .blockViewAll {
          vertical-align: top;
          max-width: 400px;
      }

      .blockViewBook {
          vertical-align: top;
          max-width: 350px;
      }
  `]
})
export class AppComponent {
  public Books: Array <Book> = [
      new Book(
          'Все сказки и рисунки',
          'Сутеев А А',
          'Собрались как-то раз звери все вместе и стали рассказывать друг другу сказки, а замечательный детский писатель и художник Владимир Григорьевич Сутеев услышал эти истории, записал и нарисовал к ним иллюстрации. ' +
          'Теперь и ты сможешь узнать, почему капризничала Кошка, зачем Петуху понадобились краски и кто же, в конце концов, сказал "мяу"!..А ещё тебе наверняка захочется подружиться с близнецами Ваней и Машей Кнопочкиными, их собакой Чапкой и котом Усиком, ведь вам будет так весело вместе!\n',
          'https://img2.labirint.ru/books/394432/big.jpg'),
      new Book(
          'Все стихи и сказки в рисунках Сутеева',
          ' Прейсн А., Чуковский К. И., Берестов В. Д.',
          'В книгу вошли все стихи и сказки, проиллюстрированные В. Сутеевым, включая сборник В. Берестова "Весёлое лето", не издававшийся с 1991 г. Кроме того, на страницах нашей книги вы найдёте таких проверенных временем отечественных авторов, как К. Чуковский ("Айболит", "Мойдодыр" и др.), С. Маршак ("Усатый-полосатый"), Г. Остер ("Котёнок по имени Гав") и многих других, а также стихи и сказки зарубежных писателей (Алф Прёйсн "Про козлёнка, который умел считать до десяти", Лилиан Муур "Крошка Енот и Тот, кто сидит в пруду). Наш сборник наверняка станет любимой настольной книгой вашего ребёнка!',
          'https://img1.labirint.ru/books/476801/big.jpg')
      ];
   public addBookInArray(book: Book): void {
    // console.log(book);
      this.Books.push(book.clone());
  }
  private _bookView: Book = null;
    get bookView(): Book {
        return this._bookView;
    }
    set bookView(value: Book) {
        this._bookView = value;
    }
    public bookNotView() {
        this._bookView = null;
    }


}
