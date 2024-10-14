import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SummarySelectedEmpComponent } from './summary-selected-emp.component';

describe('SummarySelectedEmpComponent', () => {
  let component: SummarySelectedEmpComponent;
  let fixture: ComponentFixture<SummarySelectedEmpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SummarySelectedEmpComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SummarySelectedEmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
