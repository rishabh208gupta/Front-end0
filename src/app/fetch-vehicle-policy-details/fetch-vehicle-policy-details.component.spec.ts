import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FetchVehiclePolicyDetailsComponent } from './fetch-vehicle-policy-details.component';

describe('FetchVehiclePolicyDetailsComponent', () => {
  let component: FetchVehiclePolicyDetailsComponent;
  let fixture: ComponentFixture<FetchVehiclePolicyDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FetchVehiclePolicyDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FetchVehiclePolicyDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
