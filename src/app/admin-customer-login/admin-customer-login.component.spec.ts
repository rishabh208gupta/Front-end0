import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCustomerLoginComponent } from './admin-customer-login.component';

describe('AdminCustomerLoginComponent', () => {
  let component: AdminCustomerLoginComponent;
  let fixture: ComponentFixture<AdminCustomerLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminCustomerLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCustomerLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
