import { TestBed } from '@angular/core/testing';

import { BuyPolicyService } from './buy-policy.service';

describe('BuyPolicyService', () => {
  let service: BuyPolicyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BuyPolicyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
