import { TestBed } from '@angular/core/testing';

import { CalculatePremiumService } from './calculate-premium.service';

describe('CalculatePremiumService', () => {
  let service: CalculatePremiumService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculatePremiumService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
