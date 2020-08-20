import { TestBed } from '@angular/core/testing';

import { LazyBService } from './lazy-b.service';

describe('LazyBService', () => {
  let service: LazyBService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LazyBService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
