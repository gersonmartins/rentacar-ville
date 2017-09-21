import { TestBed, inject } from '@angular/core/testing';

import { InMemoryDataCarsService } from './in-memory-data-cars.service';

describe('InMemoryDataCarsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InMemoryDataCarsService]
    });
  });

  it('should be created', inject([InMemoryDataCarsService], (service: InMemoryDataCarsService) => {
    expect(service).toBeTruthy();
  }));
});
