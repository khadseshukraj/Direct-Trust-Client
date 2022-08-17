import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DtPlanCareProcessedComponent } from './dt-plan-care-processed.component';

describe('DtPlanCareProcessedComponent', () => {
  let component: DtPlanCareProcessedComponent;
  let fixture: ComponentFixture<DtPlanCareProcessedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DtPlanCareProcessedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DtPlanCareProcessedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
