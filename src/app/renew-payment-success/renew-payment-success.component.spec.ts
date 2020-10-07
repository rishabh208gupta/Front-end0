import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RenewPaymentSuccessComponent } from './renew-payment-success.component';

describe('RenewPaymentSuccessComponent', () => {
  let component: RenewPaymentSuccessComponent;
  let fixture: ComponentFixture<RenewPaymentSuccessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RenewPaymentSuccessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RenewPaymentSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
