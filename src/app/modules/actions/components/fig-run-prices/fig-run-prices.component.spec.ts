import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FigRunPricesComponent } from './fig-run-prices.component';

describe('FigRunPricesComponent', () => {
    let component: FigRunPricesComponent;
    let fixture: ComponentFixture<FigRunPricesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        declarations: [FigRunPricesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
      fixture = TestBed.createComponent(FigRunPricesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
