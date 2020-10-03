import { TestBed } from '@angular/core/testing';

import { RenewPolicyService } from './renew-policy.service';

describe('RenewPolicyService', () => {
  let service: RenewPolicyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RenewPolicyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
