import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdnavComponent } from './adnav.component';

describe('AdnavComponent', () => {
  let component: AdnavComponent;
  let fixture: ComponentFixture<AdnavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdnavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdnavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
