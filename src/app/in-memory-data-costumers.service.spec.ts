import { TestBed, inject } from '@angular/core/testing';

import { InMemoryDataCostumersService } from './in-memory-data-costumers.service';

describe('InMemoryDataCostumersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InMemoryDataCostumersService]
    });
  });

  it('should be created', inject([InMemoryDataCostumersService], (service: InMemoryDataCostumersService) => {
    expect(service).toBeTruthy();
  }));
});
