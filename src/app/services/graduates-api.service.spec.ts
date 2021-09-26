import { TestBed } from '@angular/core/testing';

import { GraduatesApiService } from './graduates-api.service';

describe('GraduatesApiService', () => {
  let service: GraduatesApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GraduatesApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
