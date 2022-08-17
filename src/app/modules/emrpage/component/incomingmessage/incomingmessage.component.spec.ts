import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncomingmessageComponent } from './incomingmessage.component';

describe('IncomingmessageComponent', () => {
  let component: IncomingmessageComponent;
  let fixture: ComponentFixture<IncomingmessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncomingmessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncomingmessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
