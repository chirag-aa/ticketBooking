import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookTicketByDatesComponent } from './book-ticket-by-dates.component';

describe('BookTicketByDatesComponent', () => {
  let component: BookTicketByDatesComponent;
  let fixture: ComponentFixture<BookTicketByDatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookTicketByDatesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookTicketByDatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
