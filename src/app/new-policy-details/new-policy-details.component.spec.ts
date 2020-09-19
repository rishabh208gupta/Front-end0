import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewPolicyDetailsComponent } from './new-policy-details.component';

describe('NewPolicyDetailsComponent', () => {
  let component: NewPolicyDetailsComponent;
  let fixture: ComponentFixture<NewPolicyDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewPolicyDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewPolicyDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
