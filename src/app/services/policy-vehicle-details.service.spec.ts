import { TestBed } from '@angular/core/testing';

import { PolicyVehicleDetailsService } from './policy-vehicle-details.service';

describe('PolicyVehicleDetailsService', () => {
  let service: PolicyVehicleDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PolicyVehicleDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
