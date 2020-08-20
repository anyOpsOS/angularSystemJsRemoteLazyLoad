import { TestBed } from '@angular/core/testing';

import { LazyAService } from './lazy-a.service';

describe('LazyAService', () => {
  let service: LazyAService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LazyAService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
