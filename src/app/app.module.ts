import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { BookAddComponent } from './book-add/book-add.component';
import { BookViewAllComponent } from './book-view-all/book-view-all.component';
import { BookViewOneComponent } from './book-view-one/book-view-one.component';



@NgModule({
  declarations: [
    AppComponent,
    BookAddComponent,
    BookViewAllComponent,
    BookViewOneComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
