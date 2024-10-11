import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewPayrollComponent } from './review-payroll.component';

describe('ReviewPayrollComponent', () => {
  let component: ReviewPayrollComponent;
  let fixture: ComponentFixture<ReviewPayrollComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReviewPayrollComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReviewPayrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
