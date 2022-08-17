import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DtClinicUserMappingComponent } from './dt-clinic-user-mapping.component';

describe('DtClinicUserMappingComponent', () => {
    let component: DtClinicUserMappingComponent;
    let fixture: ComponentFixture<DtClinicUserMappingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        declarations: [DtClinicUserMappingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
      fixture = TestBed.createComponent(DtClinicUserMappingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
