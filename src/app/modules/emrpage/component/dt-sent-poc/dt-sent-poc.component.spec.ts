import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DtSentPocComponent } from './dt-sent-poc.component';

describe('DtSentPocComponent', () => {
  let component: DtSentPocComponent;
  let fixture: ComponentFixture<DtSentPocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DtSentPocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DtSentPocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
