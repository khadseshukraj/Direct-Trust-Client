import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DTIncomingMessageDetailComponent } from './dtincoming-message-detail.component';

describe('DTPocNotFoundComponent', () => {
    let component: DTIncomingMessageDetailComponent;
    let fixture: ComponentFixture<DTIncomingMessageDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        declarations: [DTIncomingMessageDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
      fixture = TestBed.createComponent(DTIncomingMessageDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
