import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClaimSuccessfulComponent } from './claim-successful.component';

describe('ClaimSuccessfulComponent', () => {
  let component: ClaimSuccessfulComponent;
  let fixture: ComponentFixture<ClaimSuccessfulComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClaimSuccessfulComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClaimSuccessfulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
