import { TestBed } from '@angular/core/testing';

import { StockRequestService } from './stock-request.service';

describe('StockRequestService', () => {
  let service: StockRequestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StockRequestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
