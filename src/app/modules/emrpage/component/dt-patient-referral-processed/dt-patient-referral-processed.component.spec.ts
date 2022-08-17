import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DtPatientReferralProcessedComponent } from './dt-patient-referral-processed.component';

describe('DtPatientReferralProcessedComponent', () => {
  let component: DtPatientReferralProcessedComponent;
  let fixture: ComponentFixture<DtPatientReferralProcessedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DtPatientReferralProcessedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DtPatientReferralProcessedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
