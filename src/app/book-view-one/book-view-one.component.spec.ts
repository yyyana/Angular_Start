import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookViewOneComponent } from './book-view-one.component';

describe('BookViewOneComponent', () => {
  let component: BookViewOneComponent;
  let fixture: ComponentFixture<BookViewOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookViewOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookViewOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
