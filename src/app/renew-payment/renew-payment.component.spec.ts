import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RenewPaymentComponent } from './renew-payment.component';

describe('RenewPaymentComponent', () => {
  let component: RenewPaymentComponent;
  let fixture: ComponentFixture<RenewPaymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RenewPaymentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RenewPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
