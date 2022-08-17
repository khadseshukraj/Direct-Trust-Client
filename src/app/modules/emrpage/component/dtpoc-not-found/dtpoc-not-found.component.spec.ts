import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DTPocNotFoundComponent } from './dtpoc-not-found.component';

describe('DTPocNotFoundComponent', () => {
  let component: DTPocNotFoundComponent;
  let fixture: ComponentFixture<DTPocNotFoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DTPocNotFoundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DTPocNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
