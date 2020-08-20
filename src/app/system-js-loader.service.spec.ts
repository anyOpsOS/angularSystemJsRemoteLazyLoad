import { TestBed } from '@angular/core/testing';

import { SystemJsLoaderService } from './system-js-loader.service';

describe('SystemJsLoaderService', () => {
  let service: SystemJsLoaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SystemJsLoaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
