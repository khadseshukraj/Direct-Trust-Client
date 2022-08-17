import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DtPatientReferralWIPComponent } from './dt-patient-referral-wip.component';

describe('DtPatientReferralWIPComponent', () => {
  let component: DtPatientReferralWIPComponent;
  let fixture: ComponentFixture<DtPatientReferralWIPComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DtPatientReferralWIPComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DtPatientReferralWIPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
