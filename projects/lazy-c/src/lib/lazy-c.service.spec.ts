import { TestBed } from '@angular/core/testing';

import { LazyCService } from './lazy-c.service';

describe('LazyCService', () => {
  let service: LazyCService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LazyCService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
