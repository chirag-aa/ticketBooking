import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AadharkycComponent } from './aadharkyc.component';

describe('AadharkycComponent', () => {
  let component: AadharkycComponent;
  let fixture: ComponentFixture<AadharkycComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AadharkycComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AadharkycComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
