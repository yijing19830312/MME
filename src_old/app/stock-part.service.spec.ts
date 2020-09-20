import { TestBed } from '@angular/core/testing';

import { StockPartService } from './stock-part.service';

describe('StockPartService', () => {
  let service: StockPartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StockPartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
