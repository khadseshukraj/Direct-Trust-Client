import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EMRaddviewComponent } from './emraddview.component';

describe('EMRaddviewComponent', () => {
  let component: EMRaddviewComponent;
  let fixture: ComponentFixture<EMRaddviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EMRaddviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EMRaddviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
