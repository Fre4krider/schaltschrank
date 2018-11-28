import { TestBed } from '@angular/core/testing';

import { RackDataService } from './rack-data.service';

describe('RackDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RackDataService = TestBed.get(RackDataService);
    expect(service).toBeTruthy();
  });
});
