import { TestBed } from '@angular/core/testing';

import { TraininfoService } from './traininfo.service';

describe('TraininfoService', () => {
  let service: TraininfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TraininfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
