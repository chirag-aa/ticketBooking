import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsAppComponent } from './news-app.component';

describe('NewsAppComponent', () => {
  let component: NewsAppComponent;
  let fixture: ComponentFixture<NewsAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsAppComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
