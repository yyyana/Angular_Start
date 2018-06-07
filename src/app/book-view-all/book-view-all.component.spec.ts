import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookViewAllComponent } from './book-view-all.component';

describe('BookViewAllComponent', () => {
  let component: BookViewAllComponent;
  let fixture: ComponentFixture<BookViewAllComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookViewAllComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookViewAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
